import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AskAccount = (props) => {
    return (
      <View style={{flex: 1,alignItems: 'center', backgroundColor:'white', justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: '500', backgroundColor: 'blue', height: 80, width: 300, borderRadius: 20, padding: 20, textAlign: 'center' }}>
          click to login
          </Text>
        </TouchableOpacity>
      </View>
    )
  };

  export default AskAccount;