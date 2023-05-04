import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import useSetCurrentState from "../hooks/useSetCurrentState";

const DrawerHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  useSetCurrentState();

  return (
    <View
      style={{
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ marginLeft: 30 }}
        onPress={navigation.openDrawer}
      >
        <Feather name="menu" size={30} color={"#e3e3e5"} />
      </TouchableOpacity>

      <Text style={{ fontSize: 20, color: "#9b9b88", marginLeft: 20 }}>
        {title}
      </Text>
    </View>
  );
};

export default DrawerHeader;
