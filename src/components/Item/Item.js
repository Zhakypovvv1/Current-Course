import React from "react";
import s from "./Item.module.scss";

const Item = ({ convertedAmount, handleConvert }) => {
  return (
    <>
      <button className={s["home-button"]} onClick={handleConvert}>
        Convert
      </button>
      <h2 className={s["home-result"]}>Converted Amount: {convertedAmount}</h2>
    </>
  );
};

export default Item;
