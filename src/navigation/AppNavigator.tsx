import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Import your screen components
import TipsScreen from '../screens/TipsScreen';
import RideRequestFormScreen from '../screens/RideRequestFormScreen';
import CarbonFootprintCalculatorScreen from '../screens/CarbonFootprintCalculatorScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tips" component={TipsScreen} />
      <Stack.Screen name="RideRequest" component={RideRequestFormScreen} />
      <Stack.Screen name="CFC" component={CarbonFootprintCalculatorScreen}/>
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );

};

export default AppNavigator;