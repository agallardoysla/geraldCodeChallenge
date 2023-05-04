import { NavigationProp } from "@react-navigation/native";

export enum TabScreenNames {
  Home = "Home",
  Contact = "Contact",
  Support = "Support",
}

export enum TabScreenTitles {
  Home = "Home",
  Contact = "Contact",
  Support = "Support",
}

export type RootStackParamList = {
  [TabScreenNames.Home]: undefined;
  [TabScreenNames.Contact]: undefined;
  [TabScreenNames.Support]: undefined;
};

export type NavigationType = NavigationProp<RootStackParamList>;
