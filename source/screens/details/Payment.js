import {View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, FlatList} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const PaymentDetails = () => {
    const navigation = useNavigation();

    const handleAddPaymentOption = ()=>{
        navigation.navigate("AddPaymentOption")
    }

    {/*Function that displays the various collection category.*/}
    const HistoryCollection = ()=>{
        const historyContent =[
            {
                Txt1:"Roller Rabbit",
                Txt2:"Vado Odelle Dress",
                Txt3:"$198.00"
            },
            {
                Txt1:"Axel Arigato",
                Txt2:"Clean 90 Triole Sneakers",
                Txt3:"$245.00"
            },
            {
                Txt1:"Herschel Supply Co.",
                Txt2:"Daypack Backpack",
                Txt3:"$40.00"
            },
            {
                Txt1:"The Pullover",
                Txt2:"Vado Odelle Dress",
                Txt3:"$150.00"
            }
        ]
        return(
            <FlatList data={historyContent} renderItem={({item})=>(
                <View style={tw `items-center`}>
                    <View style={[tw`h-20 w-11/12 bg-gray-100 rounded-xl mt-3`, styles.wrapper]}>
                        <View style={tw `mt-3 mx-2 flex-row`}>
                            <View style={tw `h-14 w-20 bg-gray-300 rounded-xl`}>

                            </View>
                            <View style={tw `ml-2`}>
                                <Text style={tw `font-bold text-sm`}>{item.Txt1}</Text>
                                <Text>{item.Txt2}</Text>
                                <Text style={tw `font-extrabold ml-40`}>{item.Txt3}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}/>
        )
    };

    {/*Function to display the diverse payment options available*/}
    const PaymentOptions = ()=> {
            const paymentsLists = [
                {
                    Txt: "Credit Card"
                },
                {
                    Txt: "Paypal"
                },
                {
                    Txt: "Visa"
                },
                {
                    Txt: "Google Play"
                }
            ]
            return (
                <FlatList data={paymentsLists} renderItem={({item}) => (
                    <TouchableOpacity>
                        <View style={tw`items-center`}>
                            <View style={[tw`h-15 w-11/12 bg-gray-100 rounded-xl mt-3`, styles.wrapper]}>
                                <View style={tw`mt-2 mx-2 flex-row justify-between`}>
                                    <View style={tw`flex-row`}>
                                        <View style={tw`h-10 w-10 rounded-full bg-gray-300`}>

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
    ;
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


            {/*Function call to display the list of payment options available*/}
            <PaymentOptions/>

            {/*This allows a user another card details*/}
            <TouchableOpacity onPress={handleAddPaymentOption}>
                <View style={tw `items-center mt-5`}>
                    <View style={tw `h-15 w-11/12 bg-gray-100 rounded-xl border-dashed border-black border`}>
                        <View style={tw `items-center mt-2`}>
                            <View style={tw `h-10 w-10 bg-gray-100 rounded-full border border-gray-500`}>
                                <Text style={tw `font-bold text-xl text-center mt-1`}>+</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <Text style={tw `font-extrabold text-lg mt-5`}>History</Text>

            <HistoryCollection/>





        </ScrollView>
    )
};

export default PaymentDetails;

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