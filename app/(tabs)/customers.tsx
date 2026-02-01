import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFetchUserDetails } from "../../api/bikeApi"; // adjust path
import TopBarBikes from "../components/bikes/TopBarBikes";
import UserCard from "../components/user/UserCard";
import { fetchadminid } from "../utils/data";

const customers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const adminId = await fetchadminid();
      const userData = await getFetchUserDetails(adminId);
      setData(userData);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1   bg-black flex-col gap-5">
      <TopBarBikes name="Customer" />

      <FlatList
        data={data}
        keyExtractor={(item: any) => item._id}
        numColumns={1}
        scrollEnabled={true}
        className="py-5 "
        renderItem={({ item }) => <UserCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default customers;
