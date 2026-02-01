import { color } from "@/app/utils/color";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
type OptionDropdownProps = {
  Data: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function OptionDropdown({
  Data,
  selected,
  onSelect,
}: OptionDropdownProps) {
  const [open, setOpen] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    Animated.timing(animation, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };

  const dropdownStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-10, 0],
        }),
      },
    ],
  };
  const dropdownRef = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [setOpen]);

  return (
    <View className=" w-full mt-3">
      {/* Button */}
      <TouchableOpacity
        onPress={toggleDropdown}
        ref={dropdownRef}
        // className="flex-row justify-between items-center rounded-xl  w-full bg-black"
      >
        <View
          className={` ${color.CardBgc} border w-full justify-between items-center  rounded-lg flex flex-row px-2  h-[3.5rem]`}
        >
          <Text className={`text-white text-md  px-5 w-5/6  `}>{selected}</Text>

          <Animated.Text
            className="text-white"
            style={{
              transform: [
                {
                  rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                  }),
                },
              ],
            }}
          >
            <Ionicons
              name={"chevron-down"}
              color={"#fff"}
              size={24}
              className="px-2"
            />
          </Animated.Text>
        </View>
      </TouchableOpacity>

      {/* Overlay */}
      {open && (
        <Pressable onPress={toggleDropdown} className="absolute inset-0 z-0" />
      )}

      {/* Dropdown */}
      {open && (
        <Animated.View
          style={dropdownStyle}
          className={`absolute top-20 left-0 -right-8  w-[95%]  mx-4  rounded-xl shadow-lg overflow-hidden ${color.CardBgcolor} z-10`}
        >
          {Data.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => {
                onSelect(item);
                toggleDropdown();
              }}
              className={`px-5 py-4 border-b ${color.CardBgcolor}`}
            >
              <Text className="text-white text-md">{item}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}
    </View>
  );
}
