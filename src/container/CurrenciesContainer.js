import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import CryptoCard from "../components/CryptoCard";
import { connect } from "react-redux";
import { fetchCurrencies } from "../store/actions";

class CurrenciesContainer extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {
    // console.log("from c-container", this.props.componentId);
    const arrayCurrencies = this.props.currencies.map((currency, index) => (
      <CryptoCard
        key={index}
        currency={currency}
        componentId={this.props.componentId}
      />
    ));

    return <View>{arrayCurrencies}</View>;
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.currencies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrencies: () => dispatch(fetchCurrencies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrenciesContainer);
