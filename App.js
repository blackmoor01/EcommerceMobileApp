import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc'
import SplashScreen from "./source/screens/Splash";
import LogInScreen from './source/screens/login/LogIn'
import FrameIII from "./source/screens/frames/Frameiii";
import ImageSlider from "./source/screens/frames/Frameiii";
import HomeScreen from "./source/screens/Home";

export default function App() {
  return (
      <SafeAreaView style={tw `flex-1`}>
        <HomeScreen/>
      </SafeAreaView>

  );
}