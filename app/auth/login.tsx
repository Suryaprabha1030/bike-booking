import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../utils/color";
import FormComponent from "../components/bikes/createBike/FormComponent";
import { createAdmin } from "@/api/bikeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
// import API from "../api/api";

export default function AdminSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const update = (key, value) => setForm({ ...form, [key]: value });

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    try {
      const data = await createAdmin(form);

      // Save adminId to AsyncStorage
      await AsyncStorage.setItem("adminId", data.admin.id);

      Alert.alert("Success", "Account created!");
      router.replace("/auth/signup"); // redirect to main tabs
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      Alert.alert(
        "Error",
        err.response?.data?.message || "Failed to create account",
      );
    }
  };

  return (
    <SafeAreaView className="bg-black gap-5 flex-1 items-center ">
      <Text className={`text-3xl ${color.textColor2} font-[700] `}>SignuP</Text>
      <Text className={`text-2xl ${color.textColor2} `}>
        Create your admin account
      </Text>
      <Text className={`text-2xl ${color.textColor2} `}>
        Securely register for adminstrative service
      </Text>
      <View className="w-3/4 ">
        <View className="w-full">
          <FormComponent
            name="Email"
            value={form.email}
            onChangeText={(v) => update("email", v)}
            placeHolder="Add Location"
          />
        </View>
        <View className="w-full">
          <FormComponent
            name="Name"
            value={form.name}
            onChangeText={(v) => update("name", v)}
            placeHolder="Add Location"
          />
        </View>
        <View className="w-full">
          <FormComponent
            name="Password"
            value={form.password}
            onChangeText={(v) => update("password", v)}
            placeHolder="Add Location"
          />
        </View>
        {/* <View className="w-full">
          <View className="w-4 h-4 rounded-md"></View>
          <Text>I accept Accept term and condition</Text>
        </View> */}
        <View>
          <TouchableOpacity
            className={`w-full h-[3rem] text-lg text-center text-black ${color.textbg} flex justify-center items-center rounded-lg`}
            onPress={handleSignup}
          >
            <Text className="text-black text-center text-xl">
              {" "}
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <Pressable
          onPress={() => {
            router.push("/auth/signup");
          }}
        >
          <Text className={`text-2xl ${color.textColor2} `}>
            already have an account ? do login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
