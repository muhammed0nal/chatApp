import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./context/Auth"; // AuthProvider'ı doğru şekilde import ettik
import Tabs from "./screens/TabBar/Tabs";
import LoginScreen from "./screens/LoginScreen";
import { useAuth } from "./context/Auth"; // useAuth'ı burada kullanıyoruz
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
const Stack = createStackNavigator();
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthContent />
      </NavigationContainer>
    </AuthProvider>
  );
}

const AuthContent = () => {
  const { isAuthenticated } = useAuth(); // useAuth hook'u burada kullanılıyor
  return (
    <>
      {isAuthenticated ? (
        <Tabs />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
