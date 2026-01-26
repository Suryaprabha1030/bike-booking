import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { updateAllUserFields } from "@/app/redux/UserSlice";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";

const UserCard = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const updateData = (id) => {
    router.push({
      pathname: "/AddUserDetail",
      params: { mode: "update", id: id },
    });
    dispatch(
      updateAllUserFields({
        name: data.name,
        user: data.phone,
        address: data.address,
        proofType: data.proofType,
        proofNumber: data.proofNumber,
      }),
    );
  };
  return (
    <View className="flex w-full justify-center items-center bg-black py-4">
      <View className=" rounded-xl px-3 py-1 w-[90%] bg-black/10 flex gap-3 mx-1 border border-white/10 elevation-md ">
        <View className="flex flex-row gap-10 justify-between items-center">
          <View className="flex flex-row gap-10 ">
            <View className="w-14 h-14 rounded-full bg-gray-700 items-center justify-center">
              <Text className="text-white font-bold text-lg">
                {data.name.slice(0, 1)}
              </Text>
            </View>
            <View className="flex flex-col gap-0">
              <Text className="text-white font-bold text-lg">{data.name}</Text>
              <Text className="text-white font-bold text-xs">
                {" "}
                {data.name.slice(0, 2)}
                {data._id.slice(1, 6)}
              </Text>
            </View>
          </View>

          <Pressable onPress={() => updateData(data._id)}>
            <Ionicons name={"create-outline"} size={24} color={"#D5B60A"} />
          </Pressable>
        </View>
        <View className="flex flex-row justify-between px-5">
          <View className="flex flex-col gap-1">
            <Text className="text-gray-300  text-md">Address</Text>
            <Text className="text-white  text-md">Madurai</Text>
          </View>
          <View className="flex flex-col gap-1">
            <Text className="text-gray-300 text-md">Phn no</Text>
            <Text className="text-white  text-md">{data.phone}</Text>
          </View>
          <View className="flex flex-col gap-1">
            <Text className="text-white text-md">type of Proof</Text>
            <Text className="text-white  text-md">{data.proofType}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
