import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../utils/color";
import FormComponent from "../components/bikes/createBike/FormComponent";
import { loginAdmin } from "@/api/bikeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
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
    <SafeAreaView className="bg-black gap-5 flex-1 items-center ">
      <Text className={`text-3xl ${color.textColor2} font-[700] `}>Sigin</Text>

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
            onPress={handleLogin}
          >
            <Text className="text-black text-center text-xl">
              {" "}
              Login Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
