import cssProperties from './cssProperties.json';

export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
  );
}

export const convertJSONtoCSS = (): { [x: string]: string } => {
  const css = Object.keys(cssProperties).reduce((object, key) => {
    return {
      ...object,
      [key]: `var(--pf-${key}, ${cssProperties[key].initial})`,
    };
  }, {});

  return css;
};

export const getObjectUrl = (svg: string) => {
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  return URL.createObjectURL(blob);
};

// export const getGlobalStyles = () => {
//   const style = document.createElement('style');
//   const styleSheets = Object.values(document.styleSheets);
//   style.innerHTML = styleSheets
//     .reduce((t, styleSheet) => {
//       return [...t, ...Object.values(styleSheet.cssRules)];
//     }, [])
//     .map((rule) => rule.cssText)
//     .join('\n');
//   return style;
// };

export const loadingSvg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="rotate(0 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(30 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(60 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(90 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(120 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(150 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(180 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(210 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(240 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(270 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(300 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <g transform="rotate(330 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="rgba(NaN, NaN, NaN, 0)">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
    </rect>
  </g>
</svg>
`;

export const noImageSvg = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;" xml:space="preserve">
	<g>
		<g>
			<g>
				<path d="M309.333,128h-12.48c-4.416-12.416-16.277-21.333-30.187-21.333H224c-14.528,0-26.816,9.728-30.699,22.997
				c-1.813,1.152-3.285,2.859-4.139,4.928c-1.664,3.989-0.747,8.576,2.304,11.627l29.035,29.035
				c7.808-2.773,16.085-4.565,24.832-4.565c41.173,0,74.667,33.493,74.667,74.667c0,8.747-1.792,17.024-4.565,24.832l46.613,46.613
				c2.027,2.027,4.736,3.115,7.552,3.115c0.789,0,1.579-0.085,2.368-0.277c3.563-0.811,6.485-3.392,7.701-6.848
				c2.901-8.235,4.373-16.576,4.373-24.789v-85.333C384,161.493,350.507,128,309.333,128z" />
				<path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333
				S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224c0-57.92,22.293-110.613,58.496-150.421l52.267,52.267
				c-15.808,14.08-25.429,34.176-25.429,55.488V288c0,41.173,33.493,74.667,74.667,74.667h128c10.773,0,21.291-2.773,31.019-7.232
				l55.403,55.403C355.947,447.04,303.253,469.333,245.333,469.333z M170.667,245.333c0-16.725,5.931-31.851,15.296-44.288
				l103.68,103.68C277.205,314.091,262.059,320,245.333,320C204.16,320,170.667,286.507,170.667,245.333z M410.837,395.755
				L94.933,79.851c39.808-36.203,92.501-58.496,150.421-58.496c123.52,0,224,100.48,224,224
				C469.333,303.253,447.04,355.947,410.837,395.755z" />
			</g>
		</g>
	</g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
	<g></g>
</svg>`;
