import { Navigation } from "react-native-navigation";
import homeIcon from "../assets/icons/homeicon.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import newsIcon from "../assets/icons/news.png";

const navigationTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "cryptoDash-home"
                  }
                }
              ],
              options: {
                bottomTab: {
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
                  icon: dashboardIcon
                }
              }
            }
          },
          {
            component: {
              name: "cryptoDash-news",

              options: {
                bottomTab: {
                  text: "News",
                  icon: newsIcon
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
