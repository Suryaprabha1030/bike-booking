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
import { Image } from "expo-image";
// import API from "../api/api";
import logo from "../../assets/images/admin.svg";

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
    <SafeAreaView className="bg-black gap-5 flex-1 items-center justify-center">
      <View className="flex flex-col gap-2 items-center W-3/4">
        <Image source={logo} style={{ width: 40, height: 40 }} />
        <View className="flex flex-col gap-0.2 items-center">
          <Text className={`text-3xl ${color.textColor2} font-[600] `}>
            Create Your Admin Account
          </Text>
          <Text className={`text-md ${color.textColor2} `}>
            Securely register for adminstrative service
          </Text>
        </View>
      </View>
      <View className="w-3/4 py-5 gap-5">
        <View className="w-full">
          <FormComponent
            name="Email"
            value={form.email}
            onChangeText={(v) => update("email", v)}
            placeHolder="Enter your email address"
          />
        </View>
        <View className="w-full">
          <FormComponent
            name="Name"
            value={form.name}
            onChangeText={(v) => update("name", v)}
            placeHolder="Enter your name"
          />
        </View>
        <View className="w-full">
          <FormComponent
            name="Create your password"
            value={form.password}
            onChangeText={(v) => update("password", v)}
            placeHolder="Create your password"
          />
        </View>
        <View className="w-full">
          <FormComponent
            name="Confirm your password"
            value={form.password}
            onChangeText={(v) => update("password", v)}
            placeHolder="Confirm your password"
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
            <Text className="text-black text-center text-lg font-[500]">
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
          <Text
            className={`text-md w-full text-center ${color.textColor2} pt-3 `}
          >
            <Text className="text-white">already have an account ? </Text>
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
