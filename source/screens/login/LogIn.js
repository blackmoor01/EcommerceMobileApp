import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const LogInScreen = () => {
    return(
        <View>
            <ImageBackground source={require('../../../assets/beautiful-model-with-ponytail-makeup.jpg')} style={tw `h-full w-100`}>
                <View style={tw `justify-center items-center mt-[130%]`}>
                    <TouchableOpacity>
                        <View style={tw `bg-gray-300 rounded-3xl h-10 w-80 items-center`}>
                            <Text style={tw `mt-2 font-bold`}>Login</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw `mt-5`}>
                        <View style={tw `border-4 border-gray-300 rounded-3xl h-10 w-80 items-center`}>
                            <Text style={tw `mt-2 text-white font-bold`}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        </View>
    )
};

export default LogInScreen;