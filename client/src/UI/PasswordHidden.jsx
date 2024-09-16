import { Input, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { useState } from 'react';
import { BsFullscreen } from 'react-icons/bs';

const styles = {
  width: BsFullscreen
};

const PasswordHidden = ({setinputValue,valueData,}) => {
  const [visible, setVisible] = useState(false); 

  const handleChange = () => {
    setVisible(!visible);
  };

  // const handelChange = (value)=>{
  //   setinputValue(value)
  // }
  return (
    <InputGroup inside style={styles}>
      <Input  value={valueData}   onChange={setinputValue}  type={visible ? 'text' : 'password'} placeholder="Inter password" />
      <InputGroup.Button onClick={handleChange}>
        {visible ? <EyeIcon /> : <EyeSlashIcon />}
      </InputGroup.Button>
    </InputGroup>
  );
};

export default PasswordHidden

