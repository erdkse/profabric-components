import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-components',
  taskQueue: 'async',
  globalStyle: 'src/global/main.scss',
  globalScript: 'src/global/main.ts',
  plugins: [
    sass({
      injectGlobalPaths: [
        // Bootstrap 5
        `${__dirname}/../../node_modules/bootstrap-v5/scss/_functions.scss`,
        `${__dirname}/../../node_modules/bootstrap-v5/scss/_variables.scss`,
        `${__dirname}/../../node_modules/bootstrap-v5/scss/_mixins.scss`,
        `${__dirname}/../../node_modules/bootstrap-v5/scss/_helpers.scss`,
        // Bootstrap 4
        `${__dirname}/../../node_modules/bootstrap-v4/scss/_functions.scss`,
        `${__dirname}/../../node_modules/bootstrap-v4/scss/_variables.scss`,
        `${__dirname}/../../node_modules/bootstrap-v4/scss/_mixins.scss`,
        `${__dirname}/../../node_modules/bootstrap-v4/scss/_helpers.scss`,
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
    },
    reactOutputTarget({
      componentCorePackage: '@profabric/web-components',
      proxiesFile:
        '../../../packages/web-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@profabric/web-components',
      directivesProxyFile:
        '../../../packages/web-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../packages/web-components-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
