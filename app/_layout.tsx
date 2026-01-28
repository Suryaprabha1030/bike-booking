// import "./global.css";
// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }

import { View } from "react-native";
import "./global.css";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          {/* <Stack.Screen name="splash" options={{ headerShown: false }} /> */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="auth/login"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="auth/signup"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="addBike"
            options={{ headerShown: false, presentation: "modal" }} // or false
          />
          <Stack.Screen
            name="createBooking"
            options={{ headerShown: false, presentation: "modal" }} // or false
          />
          <Stack.Screen
            name="AddUserDetail"
            options={{ headerShown: false, presentation: "modal" }} // or false
          />
        </Stack>
      </Provider>
    </View>
  );
}
