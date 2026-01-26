import { View, Text, TextInput, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import UploadImage from "../components/bikes/createBike/UploadImage";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/bikes/createBike/FormComponent";
import Buttton from "../components/bikes/createBike/Buttton";

import { Ionicons } from "@expo/vector-icons";
import {
  BikeAdd,
  fetchUserBooking,
  // fetchUserDetails,
  getFetchUserDetails,
} from "../../api/bikeApi"; // adjust path
import { color } from "../utils/color";
import TopBarBikes from "../components/bikes/TopBarBikes";
import UserCard from "../components/user/UserCard";

const customers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getFetchUserDetails();
      setData(userData);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1 px-10  bg-black flex-col gap-5">
      <TopBarBikes name="Customer" />
      {/* <View className="flex items-center w-[100%]"> */}
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        numColumns={1}
        scrollEnabled={true}
        className="py-5 "
        renderItem={({ item }) => <UserCard data={item} />}
      />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default customers;
