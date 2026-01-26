// import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import UploadImage from "./components/bikes/createBike/UploadImage";
// import FormComponent from "./components/bikes/createBike/FormComponent";
// import Buttton from "./components/bikes/createBike/Buttton";
// import { BikeAdd } from "./api/bikeApi";
// import { color } from "./utils/color";
// import { useRouter } from "expo-router";
// import OptionDropdown from "./components/bikes/createBooking/DropDown";

// const AddUserDetail = () => {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     address: "",
//     number: "",
//     RatePerDay: "",
//   });

//   const submitBike = async () => {
//     try {
//       await BikeAdd({
//         location: form.address,
//         BikeType: form.number,
//         RatePerDay: form.RatePerDay,
//       });

//       Alert.alert("Success", "Bike added successfully");
//     } catch (error: any) {
//       Alert.alert("Error", "Failed to add bike");
//     }
//   };

//   const update = (key: keyof typeof form, value: string) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };
//   return (
//     <SafeAreaView className="flex-1  bg-black flex-col gap-10">
//       <View
//         className={` gap-2 flex flex-row py-2 ${color.textbg} items-center px-5 h-[3.5rem]`}
//       >
//         <TouchableOpacity onPress={() => router.back()} className="px-2">
//           <Ionicons
//             name={"arrow-back"}
//             color={"#000"}
//             size={30}
//             className="px-2"
//           />
//         </TouchableOpacity>
//         <Text className="text-black text-2xl gap-2">Add User Details </Text>
//       </View>
//       <View className="px-10 flex-1  bg-black flex-col gap-7">
//         <FormComponent
//           name="User"
//           value={"nikg"}
//           onChangeText={() => console.log("surya")}
//           placeHolder="Add Location"
//         />
//         <FormComponent
//           name="Address"
//           value={form.address}
//           onChangeText={(v) => update("address", v)}
//           placeHolder="Add Location"
//         />
//         <FormComponent
//           name="Number"
//           value={form.number}
//           onChangeText={(v) => update("number", v)}
//           placeHolder="Bike Type"
//         />
//         <View className=" flex flex-col justify-start gap-2 items-start  w-full  ">
//           <Text className="text-white text-xl  ">Type of Proof</Text>
//           <OptionDropdown Data={[]} />
//         </View>
//         <FormComponent
//           name="Attach aadhar document"
//           value={form.RatePerDay}
//           onChangeText={(v) => update("RatePerDay", v)}
//           placeHolder="Rate Per Day"
//         />

//         <Buttton submitBike={submitBike} />
//       </View>
//       {/* <Buttton /> */}
//     </SafeAreaView>
//   );
// };

// export default AddUserDetail;
import { View, Text, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import FormComponent from "./components/bikes/createBike/FormComponent";
import OptionDropdown from "./components/bikes/createBooking/DropDown";
import { color } from "./utils/color";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { fetchUserDetails, UpdateUserAndBooking } from "../api/bikeApi";
import { updateAllUserFields, updateUserField } from "./redux/UserSlice";
import { useRoute } from "@react-navigation/native";
import UploadImage from "./components/bikes/createBike/UploadImage";

const proofOptions = ["Aadhar", "Driving License", "Passport"];

const AddUserDetail = () => {
  const router = useRouter();
  const userNumber = useSelector((state: RootState) => state.booking.user);
  const dispatch = useDispatch();
  const route = useRoute<any>();
  const modeData = route.params?.mode;
  const id = route.params?.id;
  // const [form, setForm] = useState({
  //   name: "",
  //   user: userNumber,
  //   address: "",
  //   proofType: "Select option",
  //   proofNumber: "",
  // });
  console.log(modeData, "modeData");
  const form: any = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (userNumber) {
      dispatch(updateUserField({ key: "user", value: "userNumber" }));
    }
  }, [userNumber]);

  const update = (key: keyof typeof form, value: string) => {
    // setForm((prev) => ({ ...prev, [key]: value }));
    dispatch(updateUserField({ key, value }));
  };

  const saveUserDetails = async () => {
    console.log("surya");
    // 🔴 VALIDATION (MANDATORY)
    if (
      !form.name ||
      !form.user ||
      !form.address ||
      form.proofType === "Select option" ||
      !form.proofNumber
    ) {
      Alert.alert("Error", "All fields are mandatory");
      return;
    }

    // 👉 Save to backend / redux / asyncStorage if needed
    // await addUser(form)
    await fetchUserDetails(form);

    Alert.alert("Success", "User details added", [
      {
        text: "OK",
        onPress: () =>
          router.push({
            pathname: "/createBooking",
            params: { userAdded: "true", mode: "addBooking" }, // ✅ IMPORTANT
          }),
      },
    ]);
  };

  const updateUserDetail = async (id) => {
    await UpdateUserAndBooking(id, form);
    Alert.alert("Success", "User details added", [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* HEADER */}
      <View className={`flex-row items-center px-5 h-[3.5rem] ${color.textbg}`}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text className="text-black text-2xl ml-3">Add User Details</Text>
      </View>

      {/* FORM */}
      <View className="px-8 py-6 gap-6">
        <FormComponent
          name="Name"
          value={form.name}
          onChangeText={(v) => update("name", v)}
          placeHolder="Enter name"
        />

        <FormComponent
          name="Mobile Number"
          value={form.user}
          onChangeText={(v) => update("user", v)}
          placeHolder="Enter mobile number"
        />

        <FormComponent
          name="Address"
          value={form.address}
          onChangeText={(v) => update("address", v)}
          placeHolder="Enter address"
        />

        <View>
          <Text className="text-white text-xl mb-2">Type of Proof</Text>
          <OptionDropdown
            Data={proofOptions}
            selected={form.proofType}
            onSelect={(v) => update("proofType", v)}
          />
        </View>

        {/* <FormComponent
          name="Proof Number"
          value={form.proofNumber}
          onChangeText={(v) => update("proofNumber", v)}
          placeHolder="Enter ID number"
        /> */}
        {/* <UploadImage imageBase64={form.imageBase64} /> */}

        {/* SAVE BUTTON */}
        <TouchableOpacity
          onPress={() => {
            if (modeData === "update") {
              updateUserDetail(id);
            } else {
              saveUserDetails();
            }
          }}
          className={`rounded-xl ${color.textbg} py-3 mt-6`}
        >
          <Text className="text-black text-center text-lg font-semibold">
            {modeData == "update" ? "Update" : "Save"} User Details
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddUserDetail;
