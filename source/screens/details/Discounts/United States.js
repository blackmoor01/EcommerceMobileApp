import {View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import tw from "twrnc";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";


const UnitedStatesDiscounts = () => {
    const navigation = useNavigation();

    const handleCategorySelectionPage = () =>{
        navigation.navigate("CategorySelectionPage")
    }

    const DiscountOptions = () => {
        const discountLists = [
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            },
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            },
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            },
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            },
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            },
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            },
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            },
            {
                Img:require("../../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg")
            }
        ]
        return(
           <FlatList data={discountLists} showsVerticalScrollIndicator={false} renderItem={({item})=>(
               <TouchableOpacity onPress={handleCategorySelectionPage}>
                   <View style={tw `items-center`}>
                       <View style={tw `h-40 w-11/12 bg-gray-300 rounded-xl mb-3`}>
                           <ImageBackground source={item.Img} style={tw`h-40 w-12/12`} resizeMode={"contain"}/>
                       </View>
                   </View>
               </TouchableOpacity>
           )}/>
        )
    }
    return(
        <View style={tw `mx-2`}>
            <View style={tw ` mt-8`}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View>
                        <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={tw `font-extrabold text-lg mt-5 mb-5`}>Discount offers</Text>

            <DiscountOptions/>
        </View>
    )
};

export default UnitedStatesDiscounts;