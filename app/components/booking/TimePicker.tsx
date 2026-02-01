import React from "react";
import { Text, TouchableOpacity } from "react-native";
import TimePickerModal from "./TimePickerModel";
import { color } from "@/app/utils/color";

const TimePicker = ({
  setTimeVisible,
  selectedTime,
  timeVisible,
  setSelectedTime,
}: {
  setTimeVisible: any;
  selectedTime: any;
  timeVisible: any;
  setSelectedTime: any;
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => setTimeVisible(true)}
        style={{
          padding: 14,

          borderRadius: 10,
        }}
        className={`border ${color.CardBgc}`}
      >
        <Text className="text-md " style={{ color: "#fff" }}>
          {selectedTime || "Select Time"}
        </Text>
      </TouchableOpacity>

      <TimePickerModal
        visible={timeVisible}
        onClose={() => setTimeVisible(false)}
        onConfirm={(time) => {
          setSelectedTime(time);
          setTimeVisible(false);
        }}
      />
    </>
  );
};

export default TimePicker;
