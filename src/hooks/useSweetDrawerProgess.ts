import { SharedValue } from "react-native-reanimated";
import { createStore, createHook } from "react-sweet-state";

const drawerProgress: SharedValue<number> = { value: 0 };

const Store = createStore({
  initialState: {
    drawerProgress,
  },
  actions: {
    setDrawerProgress:
      (drawerProgress: SharedValue<number>) =>
      ({ setState }) => {
        setState({
          drawerProgress,
        });
      },
  },
  name: "drawerProgress",
});

export const useSweetDrawerProgess = createHook(Store);
