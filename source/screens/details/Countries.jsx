import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';
import tw from "twrnc";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const CountryPage = () => {
    const navigation = useNavigation();
    const handleCanadaDiscounts = () => {
        navigation.navigate("CanadaDiscountsPage")
    }

    const handleUnitedKingdomDiscounts = () => {
        navigation.navigate("UnitedKingdomDiscountsPage")
    }

    const handleUnitedStatesDiscounts = () => {
        navigation.navigate("UnitedStatesDiscountsPage")
    }

    const handleBrazilDiscounts = () => {
        navigation.navigate("BrazilDiscountsPage")
    }

    const handleBangladeshDiscounts = () => {
        navigation.navigate("BangladeshDiscountsPage")
    }

    const handleGermanyDiscounts = () => {
        navigation.navigate("GermanyDiscountsPage")
    }

    const handlePortugalDiscounts = () => {
        navigation.navigate("PortgalDiscountsPage")
    }

    const handleZimbabweDiscounts = () => {
        navigation.navigate("ZimbabweDiscountsPage")
    }

    {/*A function that displays the diverse countries when called upon*/}
    const CountryLists = () => {
        const countryOptions = [
            {
                Txt:"Canada",
                Img:require("../../../assets/Canadian flag.png"),
                onPress:handleCanadaDiscounts
            },
            {
                Txt:"United Kingdom",
                Img:require("../../../assets/UK flag.jpeg"),
                onPress:handleUnitedKingdomDiscounts
            },
            {
                Txt:"United States",
                Img:require("../../../assets/USA flag.jpeg"),
                onPress:handleUnitedStatesDiscounts
            },
            {
                Txt:"Brazil",
                Img:require("../../../assets/Brazil flag.png"),
                onPress:handleBrazilDiscounts
            },
            {
                Txt:"Bangladesh",
                Img:require("../../../assets/Bangladesh flag.jpeg"),
                onPress:handleBangladeshDiscounts
            },
            {
                Txt:"Germany",
                Img:require("../../../assets/Germany flag.png"),
                onPress:handleGermanyDiscounts
            },
            {
                Txt:"Portugal",
                Img:require("../../../assets/Portugal flag.png"),
                onPress:handlePortugalDiscounts
            },
            {
                Txt:"Zimbabwe",
                Img:require("../../../assets/Zimbabwe flag.png"),
                onPress:handleZimbabweDiscounts
            }
        ]
        return(
            <FlatList data={countryOptions} renderItem={({item})=>(
                <TouchableOpacity onPress={item.onPress}>
                    <View style={tw`items-center`}>
                        <View style={[tw`h-15 w-11/12 bg-gray-100 rounded-xl mt-3`, styles.wrapper]}>
                            <View style={tw`mt-2 mx-2 flex-row justify-between`}>
                                <View style={tw`flex-row`}>

                                    {/*To be attended to!!!*/}
                                    <View style={tw`h-10 w-10 rounded-full bg-gray-300`}>
                                        <ImageBackground source={item.Img} style={tw`h-10 w-10 rounded-full`}/>
                                    </View>
                                    <Text style={tw`font-bold mt-2 ml-5`}>{item.Txt}</Text>
                                </View>
                                <View style={tw`h-5 w-5 rounded-full border border-gray-700 bg-gray-100 mt-2.5`}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
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

            <View style={tw `items-center mt-5`}>
                <View style={tw `h-12 w-11/12 border border-gray-500 rounded-full`}>
                    <View style={tw `flex-row mx-2 mt-2.5`}>
                        <EvilIcons name="search" size={30} color="black" />
                        <TextInput style={tw `flex-1`} placeholder={"Search country..."}/>
                    </View>
                </View>
            </View>

            <Text style={tw `font-extrabold text-lg mt-5`}>Country or Region</Text>

            <CountryLists/>

        </ScrollView>
    )
};


export default CountryPage;

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