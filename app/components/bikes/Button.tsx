import { View, Text, Button, Pressable } from "react-native";
import React from "react";

interface CommonButtonProps {
  name: string;
  clickData: () => void;
  isActive?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  name,
  clickData,
  isActive,
}) => {
  return (
    <Pressable
      className={` ${
        isActive ? "bg-[#D5B60A]" : "bg-[#111]"
      }  px-3 py-2 rounded-3xl flex justify-center items-center`}
      onPress={clickData}
    >
      <Text className="text-white text-center font-bold">{name}</Text>
    </Pressable>
  );
};

export default CommonButton;
