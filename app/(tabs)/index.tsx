import { SafeAreaView } from "react-native-safe-area-context";

import DisplayCard from "../components/DisplayCard";
import {
  fetchadminid,
  getDashboardData,
  QuickActionsdata,
} from "../utils/data";
import { FlatList, View, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import QuickActions from "../components/QuickActions";
import { Text } from "@react-navigation/elements";
import RecentActivity from "../components/RecentActivity";
import { useEffect, useState } from "react";
import { getBikes, getBooking } from "@/api/bikeApi";
// import { getBikes, getBooking } from "../api/bikeApi";

export default function Index() {
  const [counts, setCounts] = useState({
    totalBikes: 0,
    activeBooking: 0,
    revenue: 0,
    maintenance: 0,
  });
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const adminId = await fetchadminid();
        const datas = await getBooking(adminId);
        setCounts((prev) => ({
          ...prev,
          activeBooking: datas?.data?.length || 0,
        }));
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      }
    };

    fetchBookings();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const adminId = await fetchadminid();
      const data: any = await getBikes(adminId);
      setCounts((prev) => ({
        ...prev,
        totalBikes: data?.data?.length || 0,
      }));

      console.log(
        data.data.map((d) => d.bikeStatus === "maintanance"),
        "surya",
      );
      setCounts((prev) => ({
        ...prev,
        maintenance:
          data.data.filter((d) => d.bikeStatus === "maintanance").length || 0,
      }));

      // console.log(data, "bikesData");
    };

    fetchData();
  }, []);
  const data = getDashboardData(counts);
  return (
    <SafeAreaView className="bg-black text-white w-full   flex gap-5 h-auto py-2 ">
      <TopBar />
      {/* <ScrollView
        showsVerticalScrollIndicator={true} // scrollbar visible
        contentContainerStyle={{ paddingBottom: 20 }}
        className="  flex gap-5  "
      > */}
      <Text
        // className="text-2xl"
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "600",
          marginBottom: 8,
          paddingHorizontal: 16,
        }}
      >
        OverView
      </Text>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.about}
        scrollEnabled={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 25,
        }}
        // contentContainerStyle={{ padding: 20 }}
        className="px-5"
        renderItem={({ item }) => (
          <DisplayCard
            name={item.iconName}
            about={item.about}
            count={item.count}
          />
        )}
      />
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "600",
          marginBottom: 8,
          paddingHorizontal: 16,
        }}
      >
        Quick actions
      </Text>

      <FlatList
        data={QuickActionsdata}
        numColumns={3}
        keyExtractor={(item) => item.about}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        className="px-5"
        renderItem={({ item }) => (
          <QuickActions
            name={item.about}
            iconName={item.iconName}
            navigateTo={item.path}
          />
        )}
      />
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "600",
          marginTop: 8,
          paddingHorizontal: 16,
        }}
      >
        Recent Activity
      </Text>
      <RecentActivity />
      <RecentActivity />
      <RecentActivity />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
