import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import tw from 'twrnc';
import {useState} from "react";

const FrameIII = () => {
    const ListImageries = () => {
        const [currentImage, setCurrentImage] = useState(0)
        const imgList = [
            {
                Img:require("../../../assets/charming-girl-stands-street.jpg"),
                Txt1:"20% Discount",
                Txt2:"New Arrival Product",
                Txt3:"Publish up your selfies to make yourself",
                Txt4:"more beautiful with this app"

            },
            {
                Img:require("../../../assets/big-mama-plus-size-african-american-model-black-beret-leather-skirt-posed-outdoor.jpg"),
                Txt1:"Take Advantage",
                Txt2:"Of The Offer Shopping",
                Txt3:"Publish up your selfies to make yourself",
                Txt4:"more beautiful with this app"

            },
            {
                Img:require("../../../assets/job-work-handsome-walk-suit-laptop.jpg"),
                Txt1:"All Types Offers",
                Txt2:"Within Your Reach",
                Txt3:"Publish up your selfies to make yourself",
                Txt4:"more beautiful with this app"
            }
        ]
        return(
            <View>
                {imgList.map((option, index)=>(
                    <View key={index}>
                        <Image source={option.Img} resizeMode={"contain"} style={tw `h-80 w-85 rounded-xl`}/>
                        <Text style={tw `text-xl font-bold`}>{option.Txt1}</Text>
                        <Text style={tw `text-xl font-bold`}>{option.Txt2}</Text>
                        <Text>{option.Txt3}</Text>
                        <Text>{option.Txt4}</Text>
                    </View>
                ))}
            </View>

        )
    };





    return(
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ListImageries/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default FrameIII;
const styles = StyleSheet.create({
    picFrame:{
    }
})