import React, { useEffect } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({navigation}) => {
    useEffect(() => {
      const timer = setTimeout(async () => {
        // Check if email and password are saved before navigating
        const savedEmail = await AsyncStorage.getItem('userEmail');
        const savedPassword = await AsyncStorage.getItem('userPassword');
    
        if (savedEmail && savedPassword) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('LoginAccount');
        }
      }, 2000);
    
      // Clear the timeout when the component is unmounted
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#87CEEB',
        }}>
        <Text style={{fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,}}>XDRabbit</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1567633090480-f19f2f67c088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFJhYmJpdCUyMGFuaW1hdGVkJTIwaWNvbnN8ZW58MHx8MHx8fDA%3D',
          }}
          style={{flex: 1, width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
    );
  };


  export default SplashScreen