import {View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, FlatList} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {RatingStars} from "../../data";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const CartScreen = () => {
    const navigation = useNavigation();
    const handleAddToCart = ()=>{
        navigation.navigate("CartContents")
    }

    {/* A function that displays the various sizes available */}
    const SizeList = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
        const sizes = [
            {Txt1:"S"},
            {Txt1:"M"},
            {Txt1:"L"},
            {Txt1:"XL"},
            {Txt1:"XXL"}
        ]
        return(
            <View>
                <FlatList data={sizes}
                          horizontal={true}
                          keyExtractor={(item, index)=>index.toString()}
                          showsHorizontalScrollIndicator={false}
                          renderItem={({item, index})=>(
                              <TouchableOpacity key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                                  <View style={[tw `h-15 w-15 mx-2 bg-white rounded-full mt-3 border border-gray-500`,(index === selectedCategoryIndex && minorActiveCategoryListText )]}>
                                      <View style={tw `items-center`}>
                                          <Text style={[tw `text-gray-400 font-bold text-lg mt-3 `]}>{item.Txt1}</Text>
                                      </View>
                                  </View>
                              </TouchableOpacity>
                          )}/>
            </View>
        )
    }

    return(

        <View style={tw `bg-white flex-1`}>
            {/* Topmost part of the cart page displaying an image background and its corresponding components.*/}
            <View>
                <ImageBackground source={require('../../../assets/studio-shot-amused-excited-good-looking-african-female-with-fair-curly-hair-smiling-dropping-jaw-from-amazement-holding-hands-cheeks-standing-thrilled-white-wall.jpg')}
                       style={tw `h-90 w-full `}
                >

                    <View style={tw `mx-2 my-2 flex-1`}>
                        <View style={tw `justify-between flex-row`}>
                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <View>
                                    <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={tw `bg-gray-100 h-10 w-10 rounded-full`}>
                                    <View style={tw `items-center mt-1.5`}>
                                        <SimpleLineIcons name="handbag" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={tw `absolute bottom-0 right-0`}>
                            <TouchableOpacity>
                                <View style={tw `bg-gray-100 h-10 w-10 rounded-full`}>
                                    <View style={tw `items-center mt-2.3`}>
                                        <AntDesign name="hearto" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </View>



            {/* Defining the second part of the view tied to the cart page*/}
                <ScrollView style={tw ``} showsVerticalScrollIndicator={false}>

                    <View style={tw ` bg-gray-100 rounded-xl`}>
                        <View style={tw `mx-2`}>
                            <View style={tw `flex-row justify-between`}>
                                <View>
                                    <Text style={tw `font-bold text-xl`}>Roller Rabbit</Text>
                                </View>

                                <View style={tw `bg-gray-200 h-10 w-25 flex-row items-center rounded-3xl justify-evenly mt-1`}>
                                    <TouchableOpacity>
                                        <Text style={tw `font-bold text-lg`}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={tw `text-lg`}>1</Text>

                                    <TouchableOpacity>
                                        <Text style={tw `font-bold text-lg`}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>



                            {/* Various text components rendered under various components*/}
                            <View>
                                <Text style={tw `text-gray-400`}>Vado Odelle Dress</Text>

                                <View style={tw `flex-row justify-between`}>
                                    <View style={tw `flex-row`}>
                                        <RatingStars/>
                                        <Text style={tw `mt-1 ml-2`}>(320 Reviews)</Text>
                                    </View>
                                    <View>
                                        <Text style={tw `font-bold mt-1`}>Available in stock</Text>
                                    </View>
                                </View>

                                <Text style={tw `font-bold text-lg mt-4`}>Size</Text>
                            </View>

                            <View>

                                <SizeList/>

                                <View style={tw `bg-white h-15 w-11/12 rounded-full mt-3 mx-4`}>

                                    <View style={tw `justify-evenly my-3 flex-row  `}>
                                        <TouchableOpacity>
                                            <View style={tw `bg-white border border-gray-500 h-10 w-10 rounded-full`}/>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View style={tw `bg-black border border-gray-500 h-10 w-10 rounded-full`}/>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View style={tw `bg-green-200 border border-gray-500 h-10 w-10 rounded-full`}/>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View style={tw `bg-orange-300 border border-gray-500 h-10 w-10 rounded-full`}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={tw `mt-4`}>
                                    <Text style={tw `font-bold text-lg`}>Description</Text>
                                    <Text style={tw `text-gray-500 mt-2 text-sm`}>Get a little lift from these San Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sale makes a fresh statement for summer</Text>

                                    <View style={tw `flex-row justify-between`}>
                                        <View style={tw `mt-10`}>
                                            <Text>Total Price</Text>
                                            <Text style={tw `font-bold text-lg`}>$198.00</Text>
                                        </View>

                                        <TouchableOpacity onPress={handleAddToCart} style={tw `mt-8`}>
                                            <View style={tw ` bg-black h-18 w-50 rounded-full`}>
                                                <View style={tw `flex-row justify-center mt-5 justify-evenly`}>
                                                    <SimpleLineIcons name="handbag" size={24} color="white" />
                                                    <Text style={tw `font-bold text-lg text-white`}>Add to cart</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </View>


            </View>
                </ScrollView>

        </View>
    )
};
export default CartScreen;
const minorActiveCategoryListText = tw`font-bold text-lg bg-black text-white`