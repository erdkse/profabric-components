import { Component, h, Host, Element, Prop, State, Watch } from '@stencil/core';
import {
  decodeURL,
  getObjectUrl,
  loadingSvg,
  noImageSvg,
} from '../../utils/utils';

@Component({
  tag: 'pf-image',
  styleUrl: 'style.scss',
  shadow: true,
})
export class Image {
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) src: string = '';
  @Prop({ reflect: true, mutable: true }) fallbackSrc: string = '';
  @Prop({ reflect: true, mutable: true }) alt: string = '';
  @Prop({ reflect: true, mutable: true }) width: number;
  @Prop({ reflect: true, mutable: true }) height: number;
  @Prop({ reflect: true, mutable: true }) loading: boolean = false;
  @Prop({ reflect: true, mutable: true }) rounded: boolean = false;

  @State() hasSrcfailed: boolean = false;
  @State() hasFallbackSrcfailed: boolean = false;
  @State() imageLoading: boolean = false;

  @Watch('loading')
  watchLoading(value) {
    this.imageLoading = value;
  }

  @Watch('src')
  watchSrc(value) {
    if (value && !decodeURL(value) && value.charAt(0) !== '/') {
      this.src = `/${value}`;
    }

    this.hasSrcfailed = false;
    this.hasFallbackSrcfailed = false;
    this.imageLoading = true;
  }

  @Watch('fallbackSrc')
  watchFallbackSrc(value) {
    if (value && !decodeURL(value) && value.charAt(0) !== '/') {
      this.fallbackSrc = `/${value}`;
    }
    this.hasSrcfailed = false;
    this.hasFallbackSrcfailed = false;
    this.imageLoading = true;
  }

  onImageLoad(event) {
    const imagePath = decodeURL(event.target.src).pathname;
    const srcPath = decodeURL(this.src)
      ? decodeURL(this.src).pathname
      : this.src;
    const fallbackSrcPath = decodeURL(this.fallbackSrc)
      ? decodeURL(this.fallbackSrc).pathname
      : this.fallbackSrc;

    if (!this.hasSrcfailed && (!this.src || imagePath === srcPath)) {
      this.hasSrcfailed = false;
    }
    if (
      !this.hasFallbackSrcfailed &&
      (!this.fallbackSrc || imagePath === fallbackSrcPath)
    ) {
      this.hasFallbackSrcfailed = false;
    }
    this.imageLoading = false;
  }

  onImageError(event) {
    const imagePath = decodeURL(event.target.src).pathname;
    const srcPath = decodeURL(this.src)
      ? decodeURL(this.src).pathname
      : this.src;
    const fallbackSrcPath = decodeURL(this.fallbackSrc)
      ? decodeURL(this.fallbackSrc).pathname
      : this.fallbackSrc;
    if (!this.hasSrcfailed && (!this.src || imagePath === srcPath)) {
      this.hasSrcfailed = true;
    }
    if (
      !this.hasFallbackSrcfailed &&
      (!this.fallbackSrc || imagePath === fallbackSrcPath)
    ) {
      this.hasFallbackSrcfailed = true;
    }
    this.imageLoading = false;
  }

  componentWillLoad() {
    this.imageLoading = true;
  }

  getImageUrl() {
    if (this.imageLoading || this.loading) {
      return getObjectUrl(loadingSvg);
    }

    if (this.src && !this.hasSrcfailed) {
      return this.src;
    }

    if (this.fallbackSrc && !this.hasFallbackSrcfailed) {
      return this.fallbackSrc;
    }

    return getObjectUrl(noImageSvg);
  }

  render() {
    return (
      <Host>
        <img
          class={{ rounded: this.rounded }}
          style={{
            width: `${this.width}px`,
            height: `${this.height}px`,
          }}
          src={this.getImageUrl()}
          alt={this.alt}
          width={this.width}
          height={this.height}
          onLoad={this.onImageLoad.bind(this)}
          onError={this.onImageError.bind(this)}
        />
      </Host>
    );
  }
}
