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
import Shipment from "../screens/details/Shipment";
import OrderDetails from "../screens/details/Order";
import PaymentDetails from "../screens/details/Payment";
import AddPaymentOption from "../screens/details/Payment_Add";
import CountryPage from "../screens/details/Countries";
import CanadaDiscounts from "../screens/details/Discounts/Canada";
import UnitedKingdomDiscounts from "../screens/details/Discounts/United Kingdom";
import UnitedStatesDiscounts from "../screens/details/Discounts/United States";
import BrazilDiscounts from "../screens/details/Discounts/Brazil";
import BangladeshDiscounts from "../screens/details/Discounts/Bangladesh";
import GermanyDiscounts from "../screens/details/Discounts/Germany";
import PortugalDiscounts from "../screens/details/Discounts/Portugal";
import ZimbabweDiscounts from "../screens/details/Discounts/Zimbabwe";
import CategorySelect from "../screens/details/CategorySelect";
import Location from "../screens/details/Location";

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
                <Stack.Screen name={"ShipmentPage"} component={Shipment} options={{headerShown:false}}/>
                <Stack.Screen name={"OrderPage"} component={OrderDetails} options={{headerShown:false}}/>
                <Stack.Screen name={"PaymentPage"} component={PaymentDetails} options={{headerShown:false}}/>
                <Stack.Screen name={"AddPaymentOption"} component={AddPaymentOption} options={{headerShown:false}}/>
                <Stack.Screen name={"CountrySelectionPage"} component={CountryPage} options={{headerShown:false}}/>
                <Stack.Screen name={"CanadaDiscountsPage"} component={CanadaDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"UnitedKingdomDiscountsPage"} component={UnitedKingdomDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"UnitedStatesDiscountsPage"} component={UnitedStatesDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"BrazilDiscountsPage"} component={BrazilDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"BangladeshDiscountsPage"} component={BangladeshDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"GermanyDiscountsPage"} component={GermanyDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"PortugalDiscountsPage"} component={PortugalDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"ZimbabweDiscountsPage"} component={ZimbabweDiscounts} options={{headerShown:false}}/>
                <Stack.Screen name={"CategorySelectionPage"} component={CategorySelect} options={{headerShown:false}}/>
                <Stack.Screen name={"LocationPage"} component={Location} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainStackNavigator;