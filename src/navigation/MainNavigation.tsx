import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      // initialRouteName={HomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
