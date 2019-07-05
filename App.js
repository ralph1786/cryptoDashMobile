import React from "react";
import { Navigation } from "react-native-navigation";
import DashboardScreen from "./src/screens/Dashboard";
import HomeScreen from "./src/screens/Home";
import WelcomeScreen from "./src/screens/Welcome";
import NewsScreen from "./src/screens/News";
import storeConfig from "./src/store/storeConfig";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const store = storeConfig();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

//Screen Registration
Navigation.registerComponent(
  "cryptoDash-home",
  () => props => (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <HomeScreen {...props} />
      </Provider>
    </ApolloProvider>
  ),
  () => HomeScreen
);
Navigation.registerComponent(
  "cryptoDash-dashboard",
  () => props => (
    <Provider store={store}>
      <DashboardScreen {...props} />
    </Provider>
  ),
  () => DashboardScreen
);
Navigation.registerComponent("cryptoDash-welcome", () => WelcomeScreen);
Navigation.registerComponent(
  "cryptoDash-news",
  () => props => (
    <ApolloProvider client={client}>
      <NewsScreen {...props} />
    </ApolloProvider>
  ),
  () => NewsScreen
);

//Start screen for app
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "cryptoDash-welcome"
      }
    }
  });
});
