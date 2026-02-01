import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface DisplayCardProps {
  name: any;
  about: string;
  count: number;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ name, about, count }) => {
  return (
    <View className="elevation-40 flex flex-col items-center gap-5 justify-center rounded-xl w-[46%] p-2  bg-[#111] text-white">
      <View className=" flex flex-row justify-center items-center gap-5 w-full">
        <Ionicons name={name} size={24} color={"#D5B60A"} />
        <Text className="text-white">{about}</Text>
      </View>
      <Text className="text-white text-xl font-extrabold ">{count}</Text>
    </View>
  );
};

export default DisplayCard;
