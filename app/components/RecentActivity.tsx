import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RecentActivity = () => {
  return (
    <View className="px-5 w-full text-white rounded-lg flex flex-col  p-4 gap-5 elevation-md bg-[#111] my-5">
      <View className="flex flex-row justify-between px-5 gap-2 items-center">
        <Ionicons name={"calendar-outline"} size={24} color="#fff" />
        <Text className=" text-white text-[1rem] text-wrap w-2/3">
          Lorem ipsum dolor sit amet consecteturrem ipsum dolor sit amet
          consectetur
        </Text>
        <Text className=" text-white text-[0.8rem]">Confirmed</Text>
      </View>
      <Text className=" text-white text-[0.75rem] w-2/3 text-start">
        5 miuntes ago
      </Text>
    </View>
  );
};

export default RecentActivity;
