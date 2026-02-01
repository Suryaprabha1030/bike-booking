import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "@/app/utils/color";

interface buttonProps {
  submitBike: () => void;
  mode: any;
  name: string;
}

const Buttton = ({ submitBike, mode, name }: buttonProps) => {
  return (
    <View>
      <TouchableOpacity
        className={`w-full h-[3rem] text-md font-[500] text-center text-black ${color.textbg} flex justify-center items-center rounded-lg`}
        onPress={submitBike}
      >
        <Text className="text-black text-center  text-lg font-[500]">
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
