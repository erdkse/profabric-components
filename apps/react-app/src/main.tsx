import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

(window as any).PF = {
  config: {
    mode: 'bs5',
  },
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
