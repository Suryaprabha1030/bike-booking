// import { View, Text, TouchableOpacity, Alert } from "react-native";
// import React, { useEffect, useState } from "react";
// import CreateBookingCard from "./components/bikes/createBooking/CreateBookingCard";
// import { SafeAreaView } from "react-native-safe-area-context";
// import OptionDropdown from "./components/bikes/createBooking/DropDown";
// import FormComponent from "./components/bikes/createBike/FormComponent";
// import Buttton from "./components/bikes/createBike/Buttton";
// import { color } from "./utils/color";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { addBooking, getBikes } from "./api/bikeApi";
// import DateTimeRange from "./components/bikes/createBooking/DateTimePicker";
// import DateTimeRangeModern from "./components/bikes/createBooking/DateTimePicker";
// import FromDateOnly from "./components/bikes/createBooking/DateTimePicker";

// const createBooking = () => {
//   const router = useRouter();
//   const [bikesName, setBikesName] = useState([]);
//   const options = ["Profile", "Settings", "Logout"];
//   // const [selected, setSelected] = useState("Select option");
//   const [formData, setFormData] = useState({
//     user: "",
//     bikeType: "Select option",
//     pickUp: "",
//     drop: "",
//     modeOfRental: "Select option",
//     modeOfPayment: "",
//     duration: "",
//     amount: "",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const data: any = await getBikes();
//       setBikesName(data?.data?.map((d: any) => d.BikeType));
//       // console.log(data, "bikesData");
//     };

//     fetchData();
//   }, []);

//   const booking = async () => {
//     try {
//       await addBooking({
//         user: formData.user,
//         bikeType: formData.bikeType,
//         pickUp: formData.pickUp,
//         drop: formData.drop,
//         modeOfRental: formData.modeOfRental,
//         modeOfPayment: formData.modeOfPayment,
//         duration: formData.duration,
//         amount: formData.amount,
//       });

//       Alert.alert("Success", "booking  successfully");
//     } catch (error: any) {
//       Alert.alert("Error", "Failed to booking ");
//     }
//   };
//   const update = (key: keyof typeof form, value: string) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };
//   return (
//     <SafeAreaView className="bg-black flex-1 gap-5 py-5">
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
//         <Text className="text-black text-2xl gap-2">Create Booking </Text>
//       </View>
//       <View className=" flex flex-col justify-start gap-2 items-start  w-full px-[2rem] ">
//         <Text className="text-white text-xl  ">Bike</Text>
//         <OptionDropdown
//           Data={bikesName}
//           selected={formData.bikeType}
//           onSelect={(value) => update("bikeType", value)}
//         />
//       </View>
//       <View className=" flex flex-row justify-center gap-2 items-start  w-full px-[2rem] ">
//         <View className="w-[60%]">
//           <FormComponent
//             name="User"
//             value={formData.user}
//             onChangeText={(v) => update("user", v)}
//             placeHolder="Add Number"
//           />
//         </View>

//         <View className="w-[40%] h-full flex flex-row items-end">
//           <TouchableOpacity
//             onPress={() => {
//               router.push("/AddUserDetail");
//             }}
//           >
//             <View
//               className={` px-4 border  ${color.CardBgc} elevation-lg h-[3.5rem] w-full rounded-lg  flex flex-row justify-center items-center`}
//             >
//               <Ionicons
//                 name={"add-circle-outline"}
//                 color={"#fff"}
//                 size={24}
//                 className="px-2"
//               />
//               <Text className="text-white text-lg   ">Details</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View className=" flex  justify-start items-start  bg-black flex-col gap-7  w-full px-[2rem] ">
//         {/* <FormComponent
//           name="Pickup Location"
//           value={formData.pickUp}
//           onChangeText={(v) => update("pickUp", v)}
//           placeHolder="Add Location"
//         /> */}
//         {/* <FromDateOnly /> */}
//       </View>
//       <View className=" flex  justify-start items-start  bg-black flex-col gap-7  w-full px-[2rem] ">
//         <FormComponent
//           name="Dropoff Location"
//           value={formData.drop}
//           onChangeText={(v) => update("drop", v)}
//           placeHolder="Add Location"
//         />
//       </View>
//       <View className=" flex flex-col justify-start gap-2 items-start  w-full px-[2rem] ">
//         <Text className="text-white text-xl  ">Mode of Rental</Text>
//         <OptionDropdown
//           Data={options}
//           selected={formData.modeOfRental}
//           onSelect={(value) => update("modeOfRental", value)}
//         />
//       </View>
//       <View className=" flex flex-col justify-start gap-2 items-start  w-full px-[2rem] ">
//         <Text className="text-white text-xl  ">Mode of Payment</Text>
//         <OptionDropdown
//           Data={options}
//           selected={formData.modeOfPayment}
//           onSelect={(value) => update("modeOfPayment", value)}
//         />
//       </View>

//       <View className=" flex flex-row  justify-start items-start  bg-black gap-10  w-full px-[2rem] ">
//         <View className=" flex  justify-start items-start  bg-black flex-col gap-7  w-[45%] ">
//           <FormComponent
//             name="Duration"
//             value={formData.duration}
//             onChangeText={(v) => update("duration", v)}
//             placeHolder="Add Location"
//           />
//         </View>
//         <View className=" flex  justify-start items-start  bg-black flex-col gap-7  w-[45%] ">
//           <FormComponent
//             name="Amount"
//             value={formData.amount}
//             onChangeText={(v) => update("amount", v)}
//             placeHolder="Add Location"
//           />
//         </View>
//       </View>
//       <View className="  bg-black  gap-7  w-full px-[2rem] ">
//         <Buttton submitBike={booking} />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default createBooking;
import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

import OptionDropdown from "./components/bikes/createBooking/DropDown";
import FormComponent from "./components/bikes/createBike/FormComponent";
import Buttton from "./components/bikes/createBike/Buttton";
import { color } from "./utils/color";
import {
  addBooking,
  BikeUpdate,
  bookingUpdate,
  fetchUserBooking,
  getBikes,
} from "../api/bikeApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { updateAllBookingFields, updateField } from "./redux/bookingSlice";
import CustomDatePicker from "./components/booking/DatePicker";
import TimePicker from "./components/booking/TimePicker";
import { fetchadminid } from "./utils/data";

const CreateBooking = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [bikesName, setBikesName] = useState<string[]>([]);
  const [bikesData, setBikesData] = useState<any[]>([]);
  const [userDetailAdded, setUserDetailAdded] = useState(false);
  // const [selectedBike, setSelectedBike] = useState<any>({});
  const dispatch = useDispatch();
  const formData: any = useSelector((state: RootState) => state.booking);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [selectedToDate, setSelectedToDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [timeVisible, setTimeVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState("9:30 AM");
  const [selectedToTime, setSelectedToTime] = useState("3:30 PM");

  // Fetch bikes
  useEffect(() => {
    const fetchAdmin = async () => {
      const adminId = await fetchadminid(); // ✅ await it

      if (adminId) {
        dispatch(
          updateField({
            key: "adminId",
            value: adminId,
          }),
        );
      }
    };

    fetchAdmin();
  }, []);
  useEffect(() => {
    const loadBikes = async () => {
      const adminId = await fetchadminid();

      if (!adminId) return;

      const res: any = await getBikes(adminId);

      setBikesName(res?.data?.map((d: any) => d.BikeType));
      setBikesData(res?.data);
    };

    loadBikes();
  }, []);

  const onSelectBike = (bikeType: string) => {
    const bike = bikesData.find((b) => b.BikeType === bikeType);
    console.log(bike, "bike");
    // setSelectedBike(bike);

    dispatch(updateField({ key: "bikeType", value: bikeType }));
    dispatch(updateField({ key: "RatePerDay", value: bike?.RatePerDay || 0 }));

    // Optional: reset duration & amount
    dispatch(updateField({ key: "duration", value: "1" }));
    dispatch(updateField({ key: "amount", value: bike?.RatePerDay || 0 }));
  };

  // Check user detail return
  useEffect(() => {
    if (params?.userAdded === "true") {
      setUserDetailAdded(true);
    }
  }, [params]);

  const update = (key: any, value: string) => {
    // setFormData((prev) => ({ ...prev, [key]: value }))
    dispatch(updateField({ key, value }));
  };

  const bookingUpdateStatus = async () => {
    if (params.mode !== "updateBooking" || !params.id) return;
    try {
      const payload = {
        adminId: formData.adminId,
        user: formData.user,
        bikeType: formData.bikeType,
        modeOfRental: formData.modeOfRental,
        modeOfPayment: formData.modeOfPayment,
        duration: formData.duration,
        amount: formData.amount,
        booking: formData.booking,
        amountPaid: formData.amountPaid,
        fromDate: formData.fromDate,
        toDate: formData.toDate,
        amountStatus:
          Number(formData.amount) === Number(formData.amountPaid)
            ? "confirmed"
            : "pending",
      };
      await bookingUpdate(params.bookingId, payload);
      Alert.alert("Success", "Booking status updated successful", [
        {
          text: "OK",
          onPress: () =>
            router.push({
              pathname: "/bookings",
              params: {
                from: "home",
              },
              // ✅ IMPORTANT
            }),
        },
      ]);
      // router.back();
    } catch (err) {
      Alert.alert("Error", "Booking failed");
    }
  };

  const booking = async () => {
    dispatch(updateField({ key: "booking", value: "confirmed" }));
    dispatch(
      updateField({
        key: "amountStatus",
        value:
          Number(formData.amount) === Number(formData.amountPaid)
            ? "confirmed"
            : "pending",
      }),
    );

    if (!userDetailAdded) {
      Alert.alert(
        "User Details Required",
        "Please add user details to continue",
        [
          { text: "Cancel" },
          {
            text: "Add Now",
            onPress: () => router.push("/AddUserDetail"),
          },
        ],
      );
      return;
    }
    const selectedBike = bikesData.find(
      (b) => b.BikeType === formData.bikeType,
    );

    if (!selectedBike) {
      Alert.alert("Error", "Bike not found");
      return;
    }
    // Basic validation
    if (!formData.user || formData.bikeType === "Select option") {
      Alert.alert("Error", "Fill all required fields");
      return;
    }

    try {
      const bikePayload = {
        bikeStatus: "booked",
      };
      await addBooking(formData);
      await BikeUpdate(selectedBike._id, bikePayload, selectedBike);
      Alert.alert("Success", "Booking successful", [
        {
          text: "OK",
          onPress: () =>
            router.push({
              pathname: "/bookings",
              params: {
                from: "home",
              },
              // ✅ IMPORTANT
            }),
        },
      ]);
      router.back();
    } catch (err) {
      Alert.alert("Error", "Booking failed");
    }
  };

  useEffect(() => {
    let duration = "1"; // default
    if (formData.modeOfRental === "Per Day")
      duration = "1"; // 1 day
    else if (formData.modeOfRental === "Per Hour") duration = "1"; // 1 hour

    // Update duration in Redux
    dispatch(updateField({ key: "duration", value: duration }));

    // Update amount
    //  console.log(rateData,"rateData")
    const rate = Number(formData.RatePerDay || 0);
    const durationNum = Number(duration);
    let amount = 0;
    // "Hourly", "Daily", "monthly"

    if (formData.modeOfRental === "Daily") {
      amount = rate * durationNum;
    } else if (formData.modeOfRental === "monthly") {
      amount = rate * 24 * durationNum; // convert per hour
    } else if (formData.modeOfRental === "Hourly") {
      amount = (rate / 24) * durationNum; // convert per hour
    }

    dispatch(updateField({ key: "amount", value: amount.toString() }));
  }, [formData.modeOfRental, formData.ratePerDay]);

  useEffect(() => {
    if (params.mode !== "updateBooking" || !params.id) return;

    const fetchData = async () => {
      try {
        const adminId = await fetchadminid();
        const res = await fetchUserBooking(params.id, { adminId });

        console.log("API response:", res);

        const bookdata = res?.data?.bookingDetails; // adjust if needed

        if (!bookdata) {
          console.error("bookingDetails not found");
          return;
        }

        dispatch(
          updateAllBookingFields({
            adminId: bookdata.adminId,
            user: bookdata.user,
            bikeType: bookdata.bikeType,
            modeOfRental: bookdata.modeOfRental,
            modeOfPayment: bookdata.modeOfPayment,
            duration: bookdata.duration,
            amount: bookdata.amount,
            userDetailAdded: false,
            booking: bookdata.booking,
            amountPaid: formData.amountPaid,
            fromDate: formData.fromDate,
            toDate: formData.toDate,
            amountStatus:
              formData.amount === formData.amountPaid ? "confirmed" : "pending",
          }),
        );
      } catch (error) {
        console.error("Fetch booking failed:", error);
      }
    };

    fetchData();
  }, [params.mode, params.id]);

  return (
    <SafeAreaView className="bg-black flex-1 py-5">
      {/* HEADER */}
      <View
        className={`flex-row gap-[5rem] items-center px-5 h-[3.5rem] ${color.textbg}`}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={32} color="#000" />
        </TouchableOpacity>
        <Text className="text-black text-2xl ml-3">
          {params.mode === "addBooking" ? "Create" : "Update"} Booking
        </Text>
      </View>

      {/* BIKE */}
      <View className="px-8 mt-5">
        <Text className="text-white text-md">Bike</Text>
        <OptionDropdown
          Data={bikesName}
          selected={formData.bikeType}
          onSelect={onSelectBike}
        />
      </View>

      {/* USER + DETAILS */}
      {params.mode === "addBooking" && (
        <View className="flex-row px-8 mt-5 gap-2">
          <View className="w-[60%]">
            <FormComponent
              name="User"
              value={formData.user}
              placeHolder="Mobile number"
              onChangeText={(v) => update("user", v)}
            />
          </View>

          <View className="w-[40%] justify-end">
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/AddUserDetail",
                  params: { mode: "add" },
                })
              }
              className={`h-[3.5rem] rounded-lg flex-row items-center justify-center
              ${userDetailAdded ? "bg-green-600" : color.CardBgc}`}
            >
              <Ionicons
                name={
                  userDetailAdded ? "checkmark-circle" : "add-circle-outline"
                }
                size={22}
                color="#fff"
              />
              <Text className="text-white ml-2">
                {userDetailAdded ? "Added" : "Details *"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* DROP */}
      <View className="flex-row px-8 mt-6 gap-2">
        <View className="w-[49%]">
          <Text className="text-md text-white mb-2">From</Text>

          {formData.modeOfRental === "Hourly" ? (
            <TimePicker
              setTimeVisible={setTimeVisible}
              selectedTime={selectedTime}
              timeVisible={timeVisible}
              setSelectedTime={setSelectedTime}
            />
          ) : (
            <CustomDatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              dataUpdate={(date: any) => {
                dispatch(updateField({ key: "fromDate", value: date }));
              }}
            />
          )}
        </View>
        <View className="w-[49%]">
          <Text className="text-md text-white mb-2">To</Text>

          {formData.modeOfRental === "Hourly" ? (
            <TimePicker
              setTimeVisible={setTimeVisible}
              selectedTime={selectedToTime}
              timeVisible={timeVisible}
              setSelectedTime={setSelectedToTime}
            />
          ) : (
            <CustomDatePicker
              selectedDate={selectedToDate}
              setSelectedDate={setSelectedToDate}
              dataUpdate={(date: any) => {
                dispatch(updateField({ key: "toDate", value: date }));
              }}
            />
          )}
        </View>
      </View>

      {/* RENTAL MODE */}
      <View className="px-8 mt-6">
        <Text className="text-white text-md">Mode of Rental</Text>
        <OptionDropdown
          Data={["Hourly", "Daily", "monthly"]}
          selected={formData.modeOfRental}
          onSelect={(v) => update("modeOfRental", v)}
        />
      </View>

      {/* PAYMENT MODE */}
      <View className="flex-row px-8 mt-6 gap-4">
        <View className=" w-[49%]">
          <FormComponent
            name="AmountPaid"
            value={formData.amountPaid}
            placeHolder="₹"
            onChangeText={(v) => update("amountPaid", v)}
          />
        </View>
        <View className="px-8  w-[49%]">
          <Text className="text-white text-md">Mode of Payment</Text>
          <OptionDropdown
            Data={["Cash", "UPI", "Card"]}
            selected={formData.modeOfPayment}
            onSelect={(v) => update("modeOfPayment", v)}
          />
        </View>
      </View>

      {/* DURATION + AMOUNT */}
      <View className="flex-row px-8 mt-6 gap-4">
        <View className="w-1/2">
          <FormComponent
            name="Duration"
            value={formData.duration}
            placeHolder={formData.modeOfRental}
            onChangeText={(v) => {
              dispatch(updateField({ key: "duration", value: v }));

              // Update amount dynamically on user input
              const rate = Number(formData.RatePerDay || 0);
              const durationNum = Number(v);
              let amount = 0;

              if (formData.modeOfRental === "Daily") {
                console.log("");
                amount = rate * durationNum;
              } else if (formData.modeOfRental === "Hourly") {
                amount = (rate / 24) * durationNum;
              } else if (formData.modeOfRental === "monthly") {
                amount = rate * 30 * durationNum;
              }

              dispatch(
                updateField({ key: "amount", value: amount.toString() }),
              );
            }}
          />
          {/* /> */}
        </View>
        <View className="w-1/2">
          <FormComponent
            name="Amount"
            value={formData.amount}
            placeHolder="₹"
            onChangeText={(v) => update("amount", v)}
          />
        </View>
      </View>

      {/* SUBMIT */}
      <View className="px-8 mt-8">
        <Buttton
          submitBike={() => {
            if (params.mode === "addBooking") {
              booking();
            } else {
              bookingUpdateStatus();
            }
          }}
          mode={params?.mode}
          name={"Booking"}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateBooking;
