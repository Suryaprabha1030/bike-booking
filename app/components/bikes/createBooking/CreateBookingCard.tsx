import { View } from "react-native";
import React from "react";
import OptionDropdown from "./DropDown";
import { Text } from "@react-navigation/elements";

const CreateBookingCard = () => {
  
  return (
    <View className="flex-1 flex justify-start items-center bg-black w-full">
      <Text className="text-white">Bike</Text>
      <OptionDropdown />
    </View>
  );
};

export default CreateBookingCard;
