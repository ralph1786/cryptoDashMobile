import React, { Component } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import NewsCard from "../components/NewsCard";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const NEWS_QUERY = gql`
  query NewsQuery {
    news {
      title
      categories
      url
    }
  }
`;

class NewsContainer extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <View>
        <Query query={NEWS_QUERY} pollInterval={300000}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <View style={styles.indicator}>
                  <ActivityIndicator size="large" color="blue" />
                </View>
              );
            }
            if (error) console.log(error);
            return (
              <FlatList
                style={styles.flatListStyling}
                data={data.news}
                renderItem={({ item }) => (
                  <NewsCard
                    title={item.title}
                    categories={item.categories}
                    url={item.url}
                  />
                )}
                keyExtractor={item => item.title}
              />
            );
          }}
        </Query>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListStyling: {
    width: "100%"
  },
  indicator: {
    marginTop: "50%"
  }
});

export default NewsContainer;
