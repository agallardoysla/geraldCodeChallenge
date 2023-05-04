import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../modules/home/HomeScreen";
import SupportScreen from "../modules/support/SupportScreen";
import { TabScreenNames } from "./constants/ScreenNames";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={TabScreenNames.Home} component={HomeScreen} />
      <Stack.Screen name={TabScreenNames.Support} component={SupportScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
