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
import {useState} from "react";

const HomeScreen = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

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
            {Img:require("../../assets/hand-holding-paper-bag.jpg")},
            {Img:require("../../assets/colorful-slip-unisex-streetwear-sneakers-fashion.jpg")},
            {Img:require("../../assets/sneaker-that-has-word-nike-it.jpg")},
            {Img:require("../../assets/black-cap-front-view-isolated.jpg")},
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
                            <ImageBackground source={item.Img} style={tw `h-40 w-65 rounded-3xl overflow-hidden`} />
                        </View>
                    )}
                />
            </View>
        )
    };

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
                           <ImageBackground source={item.Img} style={tw `h-50 w-40 overflow-hidden rounded-xl`}/>
                            <Text style={tw `font-extrabold`}>{item.Txt1}</Text>
                            <Text>{item.Txt2}</Text>
                            <Text style={tw `font-extrabold`}>{item.Txt3}</Text>
                        </View>
                    )}
                />
            </View>
        )
    };

    {/*Selects and Deselects upon pressing*/}
    const Selectables = () => {
        const categoryList = ["New Arrivals", "View All"]
        const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
        return(
            <View style={tw`mt-2 flex-row justify-between`}>
                {categoryList.map((minor,index)=>(
                    <Pressable key={index} onPress={()=>setSelectedCategoryIndex(index)}>
                        <Text style={[
                            minorCategoryListText,(index === selectedCategoryIndex && minorActiveCategoryListText )
                        ]}>{minor}</Text>
                    </Pressable>
                ))}
            </View>
        )
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw `mx-4 mt-10 `}>

                {/* Topmost section of the home page */}
                <View style={tw `flex-row justify-between`}>

                    {/* Right Topmost view */}
                    <TouchableOpacity>
                        <View style={tw `h-12 w-12 rounded-full bg-black`}>
                            <View style={tw `items-center mt-2.5`}>
                                <Ionicons name="menu-outline" size={24} color="white" />
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

                <View style={tw `mt-5`}>
                   <ImageCards/>
                    <Selectables/>
                    <MinorImageCards/>
                </View>

            </View>
        </ScrollView>
    )
};

export default HomeScreen;

const minorCategoryListText = tw``;
const minorActiveCategoryListText = tw`font-extrabold text-lg`