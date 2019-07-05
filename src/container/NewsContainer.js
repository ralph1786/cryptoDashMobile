import React, { Component } from "react";
import { View, FlatList, StyleSheet, RefreshControl } from "react-native";
import axios from "axios";
import { apiKey } from "../../constant";
import NewsCard from "../components/NewsCard";

class NewsContainer extends Component {
  state = {
    articles: [],
    refreshing: false
  };

  fetchArticles = () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apiKey}`
      )
      .then(res => {
        this.setState({
          articles: res.data.Data,
          refreshing: false
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchArticles();
  }

  onRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchArticles()
    );
  };

  render() {
    return (
      <View>
        <FlatList
          style={styles.flatListStyling}
          data={this.state.articles}
          onRefresh={this.onRefresh}
          refreshing={this.state.refreshing}
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
