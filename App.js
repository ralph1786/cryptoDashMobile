import React from "react";
import { Navigation } from "react-native-navigation";
import DashboardScreen from "./src/screens/Dashboard";
import HomeScreen from "./src/screens/Home";
import WelcomeScreen from "./src/screens/Welcome";
import storeConfig from "./src/store/storeConfig";
import { Provider } from "react-redux";

const store = storeConfig();

//Screen Registration
Navigation.registerComponent(
  "cryptoDash-home",
  () => props => (
    <Provider store={store}>
      <HomeScreen {...props} />
    </Provider>
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
