import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBarBikes from "../components/bikes/TopBarBikes";
import CommonButton from "../components/bikes/Button";
import { bookingMangeButton, fetchadminid } from "../utils/data";
import BookingCard from "../components/booking/BookingCard";
import { getBooking } from "../../api/bikeApi";

const bookings = () => {
  const [activeBooking, setActiveBooking] = useState<string | null>("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const adminId = await fetchadminid();
        const datas = await getBooking(adminId);
        setData(datas.data);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <SafeAreaView className="bg-black h-full">
      <TopBarBikes name="Booking" />
      <View className="flex flex-row flex-wrap gap-2 px-5 py-2">
        {bookingMangeButton.map((bookingButton: any) => (
          <CommonButton
            name={bookingButton.name}
            key={bookingButton.value}
            clickData={() => setActiveBooking(bookingButton.value)}
            isActive={activeBooking === bookingButton.value}
          />
        ))}
      </View>
      <Text
        className="font-[700] px-5 text-xl text-white pt-5"
        style={{ fontWeight: "bold" }}
      >
        Past Booking
      </Text>
      <FlatList
        // data={data.filter((d) => d.booking === activeBooking)}
        data={data.filter((d: any) =>
          activeBooking ? d.booking === activeBooking : true,
        )}
        numColumns={1}
        keyExtractor={(item: any) => item._id}
        scrollEnabled={true}
        // contentContainerStyle={{ padding: 5 }}
        className="px-1 "
        renderItem={({ item }) => (
          <BookingCard
            name={item.user}
            id={item._id}
            status={item.booking}
            address={item.drop}
            amount={item.amount}
            item={item}
            // data={item}
          />
        )}
        // ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
      />
    </SafeAreaView>
  );
};

export default bookings;
