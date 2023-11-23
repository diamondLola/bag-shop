import React from "react";
import InputScss from "./Input.module.scss";

export default function Input({ placeholder, type, width }) {
  return (
    <div className={InputScss.input} style={{ width: width }}>
      <input required type={type} placeholder={placeholder} />
    </div>
  );
}

// <InputComponent placeholder="Enter text" type="text" width="200px" />
