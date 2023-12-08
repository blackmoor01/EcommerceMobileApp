import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback, StyleSheet
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const AddPaymentOption = () => {
    const navigation = useNavigation();
    const handleConfirm = () => {
        navigation.navigate("CountrySelectionPage")
    }

    {/*A function that displays the text input column to enter the corresponding credentials*/}

    const CardDetails = () =>{
        const cardText = [
            {
                Txt:"Card Number"
            },
            {
                Txt:"Exp. date"
            },
            {
                Txt:"CVV"
            }

        ]
        return(
            <FlatList data={cardText} renderItem={({item})=>(
                <KeyboardAvoidingView>
                    <View style={tw `mt-5 items-center`}>
                        <View style={[tw `h-15 w-11/12 border border-gray-500 rounded-xl mb-4`,styles.wrapper]}>
                            <TextInput placeholder={item.Txt} style={tw `mx-4 mt-4.8`}/>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            )}/>
        )
    };


    return(
        <ScrollView showsVerticalScrollIndicator={false} style={tw `mx-2`}>
            <View style={tw `mt-8`}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View>
                        <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={tw `font-extrabold text-lg mt-5`}>Payment</Text>

            <TouchableWithoutFeedback>
                <View style={tw `items-center mt-10`}>
                    <Image source={require("../../../assets/ales-nesetril-ex_p4AaBxbs-unsplash.jpg")} style={tw `h-70 w-11/12 rounded-xl`}/>
                </View>
            </TouchableWithoutFeedback>

            <Text style={tw `font-extrabold text-lg mt-5`}>Card Details</Text>

            <CardDetails/>

            <View style={tw `flex-row justify-between mt-5`}>
                <TouchableOpacity>
                    <Text style={tw `text-lg text-gray-400 font-bold`}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleConfirm} >
                    <View style={tw `h-10 w-25 bg-black rounded-xl`}>
                        <Text style={tw `text-white font-bold text-center mt-2.5`}>Confirm</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </ScrollView>
    )
};

export default AddPaymentOption;

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