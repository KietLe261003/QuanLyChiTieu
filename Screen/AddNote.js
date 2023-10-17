import { TabItem } from "@rneui/base/dist/Tab/Tab.Item";
import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ImageBackground, Alert, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddNote = () => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState('Hôm nay');
    const [textTime, setTextTime] = useState(new Date().getHours() + ':' + new Date().getMinutes());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        setTextDate(fDate);
        setTextTime(fTime);
    };

    const showMode = (currentMode) => {
        setMode(currentMode);
        setShow(true);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    backgroundColor: 'skyblue',
                }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                    Thêm Ghi Chú
                </Text>
            </View>
            <View style={{ height: 150, backgroundColor: 'red', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', width: '40%', backgroundColor: 'yellow' }}>
                    <View>
                        <Text style={{
                            color: 'black', fontWeight: 'bold', fontSize: 25, textAlign: 'center'
                        }}>Danh Mục</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', width: '60%' }}>
                    <Text>0</Text>
                </View>
            </View>
            <View style={{ height: 150, margin: 20, flexDirection: 'column' }}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', flex: 1}}
                    onPress={() => {
                        showMode('date')
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Ngày Tháng</Text>
                        <Text style={{ fontSize: 18, color: 'black', marginStart: 20 }}>{textDate}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> {'>'} </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flexDirection: 'row', flex: 1}}
                    onPress={() => {
                        showMode('time')
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Thời Gian</Text>
                        <Text style={{ fontSize: 18, color: 'black', marginStart: 20 }}>{textTime}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> {'>'} </Text>
                </TouchableOpacity>
                <KeyboardAvoidingView
                    style={{ flex: 1}}
                    behavior={Platform.OS === 'android' ? 'padding' : null}>
                    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Ghi Chú</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'grey', color:'black'}}
                            placeholder="Nhập ghi chú ..."
                            placeholderTextColor={'grey'}
                            
                        ></TextInput>
                    </View>
                </KeyboardAvoidingView>
            </View>

            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />)}
        </View>
    );
};

export default AddNote;