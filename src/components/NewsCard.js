import React from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";

const NewsCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.contentStyling}>
        <Text>
          <Text style={styles.headerStyling}>Title:</Text> {props.title}
        </Text>
        <Text>
          <Text style={styles.headerStyling}>Categories:</Text>
          {props.categories}
        </Text>
        <Button title="Read More" onPress={() => Linking.openURL(props.url)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#dbe8fc",
    margin: "2%",
    borderRadius: 10
  },
  contentStyling: {
    margin: 5
  },
  headerStyling: {
    fontWeight: "700"
  }
});

export default NewsCard;
