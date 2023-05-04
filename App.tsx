/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";

import React from "react";

import { View } from "react-native";
import AppNavigator from "./src/navigator";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
}

export default App;
