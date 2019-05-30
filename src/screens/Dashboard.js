import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Content
} from "native-base";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Button } from "react-native";
import CryptoCard from "../components/CryptoCard";
import ChartContainer from "../container/ChartContainer";

class DashboardScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            {this.props.selectedCurrency === null ? null : (
              <CryptoCard currency={this.props.selectedCurrency} />
            )}
          </View>
          <View>
            {this.props.selectedCurrency === null ? (
              <Text style={styles.messageStyling}>
                Please Select A Currency
              </Text>
            ) : (
              <ChartContainer />
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  messageStyling: {
    marginLeft: "20%",
    marginTop: "40%",
    fontSize: 18,
    color: "blue"
  }
});

const mapStateToProps = state => {
  return {
    selectedCurrency: state.selectedCurrency
  };
};

export default connect(mapStateToProps)(DashboardScreen);
