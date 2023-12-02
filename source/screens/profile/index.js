import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import tw from 'twrnc';
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const handleShipment = () => {
        navigation.navigate("ShipmentPage")
    }
    const handlePayment = () =>{
        navigation.navigate("PaymentPage")
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw `mx-2`}>
                <View style={tw `justify-between flex-row mt-8`}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <View>
                            <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={tw `bg-gray-100 h-10 w-10 rounded-full`}>
                            <View style={tw `items-center mt-1.5`}>
                                <Ionicons name="settings-outline" size={28} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <View style={tw `items-center mt-10`}>
                        <View style={tw `h-20 w-11/12 bg-gray-200 rounded-xl`}>
                            <View style={tw `flex-row`}>
                                <View style={tw `mt-2.5 mx-2`}>
                                    <Image source={require("../../../assets/confident-business-woman-portrait-smiling-face.jpg")} style={tw `h-15 w-20 rounded-lg`}/>
                                </View>
                                <View style={tw `justify-center`}>
                                    <Text style={tw `font-extrabold text-lg`}>Kelvin Afrifa Afriyie</Text>
                                    <Text>klvnafriyie123@gmail.com</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>

                <View style={tw `items-center`}>
                    <View style={tw `h-100 w-11/12 border border-gray-400 mt-10 rounded-xl`}>
                        <View style={tw `my-1 mx-2`}>
                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <Ionicons name="person-circle" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-4 mx-3`}>
                                        <Text style={tw `font-bold text-sm`}>Personal Details</Text>
                                    <TouchableOpacity>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-30`} />
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-5`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <FontAwesome5 name="shopping-bag" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-8 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>My Order</Text>
                                    <TouchableOpacity>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-42`} />
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-5`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <MaterialIcons name="favorite" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-8 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>My Favorites</Text>
                                    <TouchableOpacity>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-36`} />
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-5`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <MaterialIcons name="local-shipping" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-8 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>Shopping Address</Text>
                                    <TouchableOpacity onPress={handleShipment}>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-26`} />
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-5`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <Entypo name="credit-card" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-8 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>My Card</Text>
                                    <TouchableOpacity onPress={handlePayment}>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-43`} />
                                    </TouchableOpacity>
                                </View>
                            </View>



                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-5`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <Ionicons name="settings-sharp" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-8 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>Setting</Text>
                                    <TouchableOpacity>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-44`} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={tw `items-center`}>
                    <View style={tw `h-50 w-11/12 border border-gray-400 mt-10 rounded-xl`}>
                        <View style={tw `my-1 mx-2`}>
                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-1`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <AntDesign name="info" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-5 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>FAQs</Text>
                                    <TouchableOpacity>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-48`} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-5`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <MaterialIcons name="privacy-tip" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-8 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>Privacy Policy</Text>
                                    <TouchableOpacity>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-33`} />
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={tw `flex-row`}>
                                <View style={tw `h-12 w-12 bg-gray-200 rounded-lg mt-5`}>
                                    <View style={tw `items-center mt-2.5`}>
                                        <MaterialCommunityIcons name="account-details" size={24} color="black" />
                                    </View>
                                </View>

                                <View style={tw `flex-row mt-8 mx-3`}>
                                    <Text style={tw `font-bold text-sm`}>About</Text>
                                    <TouchableOpacity>
                                        <MaterialIcons name="navigate-next" size={22} color="black" style={tw `ml-46`} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default ProfileScreen;