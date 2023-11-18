import {View, Text, TouchableOpacity, TextInput, FlatList, Image, ImageBackground} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import tw from "twrnc";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigationState} from "@react-navigation/native";

const SearchDetailsPage = () => {
    const navigation = useNavigation();

    const ImgCards = ()=> {
        {/* Routing for various category tabs*/}
        const handleToNewArrivals = () => {
            navigation.navigate("NewArrivalsPage")
        };

        const handleToClothes = () => {
            navigation.navigate("ClothesPage")
        };

        const handleToBags = () => {
            navigation.navigate("BagsPage")
        };

        const handleToShoes = () => {
            navigation.navigate("ShoesPage")
        };

        const handleToElectronics = () => {
            navigation.navigate("ElectronicsPage")
        };

        const handleToJewelry = () => {
            navigation.navigate("JewelryPage")
        };
        const ImgList = [
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"New Arrivals",
                Txt2:"208 Products",
                onPress:handleToNewArrivals
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"Clothes",
                Txt2:"358 Products",
                onPress:handleToClothes
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"Bags",
                Txt2:"160 Products",
                onPress:handleToBags
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"Shoes",
                Txt2:"230 Products",
                onPress:handleToShoes
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"Electronics",
                Txt2:"130 Products",
                onPress:handleToElectronics
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"Jewelry",
                Txt2:"87 Products",
                onPress:handleToJewelry
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"New Arrivals",
                Txt2:"208 Products"
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"New Arrivals",
                Txt2:"208 Products"
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"New Arrivals",
                Txt2:"208 Products"
            },
            {
                Img:require("../../../assets/3476.jpg"),
                Txt1:"New Arrivals",
                Txt2:"208 Products"
            },
        ]

        return(
            <FlatList
                data={ImgList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                <View style={tw `h-45 w-40 bg-gray-200 rounded-lg mb-4 mx-3`}>
                    <TouchableOpacity onPress={item.onPress}>
                        <ImageBackground source={item.Img} style={tw `h-45 w-40 rounded-lg overflow-hidden`} resizeMode={"cover"}>
                            <View style={tw `h-15 w-full bg-gray-400 bg-opacity-50 absolute bottom-0 rounded-xl`}>
                                <Text style={tw `font-extrabold text-center text-lg`}>{item.Txt1}</Text>
                                <Text style={tw `text-center font-bold`}>{item.Txt2}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            )}/>
        )
    }
    return(
        <View style={tw `mx-2 flex-1`}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <View>
                    <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                </View>
            </TouchableOpacity>

            <View style={tw `items-center mt-10 mb-5`}>
                <View style={tw `h-14 w-11/12 bg-gray-200 rounded-full`}>
                    <View style={tw `mx-4 flex-row mt-4 flex-1`}>
                        <EvilIcons name="search" size={24} color="black" />
                        <TextInput placeholder={"Search Categories"} style={tw `mb-4`}/>
                    </View>
                </View>
            </View>

            <ImgCards/>

        </View>
    )
};

export default SearchDetailsPage;