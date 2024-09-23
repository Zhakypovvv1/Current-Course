import React from "react";
import s from "./Categories.module.scss";

const Categories = ({ label, name, value, options, onChange }) => {
  return (
    <div className={s["categories-container"]}>
      <label className={s["categories-label"]}>{label}</label>
      <select
        className={s["categories-select"]}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
