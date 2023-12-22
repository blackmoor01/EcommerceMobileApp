import {View, Text, ScrollView, TouchableOpacity, FlatList} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import {useState} from "react";
import {RatingStars,FourRatingStars,ThreeRatingStars,TwoRatingStars,OneRatingStar} from "../../data";

const CategorySelect =()=>{
    const navigation = useNavigation();
    const handleLocation = ()=>{
        navigation.navigate("LocationPage")
    }
    const [rating, setRating] = useState(2.5);
    const onSliderValueChange = (value) => {
        setRating(value);
    };
    const minValue = 0;
    const maxValue = 1750;

    {/*A function for displaying the various category options available*/}
    const CategoryList = () => {
        const options = [
            {
                Txt:"Dresses"
            },
            {
                Txt:"Jackets"
            },
            {
                Txt:"Jeans"
            },
            {
                Txt:"Shoes"
            },
            {
                Txt:"Bags"
            },
            {
                Txt:"Clothes"
            },
            {
                Txt:"Pyjamas"
            },
            {
                Txt:"Shorts"
            },
            {
                Txt:"Tops"
            },
            {
                Txt:"Sneakers"
            },
            {
                Txt:"Cots"
            },
            {
                Txt:"Lingeries"
            }
        ]
        return(
            <View style={tw `mt-5`}>
                <FlatList data={options} numColumns={4} renderItem={({item,index})=>(
                    <TouchableOpacity>
                        <View style={tw `h-10 w-20 mr-3 bg-gray-500 rounded-xl mb-3`}>
                            <View>
                                <Text style={tw `font-bold text-center mt-2.5`}>{item.Txt}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                )}/>
            </View>
        )
    };

    {/*A function for displaying the sort by options available*/}
    const SortByOptions = () => {
        const Options = [
            {
                Txt:"New Today"
            },
            {
                Txt:"New This Week"
            },
            {
                Txt:"Top Sellers"
            }
        ]

        return(
            <View style={tw `items-center mt-5`}>
                <FlatList data={Options} showsHorizontalScrollIndicator={false} horizontal={true} renderItem={({item})=>(
                    <TouchableOpacity>
                        <View style={tw `h-12 w-28 bg-gray-500 mr-4 rounded-xl`}>
                            <Text style={tw `text-center mt-3.5`}>{item.Txt}</Text>
                        </View>
                    </TouchableOpacity>
                )}/>
            </View>
        )
    }
    return(
       <ScrollView showsVerticalScrollIndicator={false} style={tw `mx-2`}>
           <View style={tw `justify-between flex-row mt-8`}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
                   <View>
                       <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                   </View>
               </TouchableOpacity>

               <TouchableOpacity>
                   <View style={tw `bg-gray-100 h-10 w-10 rounded-full`}>
                       <View style={tw `items-center mt-1.5`}>
                           <EvilIcons name="search" size={35} color="black" />
                       </View>
                   </View>
               </TouchableOpacity>
           </View>

           {/*Function call to display the various categories we are to pick from*/}
           <CategoryList/>

           <Text style={tw `font-extrabold text-lg mt-5`}>Price Range</Text>

           {/*Slider for reading the various stages reached when toggled by a user*/}
           <View style={tw ``}>
               <View style={tw `items-center`}>
                   <Slider
                       minimumValue={minValue}
                       maximumValue={maxValue}
                       step={50}
                       style={tw `w-11/12`}
                       value={rating}
                       onValueChange={(value) => setRating(value)}
                   />
               </View>
               <View style={tw `flex-row`}>
                   <Text style={tw `ml-4 text-gray-400 font-bold`}>${minValue}</Text>
                   <Text style={tw `ml-30 font-bold`}>${rating.toFixed(2)}</Text>
                   <Text style={tw `ml-21 text-gray-400 font-bold`}>${maxValue}</Text>
               </View>
           </View>

           <View style={tw `mt-5`}>
               <Text style={tw `font-extrabold text-lg`}>Sort By</Text>
               <SortByOptions/>
               <Text style={tw `mt-5 font-extrabold text-lg`}>Rating</Text>
               <RatingStars/>
               <FourRatingStars/>
               <ThreeRatingStars/>
               <TwoRatingStars/>
               <OneRatingStar/>
           </View>
           <TouchableOpacity onPress={handleLocation}>
               <View style={tw `h-12 w-11/12 bg-black rounded-full mt-10`}>
                   <Text style={tw `text-white text-center mt-3.4`}>Apply Now</Text>
               </View>
           </TouchableOpacity>


       </ScrollView>
    )
};

export default CategorySelect;