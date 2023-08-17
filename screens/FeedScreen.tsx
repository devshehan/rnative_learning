import { FlatList, Image, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";

//svg icons
import Logo from "../assets/ufora_logo.svg";
import Profile from "../assets/profile.svg";

import { Icon } from "@rneui/themed";

// type script navigation protection
export type FeedScreeenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Home">,
  NativeStackNavigationProp<RootStackParamList>
>;

const FeedScreen = () => {
  // hide the header
  const navigation = useNavigation<FeedScreeenNavigationProp>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      {/* UFora header */}
      <View className="h-12  mx-4 flex-row items-center">
        <View className="h-9 flex-1 ">
          <View className="w-24 h-9bg-green-300 items-center">
            <Logo width={85} height={30} style={{ color: "#ccc" }} />
          </View>
        </View>
        <View className="flex-row space-x-4">
          <Icon name="search1" type="antdesign" color="#4F4E4E" />
          <Icon name="chat-bubble-outline" type="entype" color="#4F4E4E" />
        </View>
      </View>

      {/* search and profile */}
      <View className="flex-row mx-4 space-x-2">
        <View className=" w-12 h-12 content-center items-center bg-cyan-300">
          <Profile width={44} height={44} style={{ color: "#ccc" }} />
        </View>
        <View className="flex-1 p-3 rounded-xl border-black border-0.5">
          <TextInput
            placeholder="Hey Isuru, What's special Today?"
            keyboardType="default"
          />
        </View>
      </View>

      <View className="h-40 bg-cyan-200"></View>

      <View className="h-22 bg-cyan-400 mx-4">
        <FlatList>
          <View className="p-1 items-center">
            <Image source={require("../assets/profile.png")} className="" />
            <Text className="">Sineth</Text>
          </View>
        </FlatList>
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;
