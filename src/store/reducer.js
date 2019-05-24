const initialState = {
  currencies: [],
  selectedCurrency: null
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CURRENCIES":
      return {
        ...state,
        currencies: action.payload
      };
    default:
      return state;
  }
};

export default currencyReducer;
