import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { useSweetDrawerProgess } from "../../hooks/useSweetDrawerProgess";

const DrawerScreensContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const progress = useDrawerProgress();
  const [{}, { setDrawerProgress }] = useSweetDrawerProgess();

  const animatedContainerStyles = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, 80]);
    const translateY = interpolate(progress.value, [0, 1], [0, 20]);
    const rotateZ = `${-progress.value * 10}deg`;

    return {
      transform: [{ rotateZ }, { translateX }, { translateY }],
    };
  });

  const animatedSubContainerStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(progress.value, [0, 1], [0, 30]);
    const paddingTop = interpolate(progress.value, [0, 1], [0, 30]);

    return {
      borderRadius,
      paddingTop,
    };
  });

  useEffect(() => {
    setDrawerProgress(progress);
  }, [progress]);

  return (
    <Animated.View
      style={[
        {
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        animatedContainerStyles,
      ]}
    >
      <Animated.View
        style={[
          {
            backgroundColor: "#fcfcff",
            height: "100%",
            width: "100%",
          },
          animatedSubContainerStyle,
        ]}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default DrawerScreensContainer;
