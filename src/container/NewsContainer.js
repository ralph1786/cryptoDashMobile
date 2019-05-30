import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import { apiKey } from "../../constant";
import NewsCard from "../components/NewsCard";

class NewsContainer extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apiKey}`
      )
      .then(res => {
        this.setState(
          {
            articles: res.data.Data
          },
          () => console.log(this.state.articles)
        );
      });
  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.flatListStyling}
          data={this.state.articles}
          renderItem={({ item }) => (
            <NewsCard
              title={item.title}
              categories={item.categories}
              url={item.url}
            />
          )}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListStyling: {
    width: "100%"
  }
});

export default NewsContainer;
