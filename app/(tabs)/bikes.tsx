import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import TopBarBikes from "../components/bikes/TopBarBikes";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "../components/bikes/Button";
import { bikeMangeButton, fetchadminid } from "../utils/data";
import BikesCard from "../components/bikes/BikesCard";
import { getBikes } from "../../api/bikeApi";

const bikes = () => {
  const [activeValue, setActiveValue] = useState<string | null>("");
  const [bikesData, setBikesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const adminId = await fetchadminid();

      const data: any = await getBikes(adminId);
      setBikesData(data?.data);
      // console.log(data, "bikesData");
    };

    fetchData();
  }, []);
  // "bikeStatus": "available",
  return (
    <SafeAreaView className="bg-black gap-5 flex-1">
      <TopBarBikes name={"Bike"} />
      <View className="flex flex-row flex-wrap gap-2 px-2 py-2">
        {bikeMangeButton.map((btn) => (
          <CommonButton
            name={btn.name}
            key={btn.value}
            isActive={activeValue === btn.value}
            clickData={() => setActiveValue(btn.value)}
          />
        ))}
      </View>
      <FlatList
        data={bikesData.filter((bike: any) =>
          activeValue ? bike.bikeStatus === activeValue : true,
        )}
        numColumns={1}
        keyExtractor={(item: any) => item._id}
        scrollEnabled={true}
        contentContainerStyle={{ padding: 10 }}
        className="px-5  "
        renderItem={({ item }) => (
          <BikesCard
            img={item.image}
            rate={item.RatePerDay}
            about={item.about}
            type={item.BikeType}
            location={item.location}
            removeKey={item._id}
            onDelete={(id) => {
              // remove bike from state
              setBikesData((prev) => prev.filter((bike) => bike._id !== id));
            }}
            bikeStatus={item.bikeStatus}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
      />
    </SafeAreaView>
  );
};

export default bikes;
