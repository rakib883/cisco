import { useCallback, useState } from 'react';
import { Toggle, Form, } from 'rsuite';

function CheckedInfo(props) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = useCallback(() => { useCallback
    setLoading(true);

    setTimeout(() => {
      setChecked(checked => !checked); 
      setLoading(false);
    }, 1000);
  }, []);

  return <Toggle loading={loading} checked={checked} onChange={toggle} {...props} />;
}

const Checked = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ borderLeft: '1px solid var(--rs-border-primary)', padding: '0 20px' }}>
          <Form>
            <Form.Group>
              <Toggle size="md" checked={checked} onChange={setChecked}>
                Checked
              </Toggle>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CheckedInfo