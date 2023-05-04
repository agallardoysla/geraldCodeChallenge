import * as React from "react";
import { TouchableOpacity } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Text } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, TabScreenNames } from "./constants/ScreenNames";
import { useSweetCurrentScreen } from "../hooks/useSweetCurrentScreen";
import { colors } from "../themes/layouts/colors";

export type NavigationType = NavigationProp<RootStackParamList>;

export function CustomDrawerContent({
  drawerProps,
}: {
  drawerProps: DrawerContentComponentProps;
}) {
  const navigation = useNavigation<NavigationType>();

  return (
    <DrawerContentScrollView {...drawerProps} scrollEnabled={false}>
      <Text
        style={{
          color: "white",
          marginLeft: "25%",
          fontWeight: "bold",
          fontSize: 30,
          marginBottom: 30,
        }}
      >
        Beka
      </Text>
      <Item
        title={"Home"}
        onPress={() => navigation.navigate(TabScreenNames.Home)}
      />
      <Item
        title={"Contact"}
        onPress={() => navigation.navigate(TabScreenNames.Contact)}
      />
      <Item
        title={"Support"}
        onPress={() => navigation.navigate(TabScreenNames.Support)}
      />
    </DrawerContentScrollView>
  );
}

const Item = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const [{ currentScreen }, {}] = useSweetCurrentScreen();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: currentScreen === title ? "#3b2d33" : "transparent",
        justifyContent: "center",
        width: "70%",
        height: 50,
        marginTop: 20,
        marginLeft: "10%",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: currentScreen === title ? "#c55b5a" : colors.white,
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
