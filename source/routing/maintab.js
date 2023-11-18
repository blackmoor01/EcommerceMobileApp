import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons  from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/Home";
import CartScreen from "../screens/cart";
import NotificationScreen from "../screens/notification";
import ProfileScreen from "../screens/profile";
import FontAwesome from "react-native-vector-icons/FontAwesome";



const Tab = createBottomTabNavigator();

const MainTabNavigator = ({navigation}) => {

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {background: 'whitesmoke', overflow:"hidden"}
            }}
        >

            <Tab.Screen name={"Home"} component={HomeScreen}
                        options={{tabBarIcon: ({color,size}) => (
                                <Entypo name="home" size={size} color={color} />),headerShown:false }} />

            <Tab.Screen name={"Cart"} component={CartScreen}
                        options={{tabBarIcon: ({color,size}) => (
                                <FontAwesome name="shopping-cart" size={size} color={color} />),headerShown:false }}/>

            <Tab.Screen name={"Notification"} component={NotificationScreen}
                        options={{tabBarIcon: ({color,size}) => (
                                <Ionicons name="notifications-sharp" size={size} color={color} />),headerShown:false }}/>



            <Tab.Screen name={"Profile"} component={ProfileScreen}
                        options={{tabBarIcon: ({color,size}) => (
                                <Ionicons name={"person"} size={size} color={color} />),headerShown:false }}/>


        </Tab.Navigator>
    )
}

export default MainTabNavigator;