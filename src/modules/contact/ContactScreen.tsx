import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import DrawerHeader from "../../navigator/components/DrawerHeader";
import { colors } from "../../themes/layouts/colors";

const ContactScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: colors.white }}
    >
      <DrawerHeader title={"Contact"} />
      <Text style={{ textAlign: "center" }}>IM ANDRES GALLARDO</Text>
    </SafeAreaView>
  );
};

export default ContactScreen;
