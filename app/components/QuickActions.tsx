import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface QuickActionsProps {
  iconName: string | any;
  name: string;
  navigateTo: string;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  iconName,
  name,
  navigateTo,
}) => {
  const router = useRouter();

  const handlePress = () => {
    // if (navigateTo) {
    //   router.push(navigateTo)
    //    // navigate to the given screen
    // }

    if (navigateTo === "/createBooking") {
      router.push({
        pathname: navigateTo,
        params: { mode: "addBooking" }, // ✅ IMPORTANT
      });
    } else {
      router.push(navigateTo);
    }
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-[30%] h-[8rem] rounded-lg elevation-md  bg-[#111] flex flex-col justify-center gap-5 items-center"
    >
      <View className="w-full h-full rounded-lg elevation-md  bg-[#111] flex flex-col justify-center gap-5 items-center">
        <Ionicons name={iconName} size={30} color={"#D5B60A"} />
        <Text className="text-white text-md px-1">{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickActions;
