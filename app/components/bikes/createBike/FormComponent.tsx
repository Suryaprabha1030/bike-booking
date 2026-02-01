import { View, Text, TextInput } from "react-native";
import React from "react";
import { color } from "@/app/utils/color";

interface FormComponentProps {
  name: string;
  value: string;
  onChangeText: (text: string) => void;
  placeHolder: string;
}

const FormComponent: React.FC<FormComponentProps> = ({
  name,
  value,
  onChangeText,
  placeHolder,
}) => {
  return (
    <View className="flex flex-col w-full  justify-center items-start gap-0  text-white">
      <Text className="text-md text-white mb-2 font-[500]">{name}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className={`w-full h-[3.5rem] text-md px-4 border text-gray-50 ${color.CardBgc} elevation-lg rounded-lg `}
        placeholder={placeHolder}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default FormComponent;
