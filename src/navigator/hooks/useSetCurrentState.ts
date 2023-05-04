import { useFocusEffect, useRoute } from "@react-navigation/native";
import React from "react";
import { useSweetCurrentScreen } from "../../hooks/useSweetCurrentScreen";

const useSetCurrentState = () => {
  const route = useRoute();
  const [{}, { setCurrentScreen }] = useSweetCurrentScreen();

  useFocusEffect(
    React.useCallback(() => {
      setCurrentScreen(route.name);
      return () => {
        setCurrentScreen("");
      };
    }, [])
  );
};

export default useSetCurrentState;
