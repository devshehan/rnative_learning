import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import FeedScreen from "../screens/FeedScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { useNavigation } from "@react-navigation/native";

//icons
import { Icon } from "@rneui/themed";

// parameter checks
export type TabStackParamList = {
  Home: undefined;
  Notification: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  //hide the tab header (Home and Notification)
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2656FF",
        tabBarInactiveTintColor: "#B8B8B8",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Icon
                name="home"
                type="antdesign"
                color={focused ? "#2656FF" : "#B8B8B8"}
              />
            );
          } else if (route.name === "Notification") {
            return (
              <Icon
                name="bell"
                type="feather"
                color={focused ? "#2656FF" : "#B8B8B8"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
