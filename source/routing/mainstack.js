import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartContents from "../screens/cart/contents";
import {NavigationContainer} from "@react-navigation/native";
import MainTabNavigator from "./maintab";
import CategoriesMenu from "../screens/categories";
import NewArrivalsPage from "../screens/details/NewArrivals";
import ClothesPage from "../screens/details/Clothes";
import BagsPage from "../screens/details/Bags";
import ShoesPage from "../screens/details/Shoes";
import ElectronicsPage from "../screens/details/Electronics";
import JewelryPage from "../screens/details/Jewelry";
import SearchDetailsPage from "../screens/details/Search";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"MainTabNavigator"} component={MainTabNavigator} options={{headerShown:false}}/>
                <Stack.Screen name="CartContents" component={CartContents} options={{headerShown:false}} />
                <Stack.Screen name={"CategoriesMenu"} component={CategoriesMenu} options={{headerShown:false}}/>
                <Stack.Screen name={"NewArrivalsPage"} component={NewArrivalsPage} options={{headerShown:false}}/>
                <Stack.Screen name={"ClothesPage"} component={ClothesPage} options={{headerShown:false}}/>
                <Stack.Screen name={"BagsPage"} component={BagsPage} options={{headerShown:false}}/>
                <Stack.Screen name={"ShoesPage"} component={ShoesPage} options={{headerShown:false}}/>
                <Stack.Screen name={"ElectronicsPage"} component={ElectronicsPage} options={{headerShown:false}}/>
                <Stack.Screen name={"JewelryPage"} component={JewelryPage} options={{headerShown:false}}/>
                <Stack.Screen name={"SearchDetailsPage"} component={SearchDetailsPage} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainStackNavigator;