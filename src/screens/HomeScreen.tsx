import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation prop type
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Define the root stack param list (modify as per your navigation structure)
type RootStackParamList = {
  Home: undefined;
  Tips: undefined;
  RideRequest: undefined;
  CFC: undefined;
};

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>EcoTrack</Text>
      <Text style={styles.welcomeText}>Welcome to the Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Explore Tips"
          onPress={() => navigation.navigate('Tips')}
          color="#FFD700" // Yellow color
        />

        <Button
          title="Request a Ride"
          onPress={() => navigation.navigate('RideRequest')}
          color="#FFD700" // Yellow color
        />

        <Button
           title="Carbon Footprint Calculator"
           onPress={() => navigation.navigate('CFC')}
           color="#FFD700"
        />

        
      </View>
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
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // White color for text
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white', // White color for text
  },
  buttonContainer: {
    width: '80%',
  },
});

export default HomeScreen;
