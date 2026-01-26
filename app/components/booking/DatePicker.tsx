import { color } from "@/app/utils/color";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CalendarModal from "./CalenderModel";

// import Icon from "react-native-vector-icons/MaterialIcons";
const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },
  dateText: {
    color: "#EAEAEA",
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "600",
  },
});

const CustomDatePicker = ({ selectedDate, setSelectedDate, dataUpdate }) => {
  const [isVisible, setVisible] = useState(false);
  //   const [date, setDate] = useState(new Date());

  // 🔹 Close calendar
  const onClose = () => {
    setVisible(false);
  };

  // 🔹 Confirm date
  const onConfirm = (date) => {
    setSelectedDate(date);
    dataUpdate(date);
    setTimeout(() => {
      setVisible(false);
    }, 0);
    // setVisible(false);
    console.log("Selected Date:", date);
    // 👉 call analytics API here
  };
  return (
    <View
      className={`flex flex-row w-full  ${color.CardBgc} elevation-lg rounded-lg   justify-center items-start gap-0  text-white`}
    >
      <TouchableOpacity
        className={`flex flex-row w-full items-center border py-4 ${color.CardBgc} elevation-lg rounded-lg   justify-center items-start gap-0  text-white`}
        onPress={() => setVisible(true)}
      >
        <Ionicons
          name="calendar-number-outline"
          size={20}
          color={color.primary}
        />
        <Text style={styles.dateText}>{selectedDate}</Text>
      </TouchableOpacity>

      <CalendarModal
        visible={isVisible}
        onClose={onClose}
        onConfirm={onConfirm}
        selectedDate={selectedDate}
      />
    </View>
  );
};

export default CustomDatePicker;
