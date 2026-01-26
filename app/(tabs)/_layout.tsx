// // import { View, Text } from "react-native";
// // import React from "react";
// // import { Tabs } from "expo-router";

// // const layout = () => {
// //   return (
// //     <Tabs>
// //       <Tabs.Screen
// //         name="index"
// //         options={{ title: "Home", headerShown: "false" }}
// //       />
// //     </Tabs>
// //   );
// // };

// // export default layout;

// import { Tabs } from "expo-router";

// export default function TabLayout() {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         name="splash"
//         options={{ title: "splash", headerShown: false }}
//       />
//       <Tabs.Screen
//         name="index"
//         options={{ title: "Home", headerShown: false }}
//       />
//       <Tabs.Screen name="profile" options={{ title: "Profile" }} />
//     </Tabs>
//   );
// }

// app/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const tabItems = [
    {
      name: "index",
      label: "Home",
      icon: "home-outline",
      iconActive: "home",
    },
    {
      name: "bikes",
      label: "Bikes",
      icon: "bicycle-outline",
      iconActive: "bicycle",
    },
    {
      name: "bookings",
      label: "Bookings",
      icon: "calendar-outline",
      iconActive: "calendar",
    },
    {
      name: "customers",
      label: "Customers",
      icon: "people-outline",
      iconActive: "people",
    },
    {
      name: "reports",
      label: "Reports",
      icon: "bar-chart-outline",
      iconActive: "bar-chart",
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 0, // 50 is too much
          left: 16,
          right: 16,
          height: 70,
          backgroundColor: "#111",
          borderRadius: 24,
          borderTopWidth: 0,
        },

        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      {tabItems.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? tab.iconActive : tab.icon}
                size={24}
                color={focused ? "#D5B60A" : "#ffffff"}
              />
            ),
          }}
        />
      ))}

      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Bikes"
        options={{
          title: "Bikes",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bicycle" : "bicycle-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}
