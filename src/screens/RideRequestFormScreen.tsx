import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation prop type
type RideRequestFormScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RideRequestForm'
>;

// Define the root stack param list (modify as per your navigation structure)
type RootStackParamList = {
  Home: undefined;
  Tips: undefined;
  RideRequestForm: undefined;
};

interface RideRequestFormScreenProps {
  navigation: RideRequestFormScreenNavigationProp;
}

const RideRequestFormScreen: React.FC<RideRequestFormScreenProps> = ({
  navigation,
}) => {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const handleSubmit = () => {
    // You can implement the submission logic here
    // For now, let's just log the entered values
    console.log('Name:', name);
    console.log('Pickup:', pickup);
    console.log('Drop:', drop);
    console.log('Departure Time:', departureTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride Request Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup Point"
        value={pickup}
        onChangeText={setPickup}
      />
      <TextInput
        style={styles.input}
        placeholder="Drop Point"
        value={drop}
        onChangeText={setDrop}
      />
      <TextInput
        style={styles.input}
        placeholder="Departure Time"
        value={departureTime}
        onChangeText={setDepartureTime}
      />
      <Button title="Submit Request" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90EE90', // Light green color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // White color for text
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RideRequestFormScreen;
