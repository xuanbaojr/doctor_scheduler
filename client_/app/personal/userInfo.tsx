import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import InforSection from "@/components/infor/InforSection";

interface section {
  section : string,
  value : string | null,
}

interface Props {
  phone : string | null ,
  birthday : string | null,
  gender : string | null,
  numberCMTND : string | null,
  address : string | null,
  nation : string | null,
  nationality : string | null,
  job : string | null,
}

const userInfo = ({
  phone, 
  birthday, 
  gender, 
  numberCMTND, 
  address, 
  nation, 
  nationality, 
  job
}: Props) => {
  const [selectedImage, setSelectedImage] = useState(
    require("@/assets/avatar.png")
  );

  const listsection : section[] = creatnewSection(
    phone, 
    birthday, 
    gender, 
    numberCMTND, 
    address, 
    nation, 
    nationality, 
    job)
  const { user } = useUser();
  return (
    <View className="flex-col px-2 py-1 h-full w-full">
      <View className="flex-col justify-between items-center w-full mb-10">
        <Image
            source={
              typeof selectedImage === "string"
                ? { uri: selectedImage }
                : selectedImage || { uri: user?.imageUrl }
            }
            style={styles.avatar}
          />
        </View>
      <View className="flex-col m-2 ">
            {
              listsection.map((sec : section) => (
                <InforSection key={sec.section} section={sec.section} value={sec.value}/>
              ))
            }
      </View>
    </View>
  );
};

export default userInfo;

const creatnewSection = (
  phone : string | null ,
  birthday : string | null,
  gender : string | null,
  numberCMTND : string | null,
  address : string | null,
  nation : string | null,
  nationality : string | null,
  job : string | null,
): section[]  => {
  const listSection : section[] = [
    {
      section : "Số điện thoại",
      value: phone,
    },
    {
      section : "Ngay sinh",
      value: birthday,
    },
    {
      section:"Giới tính",
      value: gender,
    },
    {
      section: "Số Căn cước/CMTND",
      value : numberCMTND,
    },
    {
      section: "Địa chỉ",
      value :address
    },
    {
      section : "Dân tộc",
      value : nation,
    },
    {
      section: "Quốc tịch",
      value: nationality,
    },
    {
      section : "Nghề nghiệp",
      value : job,
    }
  ]
  return listSection
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "grey",
    margin: 15,
    borderColor: "grey",
    borderWidth: 1,
  }
});