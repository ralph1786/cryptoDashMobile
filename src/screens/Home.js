import React, { Component } from "react";
import CurrenciesContainer from "../container/CurrenciesContainer";
import { View } from "react-native";

class HomeScreen extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Home",
          color: "blue"
        }
      }
    };
  }
  render() {
    return (
      <View>
        <CurrenciesContainer componentId={this.props.componentId} />
      </View>
    );
  }
}

export default HomeScreen;
