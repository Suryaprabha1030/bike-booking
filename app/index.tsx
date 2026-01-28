// app/index.tsx
import { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // DEV override: clear adminId if testing login
        if (__DEV__) {
          console.log("DEV MODE: clearing adminId for testing login screen");
          await AsyncStorage.removeItem("adminId");
        }

        // Optional: simulate short loading
        await new Promise((res) => setTimeout(res, 300));

        // Get stored adminId
        const adminId = await AsyncStorage.getItem("adminId");
        console.log("adminId found:", adminId);

        if (adminId) {
          //   router.replace("/(tabs)"); // user is logged in
          router.replace("/auth/login");
        } else {
          router.replace("/auth/login"); // user not logged in
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        router.replace("/auth/login"); // fallback
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const keys = await AsyncStorage.getAllKeys();
      console.log("All AsyncStorage keys:", keys);

      const adminId = await AsyncStorage.getItem("adminId");
      console.log("adminId value:", adminId);
    };

    checkAuth();
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" />
    </View>
  );
}
