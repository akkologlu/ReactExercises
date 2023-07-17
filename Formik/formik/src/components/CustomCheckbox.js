import { useField } from "formik";
import React from "react";

function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of use.</span>
      </div>

      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

export default CustomCheckbox;
