import {View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet, FlatList} from 'react-native';
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useEffect, useState} from "react";
import BarcodeScanner from "../barcodeScanner";

const OrderDetails = () => {
    const navigation = useNavigation();

    {/*Function to display current date*/}
    const CurrentDate = () => {
        const [currentDate, setCurrentDate] = useState('');

        useEffect(() => {
            // Function to update the current date
            const updateCurrentDate = () => {
                const now = new Date();
                const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
                setCurrentDate(formattedDate);
            };

            // Initial call to set the current date
            updateCurrentDate();

            // Update the current date every second (you can adjust the interval)
            const intervalId = setInterval(updateCurrentDate, 1000);

            // Clean up the interval on component unmount
            return () => clearInterval(intervalId);
        }, []);
        return(
            <View>
                <Text>{currentDate}</Text>
            </View>
        )
    };

    {/*A function to track a product's arrival*/}
    const DestinationsTracker = ()=>{
        const destinationLists = [
            {
                Txt1:"US 2343445668",
                Txt2:"Tamil Nadu",
                Txt3:"Delivered"
            },
            {
                Txt1:"US 2343445652",
                Txt2:"Delhi-India",
                Txt3:"Transit"
            },
            {
                Txt1:"US 2343445638",
                Txt2:"Franklin-Alabama",
                Txt3:"Accepted"
            }
        ]

        return(
            <FlatList data={destinationLists} renderItem={({item})=>(
                <View style={tw `my-2 items-center mt-5`}>
                    <View style={[tw `h-20 w-11/12 rounded-xl bg-gray-200`,styles.wrapper]}>
                        <View style={tw `mx-2 flex-row`}>
                            <View style={tw `h-15 w-15 bg-gray-400 mt-2.8 rounded-lg`}>

                            </View>
                            <View style={tw `justify-center mt-2 flex-row mx-2`}>
                                <View>
                                    <Text style={tw `font-extrabold text-lg`}>{item.Txt1}</Text>
                                    <Text style={tw `font-bold text-gray-500 mt-3`}>{item.Txt2}</Text>
                                </View>
                                <View>
                                    <Text style={tw `absolute bottom-0 left-10`}>{item.Txt3}</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            )}/>
        )
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={tw `mx-2`}>
            <View style={tw ` mt-8`}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View>
                        <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={tw `flex-row justify-between mt-5`}>
                <View style={tw `h-12 w-10/12 border border-gray-500 rounded-full`}>
                    <View style={tw `flex-row mx-2 mt-2.5`}>
                        <EvilIcons name="search" size={30} color="black" />
                        <TextInput style={tw `flex-1`} placeholder={"Search..."}/>
                    </View>
                </View>

                <TouchableOpacity onPress={BarcodeScanner}>
                    <View style={tw `h-12 w-12 rounded-full bg-black`}>
                        <View style={tw `items-center mt-2.8`}>
                            <AntDesign name="scan1" size={24} color="white" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


            {/*Tracking Delivery Process*/}
            <View style={tw `mt-5 items-center`}>
                <View style={[tw `h-50 w-11/12 bg-gray-100 rounded-xl`,styles.wrapper]}>
                    <View style={tw `mx-2 my-2`}>
                        <View style={tw `flex-row`}>
                            <AntDesign name="linechart" size={24} color="black" />
                            <View style={tw `mx-2 flex-row`}>
                                <View>
                                    <Text style={tw `font-extrabold mb-1`}>6556 23341 8090</Text>
                                    <Text>Ena Express</Text>
                                </View>
                                <Text style={tw `font-extrabold ml-22`}>Transit</Text>
                            </View>
                        </View>
                        <View style={tw `mt-10 flex-row justify-evenly`}>
                            <View style={tw `h-3 w-3 bg-black rounded-full mt-2`}/>
                            <View style={tw `h-1 w-20 bg-black mt-3`}/>
                            <View style={tw `h-8 w-8 bg-black rounded-full`}>
                                <View style={tw `items-center mt-1`}>
                                    <MaterialIcons name="flight" size={20} color="white" />
                                </View>
                            </View>
                            <View style={tw `h-1 w-20 bg-gray-400 mt-3`}/>
                            <View style={tw `h-3 w-3 bg-gray-400 rounded-full mt-2`}/>
                            <View style={tw `h-1 w-20 bg-gray-400 mt-3`}/>
                            <View style={tw `h-3 w-3 bg-gray-400 rounded-full mt-2`}/>
                        </View>

                        <View style={tw `flex-row justify-between mt-8`}>
                            <View>
                                <CurrentDate/>
                                <Text>China</Text>
                            </View>
                            <View>
                                <CurrentDate/>
                                <Text>Amasaman</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <Text style={tw `font-extrabold text-lg mt-5`}>Tracking</Text>

            <DestinationsTracker/>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    wrapper:{
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.1,
        shadowRadius:2,

    }
})

export default OrderDetails;