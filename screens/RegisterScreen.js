import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: false,
    password: false,
  });

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLoginSubmit = () => {
    setError({ password: false, username: false });
    if (loginValues.password === "") {
      console.log("password");
      setError((prev) => {
        return { ...prev, password: true };
      });
    }
    if (loginValues.username === "") {
      console.log("username");
      setError((prev) => {
        return { ...prev, username: true };
      });
    }
  };

  const gotoRegisterScreen = () => {
    console.log("registera gidelim");
  };
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" backgroundColor="#393E46" />
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: 100,
            height: 100,
            marginTop: "30%",
            marginBlock: "15%",
            opacity: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            zIndex: 300,
          }} // Resmin opaklığı 1 olarak kaldı
          source={require("../assets/app-icon.png")}
        />
        <View style={styles.card}>
          <View style={styles.innerCard}></View>
        </View>
        <View>
          <TextInput
            ref={usernameRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={loginValues?.username}
            onChangeText={(newText) => {
              setLoginValues((prev) => {
                return { ...prev, username: newText };
              });
            }}
            placeholder="username"
            placeholderTextColor="#EEEEEE"
            style={{
              marginBottom: !error.username && 20,
              marginTop: 50,
              backgroundColor: "#393E46",
              color: "#EEEEEE",
              width: "70%",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingTop: 15,
              paddingBottom: 15,
              alignSelf: "center",
            }}
          />
          {error.username && (
            <Text
              style={{ textAlign: "center", color: "red", marginBottom: 20 }}
            >
              Username cannot be empty.
            </Text>
          )}
          <TextInput
            onSubmitEditing={handleLoginSubmit}
            ref={passwordRef}
            onChangeText={(newText) => {
              setLoginValues((prev) => {
                return { ...prev, password: newText };
              });
            }}
            value={loginValues?.password}
            placeholder="password"
            placeholderTextColor="#EEEEEE"
            style={{
              marginBottom: !error.password && 20,
              backgroundColor: "#393E46",
              color: "#EEEEEE",
              width: "70%",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingTop: 15,
              paddingBottom: 15,
              alignSelf: "center",
            }}
          />
          {error.password && (
            <Text
              style={{ textAlign: "center", color: "red", marginBottom: 20 }}
            >
              Password cannot be empty.
            </Text>
          )}
          <Pressable
            onPress={handleLoginSubmit}
            style={{
              marginBottom: 5,
              backgroundColor: "#393E46",
              color: "#EEEEEE",
              width: "50%",
              height: 40,
              borderRadius: 10,
              paddingTop: 10,
              paddingBottom: 10,
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "#EEEEEE" }}>Login</Text>
          </Pressable>
          <Pressable
            onPress={gotoRegisterScreen}
            style={{
              height: 40,
              borderRadius: 10,
              paddingBottom: 10,
              alignSelf: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "#393E46" }}>
              Don't have an account? Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#393E46",
    height: "100%",
  },
  card: {
    backgroundColor: "#00ADB5",
    height: "70%",
    bottom: 40,
    width: "90%",
    borderBottomStartRadius: 20,
    borderRadius: 20,
    alignSelf: "center",
    position: "absolute",
  },
  innerCard: {
    backgroundColor: "#393E46",
    height: "20%",
    top: 0,
    borderBottomEndRadius: 200,
    borderBottomStartRadius: 200,
    width: "70%",
    alignSelf: "center",
    position: "absolute",
  },
});
