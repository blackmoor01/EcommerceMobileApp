import {TouchableOpacity, View, Text, FlatList, ImageBackground} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const ClothesPage = () => {
    const navigation = useNavigation();

    const ImgCards = ()=> {
        const ImgList = [
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Roller Rabbit",
                Txt2:"Vado Odelle Dress",
                Txt3:"$198.00"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Endless Rose",
                Txt2:"Bubble Elastic T-shirt",
                Txt3:"$50.00"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Theory",
                Txt2:"Irregular Rib Skirt",
                Txt3:"$345.00"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Madewel",
                Txt2:"Giselle Top in White Linen",
                Txt3:"$69.50"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Madewel",
                Txt2:"Giselle Top in white Linen",
                Txt3:"$69.50"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Madewel",
                Txt2:"Giselle Top in white Linen",
                Txt3:"$69.50"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Madewel",
                Txt2:"Giselle Top in white Linen",
                Txt3:"$69.50"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Madewel",
                Txt2:"Giselle Top in white Linen",
                Txt3:"$69.50"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Madewel",
                Txt2:"Giselle Top in white Linen",
                Txt3:"$69.50"
            },
            {
                Img:require("../../../assets/beautiful-shot-black-purse-white-table-with-pink.jpg"),
                Txt1:"Madewel",
                Txt2:"Giselle Top in white Linen",
                Txt3:"$69.50"
            },
        ]
        return(
            <FlatList
                data={ImgList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                <View style={tw `h-45 w-40 bg-gray-200 rounded-lg mb-18 mx-3 mt-5`}>
                    <ImageBackground source={item.Img} style={tw `h-45 w-40 rounded-lg overflow-hidden`} resizeMode={"cover"}>
                        <TouchableOpacity>
                            <View style={tw `bg-black h-10 w-10 rounded-full mx-4 my-4 ml-24`}>
                                <View style={tw `items-center mt-2.3`}>
                                    <AntDesign name="hearto" size={24} color="white" style={tw `items-center`} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View>
                        <Text style={tw `font-bold text-lg text-center`}>{item.Txt1}</Text>
                        <Text style={tw `text-center text-gray-500`}>{item.Txt2}</Text>
                        <Text style={tw `font-bold text-lg text-center`}>{item.Txt3}</Text>
                    </View>

                </View>
            )}/>
        )
    }

    return(
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
                            <EvilIcons name="search" size={35} color="black" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={tw `font-bold text-xl mt-3`}>Clothes</Text>
            <ImgCards/>

        </View>
    )
};

export default ClothesPage;