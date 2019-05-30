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
    case "SELECTED_CURRENCY":
      return {
        ...state,
        selectedCurrency: action.payload
      };
    default:
      return state;
  }
};

export default currencyReducer;
