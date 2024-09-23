import React from "react";
import s from "./Input.module.scss";

const Input = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className={s["item-container"]}>
      <label className={s["item-label"]}>{label}</label>
      <input
        className={s["item-input"]}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
