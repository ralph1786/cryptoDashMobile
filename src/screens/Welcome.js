import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import navigationTabs from "../navigation/navigationTabs";

class WelcomeScreen extends Component {
  proceedHandler = () => {
    navigationTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to CryptoDash</Text>
        <Button title="Proceed" onPress={this.proceedHandler} />
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
