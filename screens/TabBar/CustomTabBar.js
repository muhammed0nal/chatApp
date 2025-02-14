import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CustomTabBar({ navigation, state }) {
  const activeTabIndex = state.index;
  console.log(state.routeNames[activeTabIndex]);
  return (
    <View style={styles.root}>
      <Pressable
        style={[
          {
            borderRightColor: "white",
            borderRightWidth: 1,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          state.index !== 0 && styles.activeTab,
        ]}
        onPress={() => navigation.navigate("FriendsScreen")}
      >
        <Ionicons
          name="chatbubbles-outline"
          color={activeTabIndex === 0 ? "white" : "#00ADB5"}
          size={24}
        />
      </Pressable>
      <Pressable
        style={[
          {
            borderRightColor: "white",
            borderRightWidth: 1,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          state.index !== 1 && styles.activeTab,
        ]}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <Ionicons
          name="search"
          color={activeTabIndex === 1 ? "white" : "#00ADB5"}
          size={24}
        />
      </Pressable>
      <Pressable
        style={[
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          state.index !== 2 && styles.activeTab,
        ]}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Ionicons
          name="person"
          color={activeTabIndex === 2 ? "white" : "#00ADB5"}
          size={24}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    bottom: 10,
    width: "90%",
    alignSelf: "center",
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#222831",
    borderTopWidth: 0,
  },
  activeTab: {
    opacity: 0.5,
  },
});
