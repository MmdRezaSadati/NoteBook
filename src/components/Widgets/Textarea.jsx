import { Field } from 'formik';
import React from 'react';

const Textarea = ({ addClass, name, placeholder, type , label }) => {
  return (
    <div className={"form-item " + addClass}>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        placeholder={placeholder}
        id={name} 
        as={type}
      />
    </div>
  )
}

export default Textarea