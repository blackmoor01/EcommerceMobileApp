import {View, Text, ImageBackground} from 'react-native';
import tw from 'twrnc';


const SplashScreen = () => {
    return(
        <View>
            <ImageBackground source={require("../../assets/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model.jpg")}
                             style={tw `h-full w-100`}
            >
                <View style={tw `justify-center items-center mt-85`}>
                    <Text style={tw `text-gray-400 font-bold text-4xl`}>Fashions</Text>
                    <Text style={tw `text-gray-400 font-bold`}>My Life My Style</Text>
                </View>

            </ImageBackground>

        </View>
    )
};



export default SplashScreen;