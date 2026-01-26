import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { getAmountAnalytics } from "@/api/bikeApi";
import DarkApexAnalyticsChart from "../components/reports/chart";
import TopBarBikes from "../components/bikes/TopBarBikes";
import { SafeAreaView } from "react-native-safe-area-context";

const reports = () => {
  return (
    <SafeAreaView className="flex-1   bg-black flex-col gap-5">
      <TopBarBikes name="Analytics" />
      <DarkApexAnalyticsChart />
    </SafeAreaView>
  );
};

export default reports;
