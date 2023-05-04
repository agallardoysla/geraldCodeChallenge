import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DrawerHeader from "../../navigator/components/DrawerHeader";
import { colors } from "../../themes/layouts/colors";
import { TabScreenNames } from "../../navigator/constants/ScreenNames";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const HomeScreen = () => {
  const { navigate } = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <DrawerHeader title={"Home"} />
      <Text style={{ textAlign: "center" }}>
        Este diseño es solo para fines de demostración.
      </Text>
      <TouchableOpacity
        onPress={() => navigate(TabScreenNames.Support)}
        style={{
          width: 200,
          height: 50,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: colors.white,
          }}
        >
          Go to SupportScreen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
