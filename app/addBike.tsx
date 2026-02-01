import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import UploadImage from "./components/bikes/createBike/UploadImage";
import FormComponent from "./components/bikes/createBike/FormComponent";
import Buttton from "./components/bikes/createBike/Buttton";
import { BikeAdd, BikeUpdate } from "../api/bikeApi";
import { color } from "./utils/color";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { updateBikeField } from "./redux/bikeCreateSlice";
import { RootState } from "./redux/store";
import { useRoute } from "@react-navigation/native";
import OptionDropdown from "./components/bikes/createBooking/DropDown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchadminid } from "./utils/data";

const addBike = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const route = useRoute<any>();
  const mode = route.params?.mode;
  const id = route.params?.id; // "add" | "upd
  const form: any = useSelector((state: RootState) => state.bike);

  useEffect(() => {
    const fetchAdmin = async () => {
      const adminId = await fetchadminid(); // ✅ await it

      if (adminId) {
        dispatch(
          updateBikeField({
            key: "adminId",
            value: adminId,
          }),
        );
      }
    };

    fetchAdmin();
  }, []);

  // const [text, setText] = useState("");
  const submitBike = async () => {
    try {
      const bikePayload = {
        adminId: form.adminId,
        location: form.location,
        BikeType: form.BikeType,
        RatePerDay: form.RatePerDay,
        image: form.imageBase64,
        about: form.text,
        bikeStatus: form.bikeStatus, // <-- used for filtering buttons
      };

      if (mode === "update") {
        await BikeUpdate(id, bikePayload);
      } else {
        await BikeAdd(bikePayload);
      }

      Alert.alert(
        "Success",
        mode === "update" ? "Updated successfully" : "Bike added successfully",
        [
          {
            text: "OK",
            onPress: () => {
              if (mode === "update") {
                router.push({
                  pathname: "/",
                });
              } else {
                router.push({
                  pathname: "/(tabs)",
                });
              }

              // else → do nothing (stay on same page)
            },
          },
        ],
      );
    } catch (error: any) {
      Alert.alert(
        "Error",
        `${mode === "update" ? "Failed to update bike" : "Failed to add bike"}`,
      );
    }
  };
  const update = (key: any, value: string) => {
    // setForm((prev) => ({ ...prev, [key]: value }));
    dispatch(updateBikeField({ key, value }));
  };

  return (
    <SafeAreaView className="flex-1  bg-black flex-col gap-10">
      <View
        className={` gap-[5rem] flex flex-row py-2 ${color.textbg} items-center px-5 h-[3.5rem]`}
      >
        <TouchableOpacity onPress={() => router.back()} className="px-2">
          <Ionicons
            name={"chevron-back"}
            color={"#000"}
            size={32}
            className="px-2"
          />
        </TouchableOpacity>
        <Text className="text-black text-2xl gap-2">
          {" "}
          {mode === "update" ? "Update Bike" : "Add Bike"}{" "}
        </Text>
      </View>
      <View className="px-10 flex-1  bg-black flex-col gap-7">
        <UploadImage imageBase64={form.imageBase64} />
        <FormComponent
          name="Location"
          value={form.location}
          onChangeText={(v) => update("location", v)}
          placeHolder="Add Location"
        />
        <FormComponent
          name="Bike Type"
          value={form.BikeType}
          onChangeText={(v) => update("BikeType", v)}
          placeHolder="Bike Type"
        />
        <View className=" flex flex-row gap-10">
          <View className="w-[40%]">
            <FormComponent
              name="Rate Per Day"
              value={form.RatePerDay}
              onChangeText={(v) => update("RatePerDay", v)}
              placeHolder="Rate Per Day"
            />
          </View>
          <View className="w-1/2 flex ">
            <Text className="text-white text-md">Bike Status</Text>
            <OptionDropdown
              Data={["available", "maintanance", "booked"]}
              selected={form.bikeStatus}
              onSelect={(v) => update("bikeStatus", v)}
            />
          </View>
        </View>

        <TextInput
          placeholder="Write your message..."
          multiline
          numberOfLines={4}
          className={`h-40 w-full text-start text-md px-4  flex justify-start border text-white ${color.CardBgc} elevation-lg rounded-lg`}
          style={{ textAlignVertical: "top" }}
          value={form.text}
          onChangeText={(v) => update("text", v)}
          placeholderTextColor="#fff"
        />

        <Buttton submitBike={submitBike} mode={mode} name={"Bike"} />
      </View>
      {/* <Buttton /> */}
    </SafeAreaView>
  );
};

export default addBike;
