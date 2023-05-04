import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IonIcons from "react-native-vector-icons/Ionicons";

type Props = {
  name: string;
  focused: boolean;
};
const TabIcon = ({ name, focused }: Props) => {
  return (
    <IonIcons
      name={name}
      size={24}
      color={"#fff"}
      style={{ opacity: focused ? 1 : 0.5 }}
    />
  );
};

export default TabIcon;

const styles = StyleSheet.create({});
