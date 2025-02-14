import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FriendsScreen from "../FriendsScreen";
import ProfileScreen from "../ProfileScreen";
import SearchScreen from "../SearchScreen";
import CustomTab from "./CustomTab";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="FriendsScreen"
      tabBar={(props) => {
        return <CustomTabBar {...props} />;
      }}
      screenOptions={({ route }) => ({
        header: () => <CustomTab currentScreen={route.name} />,
      })}
    >
      <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
