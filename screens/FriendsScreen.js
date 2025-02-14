import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function FriendsScreen() {
  return (
    <ScrollView style={styles.root}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#8A8A8A"
        style={styles.searchInput}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 24,
    backgroundColor: "#1C1C1E",
    height: "100%",
    paddingHorizontal: 20,
  },
  searchInput: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: "#00ADB5",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    color: "#E1E1E6",
    fontSize: 18,
    backgroundColor: "#2C2C2F",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
});
