// const data = [
//   { iconName: "bicycle-outline", about: "Totalbikes", count: counts.totalBikes },
//   { iconName: "calendar-outline", about: "Active booking", count: 12 },
//   { iconName: "currency", about: "Revenue", count: 43 },
//   { iconName: "construct", about: "Upcoming maintenance", count: 43 },
// ];

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
  { iconName: "currency", about: "Revenue", count: counts.revenue },
  {
    iconName: "construct",
    about: "Upcoming maintenance",
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
  { iconName: "users", about: "View Customers", path: "/" },
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

export { QuickActionsdata, bikeMangeButton, bookingMangeButton, bookingButton };
