// import { View, Text, TouchableOpacity } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import React, { useState } from "react";
// import { Image } from "expo-image";
// import { Ionicons } from "@expo/vector-icons";

// const UploadImage = () => {
//   const [image, setImage] = useState<string | null>(null);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <TouchableOpacity onPress={pickImage}>
//       <View className="w-full h-40 border-2 border-dashed border-gray-300 flex justify-center items-center">
//         {image ? (
//           <>
//             <Image
//               source={{ uri: image }}
//               // className="object-fit w-full h-full"
//               style={{ height: "100%", width: "100%", borderRadius: 10 }}
//               contentFit="cover"
//               contentPosition="center"
//             />
//             <Text className="absolute text-blue-500 bottom-2 right-2 flex gap-5 justify-center items-center">
//               <Ionicons
//                 name={"camera-outline"}
//                 size={24}
//                 color={"bg-blue-500"}
//                 className="px-5"
//               />
//               <Text className="ml-3 text-white">Upload Image</Text>
//             </Text>
//           </>
//         ) : (
//           <Text className="text-white text-md">Upload Image</Text>
//         )}
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default UploadImage;

import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { color } from "@/app/utils/color";
import { updateBikeField } from "@/app/redux/bikeCreateSlice";
import { useDispatch } from "react-redux";
type UploadImageProps = {
  imageBase64?: string;
};

const UploadImage = ({ imageBase64 }: UploadImageProps) => {
  const [image, setImage] = useState<string | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (imageBase64) {
      setImage(`data:image/jpeg;base64,${imageBase64}`);
    }
  }, [imageBase64]);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: true, // important! this gives Base64
    });

    if (!result.canceled && result.assets.length > 0) {
      const picked = result.assets[0];
      setImage(picked.uri);
      if (picked.base64) {
        dispatch(
          updateBikeField({
            key: "imageBase64",
            value: picked.base64,
          })
        );
      }
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <View
        className={`w-full h-[13rem] border-2 border-dashed ${color.CardBgc} elevation-lg flex justify-center items-center`}
      >
        {image ? (
          <>
            <Image
              source={{ uri: image }}
              style={{ height: "100%", width: "100%", borderRadius: 10 }}
              contentFit="cover"
              contentPosition="center"
            />
            <Text className="absolute text-blue-500 bottom-2 right-2 flex gap-5 justify-center items-center">
              <Ionicons
                name={"camera-outline"}
                size={24}
                color={"bg-blue-500"}
                className="px-5"
              />
              <Text className="ml-3 text-white">Upload Image</Text>
            </Text>
          </>
        ) : (
          <Text className="text-white text-md">Upload Image</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default UploadImage;
