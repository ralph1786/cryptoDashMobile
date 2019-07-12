import React, { Component } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import currencyImage from "./currencyImage";
import { selectedCurrency } from "../store/actions";
import { connect } from "react-redux";
import FadeInAnimation from "./FadeInAnimation";
import { Navigation } from "react-native-navigation";
import SvgUri from "react-native-svg-uri";

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
    const { name, logo_url, currency, price } = this.props.currency;

    //Function to distinguish between an svg or other file and use
    //corresponding component.
    const showLogo = logo => {
      if (logo.split("").slice(-2, -1) == "v") {
        return <SvgUri width="60" height="60" source={{ uri: logo }} />;
      } else {
        return <Image style={styles.imageStyling} source={{ uri: logo }} />;
      }
    };
    return (
      <TouchableOpacity onPress={() => this.onPressHandler()}>
        <FadeInAnimation>
          <View style={styles.container}>
            {showLogo(logo_url)}
            <Text style={styles.textStyling}>
              {name} ({currency})
            </Text>
            <Text style={styles.priceStyling}>$ {price.slice(0, 8)}</Text>
          </View>
        </FadeInAnimation>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 10,
    margin: 5,
    backgroundColor: "#99c8f7",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    borderRadius: 10,
    marginLeft: 20
  },
  landscapeContainer: {
    width: "60%",
    padding: 10,
    margin: 5,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    borderRadius: 10,
    marginLeft: 20
  },
  imageStyling: {
    width: 60,
    height: 60
  },
  textStyling: {
    marginLeft: 20
  },
  priceStyling: {
    marginLeft: 10,
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
