import { Navigation } from "react-native-navigation";
import DashboardScreen from "./src/screens/Dashboard";
import HomeScreen from "./src/screens/Home";
import WelcomeScreen from "./src/screens/Welcome";

//Screen Registration
Navigation.registerComponent("cryptoDash-home", () => HomeScreen);
Navigation.registerComponent("cryptoDash-dashboard", () => DashboardScreen);
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
