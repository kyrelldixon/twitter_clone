import { useState } from 'react';

export const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }
  
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}