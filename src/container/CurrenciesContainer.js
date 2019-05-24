import React, { Component } from "react";
import { Container, Content } from "native-base";
import { View } from "react-native";
import CryptoCard from "../components/CryptoCard";

class CurrenciesContainer extends Component {
  render() {
    return (
      <View>
        <CryptoCard currency="Bitcoin" />
      </View>
    );
  }
}

export default CurrenciesContainer;
