const initialState = {
  currencies: [],
  selectedCurrency: null,
  isLoading: true
};

const currencyReducer = (state = initialState, action) => {
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
    case "IS_LOADING":
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default currencyReducer;
