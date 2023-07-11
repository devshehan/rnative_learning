import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import FeedScreen from "../screens/FeedScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { useNavigation } from "@react-navigation/native";

// parameter checks
export type TabStackParamList = {
  Home : undefined;
  Notification : undefined;
}


const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {

  //hide the tab header (Home and Notification)

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
