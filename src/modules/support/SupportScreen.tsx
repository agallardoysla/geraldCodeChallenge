import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../themes/layouts/colors";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import Feather from "react-native-vector-icons/Feather";
import useSetCurrentState from "../../navigator/hooks/useSetCurrentState";

const SupportScreen = () => {
  const { goBack } = useNavigation<DrawerNavigationProp<ParamListBase>>();
  useSetCurrentState();

  return (
    <View
      style={{ flex: 1, alignItems: "center", backgroundColor: colors.white }}
    >
      <View
        style={{
          width: "100%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={{ marginLeft: 30 }} onPress={goBack}>
          <Feather name="chevron-left" size={30} color={"#e3e3e5"} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: "#9b9b88", marginLeft: 20 }}>
          Support
        </Text>
      </View>
      <Text style={{ textAlign: "center" }}>
        Este diseño es solo para fines de demostración.
      </Text>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({});
