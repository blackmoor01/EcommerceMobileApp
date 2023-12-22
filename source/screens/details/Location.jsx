import {View, Text, TouchableOpacity} from "react-native";
import MapView from "react-native-maps";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const Location = () => {
    const onRegionChange = (region) =>{
        console.log(region)

    };
    const navigation = useNavigation();
    return(
        <MapView style={tw `h-full w-full`} onRegionChange={onRegionChange} initialRegion={{"latitude": 6.002328398380709, "latitudeDelta": 1.320411176913498, "longitude": -0.1529825188281366, "longitudeDelta": 0.7695435274839042}
        }>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <View>
                    <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                </View>
            </TouchableOpacity>

            <View style={tw `items-center mt-5`}>
                <View style={tw `flex-row`}>
                    <TouchableOpacity><View style={tw `h-8 w-8 rounded-full bg-white mr-2`}></View></TouchableOpacity>
                    <Text style={tw `font-extrabold text-lg`}>Finding Collection Point</Text>
                    <TouchableOpacity><View style={tw `h-8 w-8 rounded-full bg-white ml-2`}></View></TouchableOpacity>
                </View>
            </View>

        </MapView>

    )
};

export default Location;