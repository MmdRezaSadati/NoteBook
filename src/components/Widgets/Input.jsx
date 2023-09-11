import { ErrorMessage, Field } from "formik";
import React from "react";
const Input = ({ addClass, name, placeholder, label }) => {
  return (
    <div className={"form-item " + addClass}>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        placeholder={placeholder}
        id={name} 
      />
      <ErrorMessage name={name} className="error" component={"span"} />
    </div>
  );
};

export default Input;
