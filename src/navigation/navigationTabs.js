import { Navigation } from "react-native-navigation";
import homeIcon from "../assets/icons/homeicon.png";
import dashboardIcon from "../assets/icons/dashboard.png";

const navigationTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabsId",
        children: [
          {
            component: {
              name: "cryptoDash-home",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Home",
                  icon: homeIcon
                }
              }
            }
          },
          {
            component: {
              name: "cryptoDash-dashboard",
              options: {
                bottomTab: {
                  text: "Dashboard",
                  fontSize: 12,
                  icon: dashboardIcon
                }
              }
            }
          }
        ]
      }
    }
  });
};

export default navigationTabs;
