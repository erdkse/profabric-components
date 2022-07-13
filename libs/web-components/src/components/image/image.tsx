import { Component, h, Host, Element, Prop, State, Watch } from '@stencil/core';
import { loadingSvg } from '../../utils/utils';

@Component({
  tag: 'pf-image',
  styleUrl: 'image.scss',
  assetsDirs: ['../../../assets'],
  shadow: true,
})
export class Image {
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) class: string = '';
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

  @Watch('class')
  watchClass(value: string) {
    if (!value.includes('rounded') && this.rounded) {
      this.class = `${this.class} rounded`;
    }
  }

  @Watch('loading')
  watchLoading(value) {
    this.imageLoading = value;
  }

  onImageLoad(event) {
    console.log(event.target.src);
    if (event.target.src === this.src) {
      this.hasSrcfailed = false;
    }
    if (event.target.src === this.fallbackSrc) {
      this.hasFallbackSrcfailed = false;
    }
    this.imageLoading = false;
  }

  onImageError(event) {
    console.log(event.target.src);
    if (event.target.src === this.src) {
      this.hasSrcfailed = true;
    }
    if (event.target.src === this.fallbackSrc) {
      this.hasFallbackSrcfailed = true;
    }
    this.imageLoading = false;
  }

  componentWillLoad() {
    this.imageLoading = true;
    this.watchClass(this.class);
  }

  getObjectUrl(svg: string) {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
  }

  getImageUrl() {
    if (this.imageLoading || this.loading) {
      return this.getObjectUrl(loadingSvg);
    }

    if (!this.hasSrcfailed) {
      return this.src;
    }

    if (!this.hasFallbackSrcfailed) {
      return this.fallbackSrc || '';
    }

    return '';
  }

  render() {
    return (
      <Host
        style={{
          width: `${this.width}px`,
          height: `${this.height}px`,
        }}
      >
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
