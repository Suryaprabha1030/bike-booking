import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color } from "@/app/utils/color";

const TopBarBikes = ({ name }) => {
  const router = useRouter();
  return (
    <View
      className={`flex flex-row elevation-md justify-between ${color.textbg} px-5 items-center py-4`}
    >
      {" "}
      <Pressable onPress={() => router.back()}>
        <Ionicons name={"arrow-back-outline"} size={24} color={"#000"} />
      </Pressable>
      <Text className="text-xl font-bold text-black">{name} Management</Text>
      <Pressable
        onPress={() =>
          router.push(name === "bike" ? "/addBike" : "/createBooking")
        }
      >
        <Ionicons name={"add-outline"} size={30} color={"#000"} />
      </Pressable>
    </View>
  );
};

export default TopBarBikes;
