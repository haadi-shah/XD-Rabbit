import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const BuyPointsScreen = () => {
  const packages = [
    {
      id: 1,
      points: 100,
      price: '$10.00',
      imageUri: 'https://th.bing.com/th/id/OIP.cEVoVSApvULRvKmCEFqfpgHaF1?w=246&h=194&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: 2,
      points: 200,
      price: '$18.00',
      imageUri: 'https://th.bing.com/th/id/OIP.cEVoVSApvULRvKmCEFqfpgHaF1?w=246&h=194&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: 3,
      points: 500,
      price: '$40.00',
      imageUri: 'https://th.bing.com/th/id/OIP.cEVoVSApvULRvKmCEFqfpgHaF1?w=246&h=194&c=7&r=0&o=5&pid=1.7',
    },
  ];

  const handleBuyPoints = (points, price) => {
    // Add logic to handle the purchase, e.g., navigate to payment screen
    console.warn(`Buy ${points} points for ${price}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Buy Points</Text>
      {packages.map(packageItem => (
        <TouchableOpacity
          key={packageItem.id}
          style={styles.packageContainer}
          onPress={() => handleBuyPoints(packageItem.points, packageItem.price)}>
          <Image
            source={{ uri: packageItem.imageUri }}
            style={styles.packageImage}
          />
          <View style={styles.packageInfo}>
            <Text style={styles.points}>{packageItem.points} Points</Text>
            <Text style={styles.price}>{packageItem.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  packageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  packageImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  packageInfo: {
    flex: 1,
    padding: 10,
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default BuyPointsScreen;
