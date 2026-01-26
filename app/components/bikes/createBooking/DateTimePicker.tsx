import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";

export default function FromDateOnly() {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  const format = (d?: Date | null) =>
    d ? d.toLocaleString() : "Select date & time";

  return (
    <View className="px-4 mt-4">
      {/* SMALL INPUT */}
      <TouchableOpacity
        onPress={() => setOpen(true)}
        className="bg-[#111] rounded-xl px-3 py-2 flex-row items-center justify-between"
      >
        <Text className="text-white text-sm">
          {fromDate ? format(fromDate) : "From"}
        </Text>
      </TouchableOpacity>

      {/* COMPACT BOTTOM PICKER */}
      <Modal
        isVisible={open}
        onBackdropPress={() => setOpen(false)}
        style={{ justifyContent: "flex-end", margin: 0, width: 200 }}
      >
        <View className="bg-black rounded-t-2xl px-4 py-3">
          <DateTimePicker
            value={fromDate || new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            style={{ height: 50, width: 50 }} // 👈 smallest usable
            onChange={(e, date) => {
              if (date) setFromDate(date);
            }}
          />

          <TouchableOpacity
            onPress={() => setOpen(false)}
            className="bg-white rounded-lg py-2 mt-2"
          >
            <Text className="text-black text-center text-sm font-medium">
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
