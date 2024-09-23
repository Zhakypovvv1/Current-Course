import React, { useState, useEffect } from "react";
import { GET_COURSE_ASYNC, CONVERT_CURRENCY_ASYNC } from "../../api/api";
import Loader from "../Loader/Loader";
import Categories from "../Categories/Categories";
import s from "./Home.module.scss";
import Input from "../Input/Input";
import Item from "../Item/Item";

const Home = () => {
  const [state, setState] = useState({
    data: [],
    fromCurrency: "USD",
    toCurrency: "KGS",
    amount: 1,
    convertedAmount: 0,
    loading: false,
    error: null,
  });

  useEffect(() => {
    GET_COURSE_ASYNC(setState, { course: state.fromCurrency });
  }, [state.fromCurrency]);

  const handleConvert = () => {
    CONVERT_CURRENCY_ASYNC(setState, {
      amount: state.amount,
      fromCurrency: state.fromCurrency,
      toCurrency: state.toCurrency,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const {
    data,
    fromCurrency,
    toCurrency,
    amount,
    convertedAmount,
    loading,
    error,
  } = state;

  return (
    <div className={s["home-container"]}>
      {error && <p className={s["home-error"]}>{error}</p>}
      {loading && <Loader />}
      <Categories
        label="From"
        name="fromCurrency"
        value={fromCurrency}
        options={data}
        onChange={handleInputChange}
      />
      <Categories
        label="To"
        name="toCurrency"
        value={toCurrency}
        options={data}
        onChange={handleInputChange}
      />
      <Input
        label="Amount"
        name="amount"
        value={amount}
        onChange={handleInputChange}
        type="number"
      />
      <Item convertedAmount={convertedAmount} handleConvert={handleConvert} />
    </div>
  );
};

export default Home;
