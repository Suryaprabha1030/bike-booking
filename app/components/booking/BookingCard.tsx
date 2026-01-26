import { View, Text, Alert, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { color } from "@/app/utils/color";
import CommonButton from "../bikes/Button";
import { bookingButton } from "@/app/utils/data";
// import { bookingUpdate, fetchUserBooking } from "@/app/api/bikeApi";
import { useRouter } from "expo-router";
import { bookingUpdate } from "@/api/bikeApi";

const BookingCard = ({ name, id, status, address, amount }) => {
  const [active, setActive] = useState<string | null>("");
  const router = useRouter();
  const bookingUpdateStatus = async (btn) => {
    try {
      setActive(btn.value);
      const payload = { booking: btn.value };
      await bookingUpdate(id, payload);
      Alert.alert("Success", "Booking status updated successful");
      // router.back();
    } catch (err) {
      Alert.alert("Error", "Booking failed");
    }
  };
  const editBookingDetails = async (user) => {
    router.push({
      pathname: "/createBooking",
      params: { mode: "updateBooking", id: user, bookingId: id }, // ✅ IMPORTANT
    });
    // console.log(data, "data");
  };
  return (
    <View className="flex w-full justify-center items-center bg-black py-4">
      {/* Glassy Card */}
      <View className=" rounded-xl px-3 py-1 w-[90%] bg-black/10 flex gap-3 mx-1 border border-white/10 elevation-md">
        <View className="flex flex-row justify-between items-center gap-0.3">
          <View className="flex flex-row justify-between items-center gap-5">
            <View className="w-14 h-14 rounded-full bg-gray-700 items-center justify-center">
              <Text className="text-white font-bold text-lg">
                {name.slice(0, 1)}
              </Text>
            </View>
            <View className="flex flex-col gap-0.3">
              <Text className="text-white text-md">{name}</Text>
              <Text className="text-white text-xs ">
                {" "}
                {name.slice(0, 2)}
                {id?.slice(1, 6)}
              </Text>
            </View>
          </View>

          <Text className="text-white text-sm">{status}</Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <Ionicons name={"bicycle-outline"} size={24} color={color.primary} />
          <Text className="text-white">{amount}</Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <Ionicons name={"calendar"} size={24} color={color.primary} />
          <Text className="text-white">
            2024-07-20 9:30 am - 2024-08-20 9:30 am
          </Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <Ionicons name={"location"} size={24} color={color.primary} />
          <Text className="text-white">{address}</Text>
        </View>
        <View className="flex flex-row gap-5 justify-between items-center py-2">
          <View className="flex flex-row gap-1  py-2">
            {bookingButton.map((btn: any) => (
              <CommonButton
                name={btn.name}
                clickData={() => bookingUpdateStatus(btn)}
                key={btn.value}
                isActive={active === btn.value}
              />
            ))}
          </View>

          <Pressable onPress={() => editBookingDetails(name)}>
            <Ionicons name={"create-outline"} size={24} color={"#D5B60A"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default BookingCard;
