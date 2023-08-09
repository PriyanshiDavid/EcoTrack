import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TipsScreen = () => {
  const tips = [
    'Reduce, reuse, and recycle!',
    'Conserve energy by turning off lights and appliances when not in use.',
    'Use a reusable water bottle instead of single-use plastic bottles.',
    'Plant trees to contribute to a greener environment.',
  ];

  return (
    <ImageBackground
      source={require('../media/tips.jpg')} // Set the image source
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Daily Sustainability Tips</Text>
        {tips.map((tip, index) => (
          <Text key={index} style={styles.tip}>
            {tip}
          </Text>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // Image will cover the entire screen
    justifyContent: 'center', // Center content vertically
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
    padding: 20, // Add padding for readability
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // White color for text
    fontWeight: 'bold', // Make the title bold
  },
  tip: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white', // White color for text
    textAlign: 'center', // Center-align the tips
  },
});

export default TipsScreen;
