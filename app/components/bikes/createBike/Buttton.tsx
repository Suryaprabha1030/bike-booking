import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "@/app/utils/color";

interface buttonProps {
  submitBike: () => void;
  mode: string;
  name: string;
}

const Buttton = ({ submitBike, mode, name }: buttonProps) => {
  return (
    <View>
      <TouchableOpacity
        className={`w-full h-[3rem] text-lg text-center text-black ${color.textbg} flex justify-center items-center rounded-lg`}
        onPress={submitBike}
      >
        <Text className="text-black text-center text-xl">
          {" "}
          {mode === "update" || mode === "updateBooking"
            ? `Update ${name}`
            : `Add ${name}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttton;
