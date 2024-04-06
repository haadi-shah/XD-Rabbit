import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ContactScreen = () => {
  const ConactScreenData = {
    name: 'syed hassan shah',
    contact: '+923434075452',
    email: 'john.doe@example.com',
  };

  return (
    <View style={styles.containerOfContactUs}>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/OIP.j61k4IAiSMJuJG0jqmKGcAHaH5?pid=ImgDet&w=182&h=194&c=7',
        }}
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
      />

      <Text style={styles.nameOfContactUs}>{ConactScreenData.name}</Text>
      <Text style={styles.contactOfContactUs}>{ConactScreenData.contact}</Text>
      <Text style={styles.emailOfContactUs}>{ConactScreenData.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOfContactUs: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  nameOfContactUs: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactOfContactUs: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  emailOfContactUs: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
});

export default ContactScreen;
