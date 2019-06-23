import { useState } from 'react';

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, setTrue, setFalse];
}

export default useBoolean;