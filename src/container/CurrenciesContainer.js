import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import CryptoCard from "../components/CryptoCard";
import { connect } from "react-redux";
// import { fetchCurrencies } from "../store/actions";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CURRENCIES_QUERY = gql`
  query CurrenciesQuery {
    currencies {
      currency
      price
    }
  }
`;

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
        <Query query={CURRENCIES_QUERY} pollInterval={2000}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <View style={styles.indicator}>
                  <ActivityIndicator size="large" color="blue" />
                </View>
              );
            }
            if (error) console.log(error);

            const slicedData = data.currencies.slice(0, 10);
            return (
              <FlatList
                data={slicedData}
                renderItem={this.renderItem}
                onRefresh={this.onRefresh}
                refreshing={this.state.refreshing}
                keyExtractor={item => item.currency}
              />
            );
          }}
        </Query>
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
