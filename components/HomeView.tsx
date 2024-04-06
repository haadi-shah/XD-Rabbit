import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [satisfy, setSatisfy] = useState();
  const [point, setPoint] = useState(); // Set initial point value as a number
  const [vip, setVIP] = useState('2020-1-1');

  //function for exiting the app

  //condition for if the point is cleared so when the app is open again the the point should be displayed again

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('userEmail');
        const savedPassword = await AsyncStorage.getItem('userPassword');

        if (savedEmail && savedPassword) {
          setGmail(savedEmail);
          setPassword(savedPassword);
          setSatisfy(true);
          setPoint(795);
        } else {
          setPoint(795);
        }
      } catch (error) {
        console.error('Error loading AsyncStorage data:', error);
      }
    };

    loadUserData();
  }, []);

  //function of the deleting account on the button of delete account
  const handlePress = async () => {
    try {
      // Clear AsyncStorage data
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userPassword');

      // Update the state to an empty string
      setGmail('');
      setPoint('');
      setVIP('');
      setSatisfy(false);
      setPassword('');
    } catch (error) {
      console.error('Error clearing AsyncStorage data:', error);
    }
  };

  //function for saving user data in async storage
  const handlUserData = async () => {
    setSatisfy(true);

    // Save user data in AsyncStorage
    try {
      await AsyncStorage.setItem('userEmail', gmail);
      await AsyncStorage.setItem('userPassword', password);
    } catch (error) {
      console.error('Error saving AsyncStorage data:', error);
    }
  };

  //usestates

  return (
    <>
      {!satisfy && ( // Show only if email and password are not entered
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <TextInput
            style={{
              width: '100%',
              height: 60,
              color: 'black',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              paddingHorizontal: 10,
              fontSize: 16,
            }}
            placeholder="Enter your email here"
            placeholderTextColor="black"
            value={gmail}
            onChangeText={text => setGmail(text)}
          />
          <View style={{marginVertical: 20}}>
            <TextInput
              style={{
                width: '100%',
                height: 60,
                borderWidth: 1,
                color: 'black',
                borderColor: 'black',
                borderRadius: 5,
                paddingHorizontal: 10,
                fontSize: 16,
              }}
              placeholder="Enter your password"
              placeholderTextColor="black"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Button title="Login" color="blue" onPress={handlUserData} />
        </View>
      )}

      {satisfy && (
        <ScrollView style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.textBox}>
              <Text style={styles.description}>Account: {gmail}</Text>
            </View>

            <View style={styles.textBox}>
              <Text style={styles.title}>Point: {point}</Text>
            </View>
            <View style={styles.textBox}>
              <Image
                source={{
                  uri: 'https://th.bing.com/th/id/OIP.W7eR5tLrNH95eJ3wgAI9BgAAAA?w=160&h=180&c=7&r=0&o=5&pid=1.7',
                }}
                style={{
                  width: 32,
                  height: 32,
                  marginRight: 5,
                  resizeMode: 'cover',
                }}
              />
              <Text style={styles.title}>VIP Expiration Date: {vip}</Text>
            </View>

            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('Contacts')}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th?id=OIP.Ia5yTAEE8_LpdqdSA297pgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    marginRight: 5,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.contactUs}>Contact Us</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Campaign')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th?id=OIP.d-L-O1fFyeNs7BFl8D6VdgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    marginRight: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.campaignStyle}>My Campaign</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('BuyPoint')}>
                <Image
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/000/425/847/original/vector-diamond-icon.jpg',
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    marginLeft: 5,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.contactUs}>Buy Point</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={handlePress}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.zzhV0gagwep2WbgGQ2kWUwHaHa?rs=1&pid=ImgDetMain',
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    marginLeft: 5,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.campaignStyle}>Delete Account</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Video')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.5kOkPdaX-1_iGPvUm721ewHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7',
                  }}
                  style={{
                    width: 38,
                    height: 38,
                    marginLeft: 5,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.contactUs}>Watch Video</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.navigate('PrivacyPolicy')}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.aTgEeasAgfBBjzB8AxA3_QHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7',
                  }}
                  style={{
                    width: 38,
                    height: 38,
                    marginLeft: 5,
                    resizeMode: 'cover',
                  }}
                />
                <Text style={styles.contactUs}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonStyle}>
              <TouchableOpacity
                style={styles.touchableOpacityButton}
                onPress={() => console.warn('this feature wil be added soon!')}>
                <Text style={styles.touchableOpacityText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textBox: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 5,
    backgroundColor: '#1a1aff',
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    backgroundColor: 'white',
  },
  buttonStyle: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: 'white',
  },
  description: {
    fontSize: 17,
    color: 'white',
  },
  contactUs: {
    fontSize: 13,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 5,
  },
  campaignStyle: {
    fontSize: 13,
    backgroundColor: 'blue', // Change the background color to your desired hue
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 5,
  },
  touchableOpacityButton: {
    backgroundColor: '#0000ff', // gradient background
    borderRadius: 10, // rounded corners
    paddingHorizontal: 20, // horizontal padding
    paddingVertical: 15, // vertical padding
    alignItems: 'center', // center content horizontally
    justifyContent: 'center', // center content vertically
  },
  touchableOpacityText: {
    fontSize: 18, // font size
    fontWeight: 'bold', // font weight
    color: '#ffffff', // text color
  },
  containerOfSplashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E97FF',
  },
  containerOfContactUs: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  profileImageOfContactUs: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nameOfContactUs: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactOfContactUs: {
    fontSize: 18,
    marginBottom: 5,
  },
  emailOfContactUs: {
    fontSize: 16,
    color: 'gray',
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
  },
});

//Craeting Buy point style
const BuyPointstyles = StyleSheet.create({
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
    borderColor: 'balck',
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

const BuyPointStyle = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contact: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  email: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
});

export default HomeScreen;
