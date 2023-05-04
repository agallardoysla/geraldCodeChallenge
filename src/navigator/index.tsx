import * as React from "react";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

import { CustomDrawerContent } from "./CustomDrawerContent";
import { StyleSheet } from "react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSweetDrawerProgess } from "../hooks/useSweetDrawerProgess";
import BottomTabs from "./BottomTab";
import { colors } from "../themes/layouts/colors";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const [{ drawerProgress }] = useSweetDrawerProgess();

  const animatedSubContainerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 40]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30]);
    const paddingTop = interpolate(drawerProgress.value, [0, 1], [0, 50]);

    return {
      transform: [{ translateY }],
      borderRadius,
      paddingTop,
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: "100%",
          width: "100%",
          backgroundColor: colors.primary,
        },
        animatedSubContainerStyle,
      ]}
    >
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent drawerProps={props} />}
          screenOptions={{
            drawerStatusBarAnimation: "slide",
            drawerType: "back",
            headerShown: false,
            overlayColor: "transparent",
            sceneContainerStyle: styles.scene,
            drawerStyle: styles.drawerStyles,
            drawerContentContainerStyle: styles.container,
          }}
          initialRouteName="Home"
          backBehavior="none"
        >
          <Drawer.Screen
            options={{
              ...commonDrawerItemOptions,
            }}
            name="BottomTabs"
            component={BottomTabs}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Animated.View>
  );
}

type DrawerItemProps =
  | DrawerNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => DrawerNavigationOptions)
  | undefined;

const commonDrawerItemOptions: DrawerItemProps = {
  drawerActiveBackgroundColor: "#2D4368",
  drawerActiveTintColor: "white",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    backgroundColor: "transparent",
  },
  stack: {
    flex: 1,
    overflow: "hidden",
  },
  drawerStyles: { flex: 1, width: "50%", backgroundColor: "transparent" },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: "500",
    fontSize: 20,
  },
});
