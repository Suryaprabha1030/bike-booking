// const data = [
//   { iconName: "bicycle-outline", about: "Totalbikes", count: counts.totalBikes },
//   { iconName: "calendar-outline", about: "Active booking", count: 12 },
//   { iconName: "currency", about: "Revenue", count: 43 },
//   { iconName: "construct", about: "Upcoming maintenance", count: 43 },
// ];

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const getDashboardData = (counts) => [
  {
    iconName: "bicycle-outline",
    about: "Totalbikes",
    count: counts.totalBikes,
  },
  {
    iconName: "calendar-outline",
    about: "Active booking",
    count: counts.activeBooking,
  },
  { iconName: "cash", about: "Revenue", count: counts.revenue },
  {
    iconName: "construct",
    about: " maintanance",
    count: counts.maintenance,
  },
];

const QuickActionsdata = [
  { iconName: "add", about: "Add New Bike", path: "/addBike" },
  {
    iconName: "calendar-outline",
    about: "Create booking",
    path: "/createBooking",
  },
  { iconName: "users", about: "View Customers", path: "/customers" },
];

const bikeMangeButton = [
  { name: "All Bikes", value: "" },
  { name: "Available", value: "available" },
  { name: "Booked", value: "booked" },
  { name: "Maintanance", value: "maintanance" },
];
const bookingMangeButton = [
  { name: "All", value: "" },
  { name: "Pending", value: "pending" },
  { name: "Cancelled", value: "cancelled" },
  { name: "Confirmed", value: "confirmed" },
];
const bookingButton = [
  { name: "Cancel", value: "cancelled" },
  { name: "Pending", value: "pending" },
  { name: "Confirm", value: "confirmed" },
];

const fetchadminid = async () => {
  const adminId: any = await AsyncStorage.getItem("adminId");
  if (!adminId) {
    Alert.alert("Error", "Admin not logged in");
    return;
  }
  return adminId;
};

export {
  QuickActionsdata,
  bikeMangeButton,
  bookingMangeButton,
  bookingButton,
  fetchadminid,
};
