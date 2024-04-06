import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';


const WatchScreen = (props) => {
    const pictures = [
    {
        id: 1,
        points: 100,
        VideoUri:
          'https://youtu.be/-a6E-r8W2Bs?si=wg7bOYeeIbDGD24U', // Replace with your desired image URL
      },
      {
        id: 2,
        points: 200,
        VideoUri:
          'https://youtu.be/-a6E-r8W2Bs?si=wg7bOYeeIbDGD24U', // Replace with your desired image URL
      },
      {
        id: 3,
        points: 500,
        VideoUri:
          'https://youtu.be/-a6E-r8W2Bs?si=wg7bOYeeIbDGD24U', // Replace with your desired image URL
      },
      ,
      {
        id: 4,
        points: 1000,
        VideoUri:
          'https://youtu.be/-a6E-r8W2Bs?si=wg7bOYeeIbDGD24U', // Replace with your desired image URL
      },
      ,
      {
        id: 5,
        points: 1500,
        VideoUri:
          'https://youtu.be/-a6E-r8W2Bs?si=wg7bOYeeIbDGD24U', // Replace with your desired image URL
      },
      ,
      {
        id: 6,
        points: 2000,
        VideoUri:
          'https://youtu.be/-a6E-r8W2Bs?si=wg7bOYeeIbDGD24U', // Replace with your desired image URL
      },
      ,
      {
        id: 7,
        points: 2500,
        VideoUri:
          'https://youtu.be/-a6E-r8W2Bs?si=wg7bOYeeIbDGD24U', // Replace with your desired image URL
      },
    ];
  
    //function that will send data as a props and exexutes on teh touchable opacity in which the links have been displayed
    const handleVideoPress = (videoUri) => {
      props.navigation.navigate('VideosLinks', { data: videoUri });
    };
  
    return(
      <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        {pictures.map((item) => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Video no. {item.id}</Text>
            <View style={{ marginBottom: 8, borderWidth: 1, borderColor: 'gray' }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Video points: {item.points}</Text>
            <View style={{ marginBottom: 8, borderWidth: 1, borderColor: 'gray' }} />
            <TouchableOpacity onPress={() => handleVideoPress(item.VideoUri)}>
              <View style={{ padding: 8, backgroundColor: 'white', borderRadius: 4 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                  Click to Watch Video {item.VideoUri}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginBottom: 8, borderWidth: 1, borderColor: 'gray' }} />
          </View>
        ))}
      </ScrollView>
    </View>
    );
  };

  export default WatchScreen;