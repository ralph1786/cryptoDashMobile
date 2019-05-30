import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import navigationTabs from "../navigation/navigationTabs";
import FadeInAnimation from "../components/FadeInAnimation";

class WelcomeScreen extends Component {
  proceedHandler = () => {
    navigationTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <FadeInAnimation>
          <Text>Welcome to CryptoDash</Text>
          <Button title="Proceed" onPress={this.proceedHandler} />
        </FadeInAnimation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default WelcomeScreen;
