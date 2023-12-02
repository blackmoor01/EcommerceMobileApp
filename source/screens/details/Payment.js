import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const PaymentDetails = () => {
    const navigation = useNavigation();
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


        </ScrollView>
    )
};

export default PaymentDetails;