import React, { Component, useEffect, useState } from "react";
import { View, Text, Pressable,TextInput} from "react-native";
import tailwind from "twrnc";
import { Button } from '@rneui/themed';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "./config";
export const Login = () => {
  const [userName,setUserName]= useState('');
  const [email,setEmail]= useState('');
  function create() {
    addDoc(collection(db, "NguoiDung"), {
      MaNguoiDung: "ND03",
      MaTaiKhoan: "TK03",
      NgaySinh: new Date(18/10/2003),
      SDT: "0123123",
      TenNguoiDung: "Nguyễn Thị Thu Huyền"
    }).then(()=>{
      console.log("Gưi thành công");
    }).catch((error)=>{
      console.log(error);
    });
  }
  return (
    <View
      style={tailwind`flex-1 w-full items-center justify-center `}
    >
      <View style={tailwind`px-4 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Login
        </Text>

        <View style={
          tailwind`flex flex-col gap-4`
          }>
          <TextInput onChangeText={(username)=>{setUserName(username)}} placeholder="Enter email address" style={{borderWidth: 1, borderColor: 'blue'}}/>
          <TextInput onChangeText={(email)=> {setEmail(email)}} placeholder="Enter password" style={{borderWidth: 1, borderColor: 'blue'}}/>
        </View>
          <View style={{
            backgroundColor: 'blue',
            width: 250,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}>
            <Button onPress={create}>Đăng nhập</Button>
          </View>
        
      </View>
    </View>
  );
};