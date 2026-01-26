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
      <Text className="text-lg text-white mb-2">{name}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className={`w-full h-[3.5rem] text-md px-4 border  ${color.CardBgc} elevation-lg rounded-lg  text-white`}
        placeholder={placeHolder}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default FormComponent;
