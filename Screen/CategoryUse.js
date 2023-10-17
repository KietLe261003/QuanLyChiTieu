import { TabItem } from "@rneui/base/dist/Tab/Tab.Item";
import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ImageBackground, Alert, ScrollView } from 'react-native';

const CategoryUse = () => {

    // selectedTab
    const [tabDefault, setTabDefault] = useState(1)
    const [selectedTabChiTieu, setSelectedTabChiTieu] = useState(0);
    const [selectedTabThuNhap, setSelectedTabThuNhap] = useState(0);

    const expenseCategories = [
        {
            id: 1,
            name: 'Thực phẩm',
        },
        {
            id: 2,
            name: 'Đi lại',
        },
        {
            id: 3,
            name: 'Nhà cửa',
        },
        {
            id: 4,
            name: 'Giải trí',
        },
        {
            id: 5,
            name: 'Sức khỏe',
        },
        {
            id: 6,
            name: 'Học tập',
        },
        {
            id: 7,
            name: 'Du lịch',
        },
        // Thêm các danh mục khác tại đây
    ];

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
                    Danh Mục
                </Text>
            </View>
            <View
                style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                }}>

                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: (selectedTabChiTieu == 1 || tabDefault == 1) ? '#4183c4' : 'rgba(0,0,0,0)',
                        flexDirection: 'column',
                    }}
                    onPress={() => {
                        setSelectedTabChiTieu(1);
                        setSelectedTabThuNhap(0);
                        setTabDefault(0);
                    }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Chi Tiêu</Text>
                    {/* chiều dài của post */}
                    <Text style={{ fontSize: 15, color: 'grey' }}>1</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: selectedTabThuNhap == 1 ? '#4183c4' : 'rgba(0,0,0,0)',
                        flexDirection: 'column'
                    }}
                    onPress={() => {
                        setSelectedTabChiTieu(0);
                        setSelectedTabThuNhap(1);
                        setTabDefault(0);

                    }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Thu Nhập</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>2</Text>
                </TouchableOpacity>
            </View>
            {(selectedTabChiTieu == 0 && tabDefault == 0) ? null : (
                <FlatList
                    style={{ marginStart: 15, marginEnd: 15, flexDirection: 'column' }}
                    data={expenseCategories}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey', marginTop: 10 }}>
                                <View><Text style={{ color: 'black' }}>{item.id}.</Text></View>
                                <View><Text style={{ color: 'black', marginStart: 10 }}>{item.name}</Text></View>
                                <View style={{ flex: 1 }} ></View>
                                <View><Text style={{ color: 'black', marginEnd: 10 }}>Sửa</Text></View>
                                <View><Text style={{ color: 'black' }}>Xóa</Text></View>
                            </View>
                        );
                    }}
                />
            )}
            {selectedTabThuNhap == 0 ? null : (
                <FlatList
                    style={{ marginStart: 15, marginEnd: 15, flexDirection: 'column' }}
                    data={expenseCategories}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey', marginTop: 10 }}>
                                <View><Text style={{ color: 'black' }}>{item.id}.</Text></View>
                                <View><Text style={{ color: 'black', marginStart: 10 }}>{item.name}</Text></View>
                                <View style={{ flex: 1 }} ></View>
                                <View><Text style={{ color: 'black', marginEnd: 10 }}>Sửa</Text></View>
                                <View><Text style={{ color: 'black' }}>Xóa</Text></View>
                            </View>
                        );
                    }}
                />
            )}
            <TouchableOpacity 
                onPress={() => {
                    Alert.alert("Thêm Danh Mục")
                }}>
                <View style={{ borderStyle: "solid", borderWidth: 1, backgroundColor: 'aqua' }}>
                    <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>+</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default CategoryUse;