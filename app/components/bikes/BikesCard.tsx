import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "./Button";
// import { BikeDelete } from "@/app/api/bikeApi";
import { useRouter } from "expo-router";
import { updateAllBikeFields } from "@/app/redux/bikeCreateSlice";
import { useDispatch } from "react-redux";
import { BikeDelete } from "@/api/bikeApi";
interface bikeCardProps {
  img: string;
  location: string;
  about: string;
  rate: number | null;
  type: string;
  removeKey: string;
  onDelete: any;
  bikeStatus: any;
}
const BikesCard = ({
  img,
  location,
  about,
  rate,
  type,
  removeKey,
  onDelete,
  bikeStatus,
}: bikeCardProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showView, setShowView] = useState(false);
  const deleteData = async (id) => {
    try {
      await BikeDelete(id);
      // call the callback to remove from list
      onDelete && onDelete(id);
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  const updateData = (id) => {
    router.push({
      pathname: "/addBike",
      params: { mode: "update", id: removeKey },
    });
    dispatch(
      updateAllBikeFields({
        location,
        BikeType: type,
        RatePerDay: rate,
        imageBase64: img,
        text: about,
        bikeStatus: "Available",
      }),
    );
  };

  return (
    <View className="flex flex-col gap-1 rounded-lg elevation-md  bg-[#111]  relative">
      <View className="flex-row gap-2 justify-items-center absolute top-1 left-2 z-10">
        {/* <Ionicons name={""} size={24} color={"#D5B60A"} /> */}
        <Text className=" text-lg text-black bg-[#d5b60a] rounded-3xl px-3 font-bold ">
          {bikeStatus}
        </Text>
      </View>
      <Image
        source={{ uri: `data:image/png;base64,${img}` }}
        style={{ width: "100%", height: 200 }}
      />
      <View className="flex-row justify-between  px-3 gap-7  py-1">
        {/* <View className="flex-row gap-2 justify-items-center">
          <Ionicons name={"location"} size={24} color={"#D5B60A"} />
          <Text className="text-white text-lg">{location}</Text>
        </View> */}

        <View className="flex-row gap-2 justify-center items-center">
          <Ionicons name={"speedometer-outline"} size={24} color={"#D5B60A"} />
          <Text className="text-white text-lg">{type}</Text>
        </View>
        <Pressable onPress={() => deleteData(removeKey)}>
          <Ionicons name={"trash-outline"} size={24} color={"#D5B60A"} />
        </Pressable>
      </View>
      <View className="flex flex-row justify-between px-3 py-1">
        <View className=" flex-col gap-0.2">
          <Text className="text-white text-lg">Hourly rate</Text>
          <Text className="text-white text-lg">
            {" "}
            Rs.{(rate / 24).toFixed(0)}
          </Text>
        </View>
        <View className=" flex-col gap-0.2">
          <Text className="text-white text-lg">Daily rate</Text>
          <Text className="text-white text-lg">Rs.{rate}</Text>
        </View>
        <View className=" flex-col gap-0.2">
          <Text className="text-white text-lg">Monthly rate</Text>
          <Text className="text-white text-lg">
            {" "}
            Rs.{(rate * 30).toFixed(0)}
          </Text>
        </View>
      </View>
      <View className=" flex-row gap-5 justify-center py-2 px-3 ">
        <Pressable onPress={() => updateData(removeKey)}>
          <Ionicons name={"create-outline"} size={24} color={"#D5B60A"} />
        </Pressable>
        {/* <Pressable onPress={() => deleteData(removeKey)}>
          <Ionicons name={"trash-outline"} size={24} color={"#D5B60A"} />
        </Pressable> */}
        {/* <CommonButton
          name="view Details"
          clickData={() => console.log("surya")}
        /> */}
        <Pressable
          className={` 
             bg-[#D5B60A]
            px-4 py-2 rounded-3xl flex justify-center items-center `}
          onPress={() => setShowView(!showView)}
        >
          <Text className="text-black text-center font-bold">
            {" "}
            {showView ? "Hide" : "View"} Details
          </Text>
        </Pressable>
      </View>
      {showView && (
        <View className="px-5 flex gap-2 pb-2">
          <Text className="text-white text-lg font-bold">About</Text>
          <Text className="text-white text-lg">{about}</Text>
        </View>
      )}
    </View>
  );
};

export default BikesCard;
