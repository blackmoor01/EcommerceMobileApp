import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc'
import MainStackNavigator from "./source/routing/mainstack";

export default function App() {
  return (
      <SafeAreaView style={tw `flex-1`}>
          <MainStackNavigator/>
      </SafeAreaView>

  );
}