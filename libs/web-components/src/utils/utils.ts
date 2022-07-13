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
