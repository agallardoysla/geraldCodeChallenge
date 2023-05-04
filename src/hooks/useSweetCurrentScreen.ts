import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  initialState: {
    currentScreen: "",
  },
  actions: {
    setCurrentScreen:
      (currentScreen: string) =>
      ({ setState, getState }) => {
        setState({
          currentScreen,
        });
      },
  },
  name: "currentScreen",
});

export const useSweetCurrentScreen = createHook(Store);
