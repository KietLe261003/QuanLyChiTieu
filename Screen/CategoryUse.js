import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ImageBackground, Alert, ScrollView } from 'react-native';

const CategoryUse = () => {
    
    // selectedTab
    const [tabDefault, setTabDefault] = useState(1)
    const [selectedTabChiTieu, setSelectedTabChiTieu] = useState(0);
    const [selectedTabThuNhap, setSelectedTabThuNhap] = useState(0);
    return (
        <View style={{ flex:1, backgroundColor:'white'}}>
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
            {(selectedTabChiTieu == 0 && tabDefault ==0) ? null : (
                <View>
                    <Text style={{color:'black'}}>Nội dung danh mục chi tiêu</Text>
                </View>
            )}
            { selectedTabThuNhap ==0 ? null : (
                <View>
                    <Text style={{color:'black'}}>Nội dung danh mục thu nhập</Text>
                </View>
            )}
        </View>
    );
};

export default CategoryUse;