import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    FlatList,
    Pressable
} from 'react-native';
import tw from 'twrnc';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const navigation = useNavigation();
    const handleCategoriesMenu = () => {
        navigation.navigate("CategoriesMenu")
    }

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleTextChange = (text) => {
        setInputValue(text);
    };

    {/*A function for carded image display*/}
    const ImageCards = () =>{
        {/*Array containing list of carded images*/}
        const imgList =[
            {
                Img:require("../../assets/hand-holding-paper-bag.jpg"),
                Txt1:"50% off",
                Txt2:"On everything today",
                Txt3:"With code:FSCREATION",
                Txt4:"Get Now"
            },
            {
                Img:require("../../assets/colorful-slip-unisex-streetwear-sneakers-fashion.jpg"),
                Txt1:"70% off",
                Txt2:"On everything today",
                Txt3:"With code:FSCREATION",
                Txt4:"Get Now"
            },
            {
                Img:require("../../assets/sneaker-that-has-word-nike-it.jpg"),
                Txt1:"70% off",
                Txt2:"On everything today",
                Txt3:"With code:FSCREATION",
                Txt4:"Get Now"
            },
            {
                Img:require("../../assets/black-cap-front-view-isolated.jpg"),
                Txt1:"70% off",
                Txt2:"On everything today",
                Txt3:"With code:FSCREATION",
                Txt4:"Get Now"
            },
        ]
        return(
            <View>
                <FlatList
                    data={imgList}
                    horizontal={true} // Enable horizontal scrolling
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={tw `bg-gray-500 h-40 w-65 rounded-3xl mx-2`}>
                            <ImageBackground source={item.Img} style={tw `h-40 w-65 rounded-3xl overflow-hidden`}>
                                <View style={tw `ml-4 mt-2`}>
                                    <Text style={tw `font-extrabold text-2xl`}>{item.Txt1}</Text>
                                    <Text style={tw `text-lg`}>{item.Txt2}</Text>
                                    <Text style={tw `text-lg text-gray-700`}>{item.Txt3}</Text>

                                    <TouchableOpacity>
                                        <View style={tw `bg-black h-10 w-20 rounded-3xl mt-4`}>
                                            <View style={tw `items-center mt-2.5`}>
                                                <Text style={tw `text-white`}>{item.Txt4}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                    )}
                />
            </View>
        )
    };

    {/* Function that renders the text component under the image cards */}
    const MinorImageCards = () => {
        const imgList = [
            {
                Img:require("../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"The Marc Jobs",
                Txt2:"Traveler Tote",
                Txt3:"$195.00"
            },
            {
                Img:require("../../assets/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative.jpg"),
                Txt1:"Axel Arigato",
                Txt2:"Clean 90 Triple Sneakers",
                Txt3:"$245.00"
            }
        ]
        return(
            <View>
                <FlatList
                    horizontal={true}
                    data={imgList}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index})=>(
                        <View style={tw `mx-2 mt-3`}>
                           <ImageBackground source={item.Img} style={tw `h-50 w-40 overflow-hidden rounded-xl`}>
                               <TouchableOpacity>
                                   <View style={tw `items-center ml-21 mt-5`}>
                                       <View style={tw `bg-black h-7 w-7 rounded-full`}>
                                           <View style={tw `items-center mt-2`}>
                                               <AntDesign name="heart" size={15} color="white"/>
                                           </View>
                                       </View>
                                   </View>
                               </TouchableOpacity>
                           </ImageBackground>
                            <Text style={tw `font-extrabold`}>{item.Txt1}</Text>
                            <Text>{item.Txt2}</Text>
                            <Text style={tw `font-extrabold`}>{item.Txt3}</Text>
                        </View>
                    )}
                />
            </View>
        )
    };


    const SizeList = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
        const sizes = [
            {Txt1:"Dresses"},
            {Txt1:"Jackets"},
            {Txt1:"Jeans"},
            {Txt1:"Shoes"},

        ]
        return(
            <View>
                <FlatList data={sizes}
                          horizontal={true}
                          keyExtractor={(item, index)=>index.toString()}
                          showsHorizontalScrollIndicator={false}
                          renderItem={({item, index})=>(
                              <TouchableOpacity key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                                  <View style={[tw `h-10 w-20 mx-2 bg-white rounded-3xl mt-3 border border-gray-500`,(index === selectedCategoryIndex && minorActiveCategoryListText )]}>
                                      <View style={tw `items-center`}>
                                          <Text style={[tw `text-gray-400 font-bold text-lg mt-1.5 `]}>{item.Txt1}</Text>
                                      </View>
                                  </View>
                              </TouchableOpacity>
                          )}/>
            </View>
        )
    };

    const PopularList = ()=> {
        const popularLists = [
            {
                Img:require("../../assets/women-s-red-high-heel-shoes-formal-fashion.jpg"),
                Txt1:"Gia Borghini",
                Txt2:"RHW Rosie 1 sandals",
                Txt3:"(4.5)"

            },
            {
                Img:require("../../assets/women-s-red-high-heel-shoes-formal-fashion.jpg"),
                Txt1:"Gia Borghini",
                Txt2:"RHW Rosie 1 sandals",
                Txt3:"(4.5)"

            },
            {
                Img:require("../../assets/women-s-red-high-heel-shoes-formal-fashion.jpg"),
                Txt1:"Gia Borghini",
                Txt2:"RHW Rosie 1 sandals",
                Txt3:"(4.5)"

            },
            {
                Img:require("../../assets/women-s-red-high-heel-shoes-formal-fashion.jpg"),
                Txt1:"Gia Borghini",
                Txt2:"RHW Rosie 1 sandals",
                Txt3:"(4.5)"

            },
            {
                Img:require("../../assets/women-s-red-high-heel-shoes-formal-fashion.jpg"),
                Txt1:"Gia Borghini",
                Txt2:"RHW Rosie 1 sandals",
                Txt3:"(4.5)"
            },
            {
                Img:require("../../assets/women-s-red-high-heel-shoes-formal-fashion.jpg"),
                Txt1:"Gia Borghini",
                Txt2:"RHW Rosie 1 sandals",
                Txt3:"(4.5)"
            },
            {
                Img:require("../../assets/women-s-red-high-heel-shoes-formal-fashion.jpg"),
                Txt1:"Gia Borghini",
                Txt2:"RHW Rosie 1 sandals",
                Txt3:"(4.5)"
            },
        ]
        return(
            <FlatList
                data={popularLists}
                renderItem={({item})=>(
                    <View style={tw `items-center`}>
                        <View style={tw `h-20 w-11/12 bg-gray-200 my-2 rounded-xl`}>
                            <View style={tw `flex-row`}>
                                <Image source={item.Img} style={tw `h-15 w-20 rounded-xl mt-2.5 mx-2`} />
                                <View style={tw `mt-2.5`}>
                                    <Text style={tw `font-extrabold text-lg`}>{item.Txt1}</Text>
                                    <Text>{item.Txt2}</Text>
                                    <Text style={tw `font-extrabold text-lg`}>{item.Txt3}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}/>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw `mx-4 mt-10 `}>

                {/* Topmost section of the home page */}
                <View style={tw `flex-row justify-between`}>

                    {/* Right Topmost view */}
                    <TouchableOpacity onPress={handleCategoriesMenu}>
                        <View style={tw `h-12 w-12 rounded-full bg-black`}>
                            <View style={tw `items-center mt-2.5`}>
                                <Ionicons name="menu-outline" size={24} color="white"/>
                            </View>
                        </View>
                    </TouchableOpacity>

                        {/* Left Topmost view */}
                    <TouchableOpacity>
                        <View style={tw `h-12 w-12 rounded-full bg-blue-300`}>
                            <Image source={require("../../assets/fashion-boy-with-yellow-jacket-blue-pants.jpg")} resizeMode={"contain"} style={tw `h-12 w-12 rounded-full`}/>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Welcome text component */}
                <View style={tw `mt-7`}>
                    <Text style={tw `font-extrabold text-2xl`}>Welcome,</Text>
                    <Text style={tw `mt-1 text-gray-400 text-lg font-semibold`}>Our Fashions App</Text>
                </View>


                {/* Text input field */}
                <View style={tw `mt-4 flex-row justify-between`}>

                    <View style={tw `bg-gray-100 h-12 w-65 rounded-full`}>
                        <View style={tw `flex-row ml-5 mt-2`}>
                            {!inputValue && !isFocused && <Ionicons name="search-outline" size={24} color="gray" />}
                            <TextInput
                                placeholder={!isFocused ? 'Search...' : ''}
                                value={inputValue}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChangeText={handleTextChange}
                                style={tw `flex-1 mt-2`}
                            />
                        </View>
                    </View>

                    {/* Accompanying icon that comes alongside the search feature*/}
                    <TouchableOpacity>
                        <View style={tw `h-12 w-12 rounded-full bg-black mx-2`}>
                            <View style={tw `items-center mt-3`}>
                                <MaterialCommunityIcons name="format-list-text" size={24} color="white" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={tw `mt-5 items-center`}>
                    <View style={tw `h-30 w-11/12 bg-gray-200 rounded-xl`}>
                        <View style={tw `flex-row`}>
                            <View style={tw ` mt-2.4 mx-2`}>
                                <Image
                                    source={require("../../assets/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative.jpg")}
                                    style={tw `h-25 w-28 bg-gray-700 rounded-xl`}
                                />
                            </View>
                            <View style={tw `mt-6`}>
                                <Text style={tw `font-bold text-lg`}>Axel Arigato</Text>
                                <Text>Clean 90 Triple Sneakers</Text>
                                <Text style={tw `font-bold text-lg`}>$245.00</Text>
                            </View>
                            <View style={tw `h-8 w-10 bg-black rounded-lg absolute bottom-0 left-66`}>
                                <Ionicons name="chevron-forward-sharp" size={24} color="white" style={tw `ml-1.5 mt-0.5`} />
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={tw `font-extrabold text-xl mt-5`}>Categories</Text>
                    <SizeList/>
                </View>

                <View style={tw `mt-5`}>
                   <ImageCards/>
                    <MinorImageCards/>
                    <MinorImageCards/>
                    <MinorImageCards/>
                    <PopularList/>
                </View>

            </View>
        </ScrollView>
    )
};

export default HomeScreen;
const minorActiveCategoryListText = tw`font-bold text-lg bg-black text-white`