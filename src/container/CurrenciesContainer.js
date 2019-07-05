import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import CryptoCard from "../components/CryptoCard";
import { connect } from "react-redux";
import { fetchCurrencies } from "../store/actions";

class CurrenciesContainer extends Component {
  state = {
    refreshing: false
  };

  onRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.props.fetchCurrencies();
        this.setState({
          refreshing: false
        });
      }
    );
  };

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  renderItem = ({ item }) => (
    <CryptoCard
      key={item.id}
      currency={item}
      componentId={this.props.componentId}
    />
  );
  render() {
    console.log(this.props.currencies);
    return (
      <View>
        {this.props.isLoading ? (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        ) : (
          <FlatList
            data={this.props.currencies}
            renderItem={this.renderItem}
            onRefresh={this.onRefresh}
            refreshing={this.state.refreshing}
            keyExtractor={item => item.currency}
          />
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
