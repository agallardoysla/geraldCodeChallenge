import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "./components/TabIcon";
import { TabScreenNames, TabScreenTitles } from "./constants/ScreenNames";
import normalize from "../themes/layouts/normalize";
import { colors } from "../themes/layouts/colors";
import DrawerScreensContainer from "./components/DrawerScreensContainer";
import HomeStack from "./HomeStack";
import ContactScreen from "../modules/contact/ContactScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <DrawerScreensContainer title="Home">
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.primary,
            paddingTop: normalize(10),
            paddingBottom: normalize(15),
          },
          headerShown: false,
          tabBarActiveTintColor: colors.white,
        }}
      >
        <Tab.Screen
          name={TabScreenNames.Home}
          component={HomeStack}
          options={{
            title: TabScreenTitles.Home,
            tabBarIcon: ({ focused }) => (
              <TabIcon name="home" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name={TabScreenNames.Contact}
          component={ContactScreen}
          options={{
            title: TabScreenTitles.Contact,
            tabBarIcon: ({ focused }) => (
              <TabIcon name="call" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </DrawerScreensContainer>
  );
}
