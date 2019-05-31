import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import navigationTabs from "../navigation/navigationTabs";
import FadeInAnimation from "../components/FadeInAnimation";
import backgroundImage from "../assets/icons/backgroundImg.jpeg";
import Button from "../components/Button";

class WelcomeScreen extends Component {
  proceedHandler = () => {
    navigationTabs();
  };

  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ opacity: 0.8 }}
      >
        <View style={styles.container}>
          <FadeInAnimation>
            <Text style={styles.messageStyling}>Welcome to CryptoDash</Text>
            <Button onPress={this.proceedHandler} />
          </FadeInAnimation>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  messageStyling: {
    fontSize: 24,
    fontFamily: "Georgia-BoldItalic",
    marginBottom: "5%",
    color: "white"
  }
});

export default WelcomeScreen;
