import { PfButton } from '@profabric/react-components';
import { useState } from 'react';
import _ from 'lodash';

const themes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light',
  'link',
];

export function App() {
  const [components, setComponents] = useState([
    themes.map((t) => ({
      theme: t,
      text: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
      loading: false,
      size: 'default',
    })),
    themes.map((t) => ({
      theme: t,
      text: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
      loading: false,
      size: 'small',
    })),
    themes.map((t) => ({
      theme: t,
      text: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
      loading: false,
      size: 'large',
    })),
  ]);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout | null>(null);

  const handleClick = (item: any) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    setComponents(
      components.map((chunk) =>
        chunk.map((c) => ({ ...c, loading: _.isEqual(c, item) }))
      )
    );

    const tID: NodeJS.Timeout = setTimeout(() => {
      setComponents(
        components.map((chunk) => chunk.map((c) => ({ ...c, loading: false })))
      );
    }, 3000);

    setTimeoutID(tID);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Buttons</h1>
      {components.map((chunk) => (
        <div className="row gx-2 mb-3">
          {chunk.map((c) => (
            <PfButton
              className="col"
              block
              theme={c.theme as any}
              size={c.size as any}
              loading={c.loading}
              onClick={() => handleClick(c)}
            >
              {c.text}
            </PfButton>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
