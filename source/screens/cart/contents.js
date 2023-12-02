import {View, Text, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native';
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {useNavigation} from "@react-navigation/native";

const CartContents = () => {
    const navigation = useNavigation()

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
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"Herschel Supply Co.",
                Txt2:"Daypack Backpack",
                Txt3:"$40.00"
            }
        ]
        return(
            <FlatList data={ImgLabels}
                      keyExtractor={(item, index)=>index.toString()}
                      horizontal={false}
                      renderItem={({item})=>(
                          <View style={tw `items-center mt-5`}>
                              <View style={tw `h-30 w-11/12 bg-white rounded-2xl`}>
                                  <View style={tw `flex-row`}>
                                      <Image source={item.Img} style={tw `h-20 w-25 mt-5 mx-2 rounded-xl`}/>

                                      <View style={tw `mt-3`}>
                                          <Text style={tw `font-bold text-lg`}>{item.Txt1}</Text>
                                          <Text>{item.Txt2}</Text>

                                          <View style={tw `mt-4 flex-row `}>
                                              <Text style={tw `font-bold text-lg`}>{item.Txt3}</Text>
                                              <View style={tw `bg-gray-200 h-7 w-25 flex-row items-center rounded-3xl justify-evenly mt-1 ml-7 mb-2`}>
                                                  <TouchableOpacity>
                                                      <Text style={tw `font-bold text-lg`}>-</Text>
                                                  </TouchableOpacity>

                                                  <Text style={tw `text-lg`}>1</Text>

                                                  <TouchableOpacity>
                                                      <Text style={tw `font-bold text-lg`}>+</Text>
                                                  </TouchableOpacity>
                                              </View>
                                          </View>
                                      </View>
                                  </View>
                              </View>
                          </View>
                      )} />
        )
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw `mx-2`}>
                <View style={tw `justify-between flex-row`}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <View>
                            <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={tw `bg-white h-10 w-10 rounded-full`}>
                            <View style={tw `items-center mt-1.5`}>
                                <SimpleLineIcons name="handbag" size={24} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={tw `font-bold text-xl mt-5`}>My Cart</Text>
                <ImageSlide/>

                <View style={tw `items-center mt-6`}>
                    <View style={tw `h-15 w-11/12  bg-gray-200 rounded-xl`}>
                        <View style={tw `flex-row justify-between mx-2 my-2.5`}>
                            <Text style={tw `mt-2 text-lg text-gray-500`}>Promo Code</Text>

                            <TouchableOpacity>
                                <View style={tw `h-10 w-20 bg-black rounded-xl`}>
                                    <Text style={tw `text-white font-bold text-lg text-center mt-1`}>Apply</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={tw `mt-4 flex-row justify-between`}>
                    <Text style={tw `font-bold text-gray-400`}>Total(3 item):</Text>
                    <Text style={tw `font-bold text-lg`}>$500</Text>
                </View>

                <View style={tw `items-center mt-6`}>
                    <View style={tw `h-15 w-11/12 bg-black rounded-xl`}>
                        <View style={tw `flex-row justify-between items-center mx-2`}>
                            <Text style={tw `font-bold text-white`}>Proceed to Checkout</Text>

                            <TouchableOpacity>
                                <View style={tw `h-10 w-10 rounded-xl bg-white mt-2`}>
                                    <View style={tw `items-center mt-2`}>
                                        <Ionicons name="arrow-forward-outline" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
};
export default CartContents;