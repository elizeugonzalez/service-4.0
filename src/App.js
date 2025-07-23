import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './modules/product/screens/HomeScreen';
import PriceScreen from './modules/pricing/screens/PriceScreen';
import './locales/i18n';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Price" component={PriceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
