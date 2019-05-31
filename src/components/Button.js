import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <Text style={styles.content}>Get Started</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#189dc9",
    padding: 10,
    borderRadius: 25,
    width: "50%",
    marginLeft: "20%",
    textAlign: "center"
  },
  content: {
    textAlign: "center",
    color: "white",
    fontSize: 16
  }
});

export default Button;
