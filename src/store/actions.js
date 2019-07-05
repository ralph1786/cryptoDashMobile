import axios from "axios";
import { secondApiKey } from "../../constant";

const loadCurrencies = listCurrencies => {
  return {
    type: "ALL_CURRENCIES",
    payload: listCurrencies
  };
};

export const selectedCurrency = currency => {
  return {
    type: "SELECTED_CURRENCY",
    payload: currency
  };
};

const isLoading = () => {
  return {
    type: "IS_LOADING"
  };
};

export const fetchCurrencies = () => {
  return dispatch => {
    return axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${secondApiKey}`)
      .then(res => {
        const listCurrencies = res.data.slice(0, 10);
        dispatch(loadCurrencies(listCurrencies));
        dispatch(isLoading());
      })
      .catch(err => console.log(err));
  };
};
