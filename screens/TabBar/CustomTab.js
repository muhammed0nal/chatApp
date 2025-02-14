import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomTab({ currentScreen }) {
  const [tabTitle, setTabTitle] = useState("");

  useEffect(() => {
    // currentScreen değiştiğinde tabTitle'ı güncelle
    switch (currentScreen) {
      case "FriendsScreen":
        setTabTitle("Friends");
        break;

      case "ProfileScreen":
        setTabTitle("Profile");
        break;

      case "SearchScreen":
        setTabTitle("Search");
        break;

      default:
        setTabTitle(""); // Varsayılan durum
        break;
    }
  }, [currentScreen]); // currentScreen değiştiğinde useEffect çalışacak

  return (
    <SafeAreaView style={{ backgroundColor: "#222831" }}>
      <StatusBar style="light" />
      <View style={styles.root}>
        <Text style={styles.title}>{tabTitle}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
    backgroundColor: "#222831",
    borderBottomColor: "#00ADB5",
    borderBottomWidth: 0.4,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
  },
});
