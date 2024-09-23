import { COURSE_API } from "../utils/config";

export const GET_COURSE_ASYNC = async (setState, option = {}) => {
  setState((prev) => ({ ...prev, loading: true }));
  const course = option.course || "";
  try {
    const request = await fetch(`${COURSE_API}/${course}`);
    if (!request.ok) {
      throw new Error(`Server error:${request.status}`);
    }
    const response = await request.json();
    setState((prev) => ({
      ...prev,
      data: Object.keys(response.conversion_rates),
      loading: false,
      error: null,
    }));
  } catch (error) {
    setState((prev) => ({
      ...prev,
      loading: false,
      error: error.message,
    }));
  }
};

export const CONVERT_CURRENCY_ASYNC = async (
  setState,
  { amount, fromCurrency, toCurrency }
) => {
  setState((prev) => ({ ...prev, loading: true }));
  try {
    const response = await fetch(`${COURSE_API}/${fromCurrency}`);
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    const rate = data.conversion_rates[toCurrency];
    setState((prev) => ({
      ...prev,
      convertedAmount: amount * rate,
      loading: false,
      error: null,
    }));
  } catch (error) {
    setState((prev) => ({
      ...prev,
      loading: false,
      error: error.message,
    }));
  }
};
