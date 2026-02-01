import { View, Text, TouchableOpacity, Alert, Pressable } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../utils/color";
import FormComponent from "../components/bikes/createBike/FormComponent";
import { loginAdmin } from "@/api/bikeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import logo from "../../assets/images/admin.svg";
import { Image } from "expo-image";
// import API from "../api/api";

export default function AdminLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const update = (key, value) => setForm({ ...form, [key]: value });

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Email and password required");
      return;
    }

    try {
      const data = await loginAdmin(form);

      // Store adminId in AsyncStorage
      await AsyncStorage.setItem("adminId", data.admin.id);

      Alert.alert("Success", "Logged in successfully!");
      router.replace("/(tabs)"); // navigate to tabs
    } catch (err: any) {
      Alert.alert("Login Failed", err.response?.data?.message || err.message);
    }
  };

  return (
    <SafeAreaView className="bg-black gap-5 flex-1 items-center justify-center ">
      {/* <Text className={`text-3xl ${color.textColor2} font-[700] `}>Sigin</Text> */}
      <View className="flex flex-col gap-2 items-center W-3/4">
        <Image source={logo} style={{ width: 60, height: 60 }} />
      </View>
      <View className="w-3/4 flex gap-5 py-3 ">
        <View className="w-full">
          <FormComponent
            name="Email"
            value={form.email}
            onChangeText={(v) => update("email", v)}
            placeHolder="Enter YourEmail"
          />
        </View>

        <View className="w-full">
          <FormComponent
            name="Password"
            value={form.password}
            onChangeText={(v) => update("password", v)}
            placeHolder="EnterYour password"
          />
        </View>
        {/* <View className="w-full">
          <View className="w-4 h-4 rounded-md"></View>
          <Text>I accept Accept term and condition</Text>
        </View> */}
        <View>
          <TouchableOpacity
            className={`w-full h-[3rem]   ${color.textbg} flex justify-center items-center rounded-lg`}
            onPress={handleLogin}
          >
            <Text className="text-black text-center text-lg font-[500]">
              {" "}
              Login Account
            </Text>
          </TouchableOpacity>
        </View>
        <View className="pt-3">
          <TouchableOpacity
            className={`w-full h-[3rem] border-2 ${color.CardBgc}  flex justify-center items-center rounded-lg`}
            onPress={handleLogin}
          >
            <Text className="text-white text-center text-lg font-[500]">
              {" "}
              Login With Biomterics
            </Text>
          </TouchableOpacity>
        </View>
        <Pressable
          onPress={() => {
            router.push("/auth/login");
          }}
        >
          <Text
            className={`text-md w-full text-center ${color.textColor2} pt-3 `}
          >
            <Text className="text-white">Don&apos;t have an account ? </Text>
            Sign up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
