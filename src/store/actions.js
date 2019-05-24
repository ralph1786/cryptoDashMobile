import axios from "axios";
import { secondApiKey } from "../../constant";

const loadCurrencies = currencies => {
  return {
    type: "ALL_CURRENCIES",
    payload: currencies
  };
};

export const fetchCurrencies = () => {
  return dispatch => {
    return axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${secondApiKey}`)
      .then(res => {
        const listCurrencies = res.data.slice(0, 6);
        dispatch(loadCurrencies(listCurrencies));
        // debugger;
      })
      .catch(err => console.log(err));
  };
};
