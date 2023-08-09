import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation prop type
type CarbonFootprintCalculatorScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CarbonFootprintCalculator'
>;

// Define the root stack param list (modify as per your navigation structure)
type RootStackParamList = {
  Home: undefined;
  Tips: undefined;
  RideSharing: undefined;
  RideRequestForm: undefined;
  CarbonFootprintCalculator: undefined;
};

interface CarbonFootprintCalculatorScreenProps {
  navigation: CarbonFootprintCalculatorScreenNavigationProp;
}

const CarbonFootprintCalculatorScreen: React.FC<CarbonFootprintCalculatorScreenProps> = ({
  navigation,
}) => {
  const [transport, setTransport] = useState('');
  const [diet, setDiet] = useState('');
  const [water, setWater] = useState('');
  const [electricity, setElectricity] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState('');

  const calculateCarbonFootprint = () => {
    // You can implement the calculation logic here
    // For now, let's calculate a sample total based on inputs
    const total = Number(transport) + Number(diet) + Number(water) + Number(electricity);
    setCarbonFootprint(total.toFixed(2)); // Display the total with 2 decimal places
  };

  return (

    <ImageBackground
      source={require('../media/CFC.jpg')} // Set the image source
      style={styles.imageBackground}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Carbon Footprint Calculator</Text>

      {/* Mode of Transport */}
      <View style={[styles.inputContainer, styles.centeredContainer]}>
        <Text style={styles.placeholder}>Mode of Transport (kg CO2 per km):</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          value={transport}
          onChangeText={setTransport}
          keyboardType="numeric"
        />
      </View>

      {/* Dietary Preference */}
      <View style={[styles.inputContainer, styles.centeredContainer]}>
        <Text style={styles.placeholder}>Dietary Preference (kg CO2 per day):</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          value={diet}
          onChangeText={setDiet}
          keyboardType="numeric"
        />
      </View>

      {/* Water Consumption */}
      <View style={[styles.inputContainer, styles.centeredContainer]}>
        <Text style={styles.placeholder}>Water Consumption (liters per day):</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          value={water}
          onChangeText={setWater}
          keyboardType="numeric"
        />
      </View>

      {/* Electricity Consumption */}
      <View style={[styles.inputContainer, styles.centeredContainer]}>
        <Text style={styles.placeholder}>Electricity Consumption (kWh per day):</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          value={electricity}
          onChangeText={setElectricity}
          keyboardType="numeric"
        />
      </View>
 
      <View style={[styles.inputContainer, styles.centeredContainer]}>
      <Button title="Calculate" onPress={calculateCarbonFootprint}/>
      </View>

      <Text style={styles.result}>Total Carbon Footprint: {carbonFootprint} kg CO2</Text>
      
    </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', // Adjust the width as needed
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // More transparent white background
    borderRadius: 10, // Rounded corners
    padding: 10, // Padding within the input containers
    marginBottom: 10, // Spacing between input containers
    alignSelf: 'center',
  },

  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // Image will cover the entire screen
    justifyContent: 'center', // Center content vertically
  },

  placeholder: {
    fontWeight: 'bold', // Make the placeholder text bold
    fontSize: 16, // Adjust the font size as needed
    color: 'rgb(0,0,0)',
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Light green color
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // White color for text
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    fontWeight: 'bold', // Make the text bold
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color: 'white', // White color for text
    alignSelf: 'center',
  },
});

export default CarbonFootprintCalculatorScreen;
