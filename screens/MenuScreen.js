import HomeScreen from "./HomeScreen";
import PracticeScreen from "./PracticeScreen";
import ProfileScreen from "./ProfileScreen";
import TabNavigator from "../components/TabNavigator";

const tabScreens = [
  {
    name: "Home",
    component: HomeScreen,
    iconSource: require("../assets/navigation/home.png"),
  },
  {
    name: "Practice",
    component: PracticeScreen,
    iconSource: require("../assets/navigation/practice.png"),
  },
  {
    name: "Profile",
    component: ProfileScreen,
    iconSource: require("../assets/navigation/profile-f.png"),
  },
];

const MenuScreen = () => {
  return (
    <TabNavigator tabScreens={tabScreens} />
  );
};

export default MenuScreen;
