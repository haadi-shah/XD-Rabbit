import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MyCampaign = (props) => {
  const [data, setData] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'red', fontWeight: '500' }}>
        Only support up to 1 task at the same time. Please delete the tasks
      </Text>
      <View style={styles.buttonStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Paste your link here"
          value={data}
          onChangeText={(text) => setData(text)}
        />
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          style={styles.touchableOpacityButton}
          onPress={() => props.navigation.navigate('Link', { data })}>
          <Text style={styles.touchableOpacityText}>Click To Open The Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  buttonStyle: {
    marginTop: 30,
    alignItems: 'center',
  },
  touchableOpacityButton: {
    backgroundColor: '#0000ff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textInputStyle: {
    width: '100%',
    height: 60,
    color: 'blue',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#e6e6e6',
  },
});

export default MyCampaign;
