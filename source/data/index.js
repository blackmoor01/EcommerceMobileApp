import {View} from 'react-native';
import tw from 'twrnc';
import Entypo from "react-native-vector-icons/Entypo";


export const RatingStars = ()=>{
    return(
        <View style={tw `flex-row  mt-1`}>
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
        </View>
    )
};

export const FourRatingStars = () => {
    return(
        <View style={tw `flex-row  mt-3`}>
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
        </View>
    )
}

export const ThreeRatingStars = () => {
    return(
        <View style={tw `flex-row  mt-3`}>
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
        </View>
    )
}

export const TwoRatingStars = () => {
    return(
        <View style={tw `flex-row  mt-3`}>
            <Entypo name="star" size={18} color="orange" />
            <Entypo name="star" size={18} color="orange" />
        </View>
    )
}

export const OneRatingStar = () => {
    return(
        <View style={tw `flex-row  mt-3`}>
            <Entypo name="star" size={18} color="orange" />
        </View>
    )
}