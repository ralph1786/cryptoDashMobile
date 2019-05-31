import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import CryptoCard from "../components/CryptoCard";
import { connect } from "react-redux";
import { fetchCurrencies } from "../store/actions";

class CurrenciesContainer extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {
    const arrayCurrencies = this.props.currencies.map((currency, index) => (
      <CryptoCard
        key={index}
        currency={currency}
        componentId={this.props.componentId}
      />
    ));

    return (
      <View>
        {this.props.isLoading ? (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        ) : (
          arrayCurrencies
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.currencies,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrencies: () => dispatch(fetchCurrencies())
  };
};

const styles = StyleSheet.create({
  indicator: {
    marginTop: "50%"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrenciesContainer);
