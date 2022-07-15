import {
  PfButton,
  PfCheckbox,
  PfImage,
  PfSelect,
} from '@profabric/react-components';
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
  const [buttons, setButtons] = useState([
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
  const [selects] = useState([
    {
      options: themes.map((t) => ({
        label: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
        value: t,
      })),
      label: 'Small',
      size: 'small',
    },
    {
      options: themes.map((t) => ({
        label: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
        value: t,
      })),
      label: 'Default',
      size: 'default',
    },
    {
      options: themes.map((t) => ({
        label: t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
        value: t,
      })),
      label: 'Large',
      size: 'large',
    },
  ]);
  const [checkboxes] = useState([
    {
      label: 'Checkbox',
      switchable: false,
    },
    {
      label: 'Switch',
      switchable: true,
    },
  ]);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout | null>(null);

  const handleClick = (item: any) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    setButtons(
      buttons.map((chunk) =>
        chunk.map((c) => ({ ...c, loading: _.isEqual(c, item) }))
      )
    );

    const tID: NodeJS.Timeout = setTimeout(() => {
      setButtons(
        buttons.map((chunk) => chunk.map((c) => ({ ...c, loading: false })))
      );
    }, 3000);

    setTimeoutID(tID);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Buttons</h1>
      {buttons.map((chunk, index) => (
        <div key={index} className="row gx-2 mb-3">
          {chunk.map((c) => (
            <PfButton
              key={c.theme}
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

      <div className="row gx-2 mb-3">
        {selects.map((select) => (
          <PfSelect
            key={select.label}
            className="col"
            label={select.label}
            options={select.options}
            size={select.size as any}
            onChange={(e: any) => console.log(e.target.value)}
          />
        ))}
      </div>
      <div className="row gx-2 mb-3">
        {checkboxes.map((checkbox) => (
          <PfCheckbox
            key={checkbox.label}
            className="col"
            switchable={checkbox.switchable}
            onChange={(e: any) => console.log(e.target.checked)}
          >
            {checkbox.label}
          </PfCheckbox>
        ))}
      </div>
      <div className="row gx-2 mb-3">
        <PfImage width={120} height={120} />
      </div>
    </div>
  );
}

export default App;
