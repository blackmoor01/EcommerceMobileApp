import {View, Text, TouchableOpacity, FlatList, StyleSheet, Image, ScrollView} from 'react-native';
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const Shipment = () => {
    const navigation = useNavigation();
    const handlePlaceOrder = ()=>{
        navigation.navigate("OrderPage")
    }

    const ImageSlide = () => {
        const ImgLabels = [
            {
                Img:require("../../../assets/studio-shot-amused-excited-good-looking-african-female-with-fair-curly-hair-smiling-dropping-jaw-from-amazement-holding-hands-cheeks-standing-thrilled-white-wall.jpg"),
                Txt1:"Roller Rabbit",
                Txt2:"Vado Odelle Dress",
                Txt3:"$198.00"
            },
            {
                Img:require("../../../assets/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative.jpg"),
                Txt1:"Axel Arigato",
                Txt2:"Clean 90 Triole Sneakers",
                Txt3:"$245.00"
            },
        ]
        return(
            <FlatList data={ImgLabels}
                      keyExtractor={(item, index)=>index.toString()}
                      horizontal={false}
                      renderItem={({item})=>(
                          <TouchableOpacity>
                              <View style={tw `items-center mt-5`}>
                                  <View style={[tw `h-25 w-11/12 bg-white rounded-2xl`,styles.wrapper]}>
                                      <View style={tw `flex-row`}>
                                          <Image source={item.Img} style={tw `h-20 w-25 mt-2.5 mx-2 rounded-xl`}/>

                                          <View style={tw `mt-3`}>
                                              <Text style={tw `font-bold text-lg`}>{item.Txt1}</Text>
                                              <Text>{item.Txt2}</Text>
                                              <Text style={tw `mt-2 font-bold text-lg`}>{item.Txt3}</Text>
                                          </View>
                                      </View>
                                  </View>
                              </View>
                          </TouchableOpacity>
                      )} />
        )
    };

    const ShipmentDetails = () => {
        const deliveryDetails = [
            {
                Txt1:"Street: ",
                Txt2:"GW-0510-2380"
            },
            {
                Txt1:"City: ",
                Txt2:"Accra"
            },
            {
                Txt1:"State/Province/Area: ",
                Txt2:"Amasaman"
            },
            {
                Txt1:"Phone number: ",
                Txt2:"0553314166"
            },
            {
                Txt1:"Zip Code: ",
                Txt2:"95814"
            },
            {
                Txt1:"Country Calling Code: ",
                Txt2:"+233"
            },
            {
                Txt1:"Country: ",
                Txt2:"Ghana"
            }
        ]
        return(
            <FlatList data={deliveryDetails} renderItem={({item})=>(
                <View style={tw `flex-row mt-3 mx-4`}>
                    <Text style={tw `font-extrabold`}>{item.Txt1}</Text>
                    <Text>{item.Txt2}</Text>

                </View>
            )}/>
        )
    };

    return(
        <ScrollView>
            <View style={tw `mx-2`}>
                <View style={tw `flex-row mt-8`}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <View>
                            <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={tw `font-extrabold text-lg mt-5`}>Delivery Address</Text>

                <View style={tw `items-center mt-5`}>
                    <View style={[tw `h-55 w-11/12 rounded-xl bg-gray-100`,styles.wrapper]}>
                        <ShipmentDetails/>
                    </View>
                </View>

                <Text style={tw `font-extrabold mt-5 text-lg`}>Product Item</Text>

                <ImageSlide/>

                <Text style={tw `font-extrabold text-lg mt-5`}>Promo Code</Text>

                <TouchableOpacity>
                    <View style={tw `items-center mt-5`}>
                        <View style={[tw `h-20 w-11/12 bg-gray-100 rounded-xl`,styles.wrapper]}>
                            <View style={tw `mx-2 flex-row`}>
                                <View style={tw `h-15 w-15 bg-black rounded-xl mt-2.5`}>
                                    <View style={tw `items-center mt-4.5`}>
                                        <SimpleLineIcons name="magic-wand" size={24} color="white" />
                                    </View>
                                </View>
                                <View style={tw `justify-center ml-4`}>
                                    <Text style={tw `font-extrabold`}>Add Promo Code</Text>
                                    <Text style={tw `mt-2 text-gray-500`}>#rika2023</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={tw `mt-5 flex-row justify-between`}>
                    <View>
                        <Text style={tw `text-gray-500 font-extrabold`}>Total Price</Text>
                        <Text style={tw `font-extrabold text-lg`}>$443.00</Text>
                    </View>
                    <TouchableOpacity onPress={handlePlaceOrder}>
                        <View style={tw `h-10 w-30 bg-black rounded-full`}>
                            <Text style={tw `text-white text-center mt-2.5`}>Place Order</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
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

export default Shipment;