import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Image } from "expo-image";

import logo from "../../assets/images/logo.png";

const TopBar = () => {
  const [active, setActive] = useState<"notify" | "search" | null>(null);
  return (
    <View className="flex justify-between items-center px-5 flex-row bg-[#111] py-4 elevation-40">
      <Image source={logo} style={{ width: 40, height: 40 }} />
      <Text className="text-white">Bike Rent Admin</Text>
      <View className="flex-row gap-4">
        <Pressable onPress={() => setActive("notify")}>
          <Ionicons
            name={
              active === "notify" ? "notifications" : "notifications-outline"
            }
            size={24}
            color={active === "notify" ? "#D5B60A" : "#fff"}
          />
        </Pressable>

        <Pressable onPress={() => setActive("search")}>
          <Ionicons
            name={active === "search" ? "search" : "search-outline"}
            size={24}
            color={active === "search" ? "#D5B60A" : "#fff"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TopBar;
