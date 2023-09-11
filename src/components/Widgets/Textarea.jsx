import { Field } from 'formik';
import React from 'react';

const Textarea = ({ addClass, name, placeholder, type, defaultValue , label }) => {
  return (
    <div className={"form-item " + addClass}>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        placeholder={placeholder}
        id={name} 
        as={type}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default Textarea