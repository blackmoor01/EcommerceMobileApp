import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";

const CategoriesMenu = () => {
    const navigation = useNavigation();

    const handleSearch = () => {
        navigation.navigate("SearchDetailsPage")
    };


    {/*This function displays all the category tabs*/}
    const CategoriesList = () => {

        {/* Routing for various category tabs*/}
        const handleToNewArrivals = () => {
            navigation.navigate("NewArrivalsPage")
        };

        const handleToClothes = () => {
            navigation.navigate("ClothesPage")
        };

        const handleToBags = () => {
            navigation.navigate("BagsPage")
        };

        const handleToShoes = () => {
            navigation.navigate("ShoesPage")
        };

        const handleToElectronics = () => {
            navigation.navigate("ElectronicsPage")
        };

        const handleToJewelry = () => {
            navigation.navigate("JewelryPage")
        };

        const categoryLists = [
            {
                Type:"FontAwesome5",
                Icon:"cart-arrow-down",
                Txt1:"New Arrivals",
                Txt2:"208 Products",
                onPress:handleToNewArrivals
            },
            {
                Type:"Ionicons",
                Icon:"shirt-outline",
                Txt1:"Clothes",
                Txt2:"358 Products",
                onPress:handleToClothes
            },
            {
                Type:"SimpleLineIcons",
                Icon:"handbag",
                Txt1:"Bags",
                Txt2:"160 Products",
                onPress:handleToBags
            },
            {
                Type:"MaterialCommunityIcons",
                Icon:"shoe-sneaker",
                Txt1:"Shoes",
                Txt2:"230 Products",
                onPress:handleToShoes
            },
            {
                Type:"MaterialIcons",
                Icon:"devices",
                Txt1:"Electronics",
                Txt2:"130 Products",
                onPress:handleToElectronics
            },
            {
                Type:"MaterialCommunityIcons",
                Icon:"necklace",
                Txt1:"jewelry",
                Txt2:"87 Products",
                onPress:handleToJewelry
            }
        ]
        return(
            <FlatList data={categoryLists}
                     //keyExtractor={({item,index})=>index.toString()}
                      renderItem={({item})=>(
                          <View style={tw `mt-2`}>
                              <TouchableOpacity onPress={item.onPress}>
                                  <View style={tw `h-15 w-11/12 bg-black rounded-full mb-4 mx-4`}>
                                      <View style={tw `mx-4 flex-row justify-between items-center mt-4`}>
                                          <View style={tw `flex-row`}>
                                              {item.Type === 'FontAwesome5' && (
                                                  <FontAwesome5 name={item.Icon} size={24} color="white" />
                                              )}
                                              {item.Type === 'Ionicons' && (
                                                  <Ionicons name={item.Icon} size={24} color="white" />
                                              )}
                                              {item.Type === 'SimpleLineIcons' && (
                                                  <SimpleLineIcons name={item.Icon} size={24} color="white" />
                                              )}
                                              {item.Type === 'MaterialCommunityIcons' && (
                                                  <MaterialCommunityIcons name={item.Icon} size={30} color="white" />
                                              )}
                                              {item.Type === 'MaterialIcons' && (
                                                  <MaterialIcons name={item.Icon} size={25} color="white" />
                                              )}
                                              <Text style={tw `text-white mt-1 ml-3`}>{item.Txt1}</Text>
                                          </View>
                                          <View>
                                              <Text style={tw `text-white`}>{item.Txt2}</Text>
                                          </View>
                                      </View>

                                  </View>
                              </TouchableOpacity>
                          </View>
                      )}/>
        )
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={tw `mx-2`}>
                <View style={tw `justify-between flex-row mt-8`}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <View>
                            <Ionicons name="arrow-back-circle-sharp" size={45} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSearch}>
                        <View style={tw `bg-gray-100 h-10 w-10 rounded-full`}>
                            <View style={tw `items-center mt-1.5`}>
                                <EvilIcons name="search" size={35} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={tw `font-bold text-xl mt-5`}>Categories</Text>

                <CategoriesList/>

            </View>
        </ScrollView>
    )
};

export default CategoriesMenu;