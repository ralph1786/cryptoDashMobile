import React, { Component } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import currencyImage from "./currencyImage";
import { selectedCurrency } from "../store/actions";
import { connect } from "react-redux";
import FadeInAnimation from "./FadeInAnimation";
import { Navigation } from "react-native-navigation";

class CryptoCard extends Component {
  onPressHandler = () => {
    this.props.selectedCurrency(this.props.currency);
    Navigation.push(this.props.componentId, {
      component: {
        name: "cryptoDash-dashboard",
        options: {
          topBar: {
            title: {
              text: "Dashboard",
              color: "blue"
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.onPressHandler()}>
        <FadeInAnimation>
          <View style={styles.container}>
            <Image
              style={styles.imageStyling}
              source={{ uri: currencyImage(this.props.currency.currency) }}
            />
            <Text style={styles.textStyling}>
              {this.props.currency.currency}
            </Text>
            <Text style={styles.priceStyling}>
              $ {this.props.currency.price.slice(0, 7)}
            </Text>
          </View>
        </FadeInAnimation>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    margin: 5,
    backgroundColor: "#99c8f7",
    flexDirection: "row",
    alignItems: "center",
    height: 90
  },
  imageStyling: {
    width: 70,
    height: 60,
    marginLeft: 20
  },
  textStyling: {
    marginLeft: 30
  },
  priceStyling: {
    marginLeft: 40,
    color: "red"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    selectedCurrency: currency => dispatch(selectedCurrency(currency))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CryptoCard);
