// import { View, Text } from "react-native";
// import React, { useEffect } from "react";
// import { Image } from "expo-image";
// import Logo from "./logo.jpg";
// import { useRouter } from "expo-router";

// const Splash = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.replace("/"); // navigate to Home after 2s
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View className="flex-1 items-center justify-center bg-black">
//       {/* <Image source={Logo} className="w-40 h-40" />
//        */}
//       <Image
//         source={Logo}
//         style={{ width: 160, height: 160 }}
//         contentFit="contain"
//       />

//       <Text className="text-white text-2xl font-bold mt-4">
//         Bike Rental Management
//       </Text>
//     </View>
//   );
// };

// export default Splash;
