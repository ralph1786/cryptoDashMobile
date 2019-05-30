import React, { Component } from "react";
import CurrenciesContainer from "../container/CurrenciesContainer";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import { Navigation } from "react-native-navigation";

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
    console.log(this.props.componentId);
    return (
      <View>
        <CurrenciesContainer componentId={this.props.componentId} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.currencies
  };
};

export default connect(mapStateToProps)(HomeScreen);
