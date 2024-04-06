import React from 'react';
import WebView from 'react-native-webview';

const OpenLink = ({ route }) => {
    const url = route.params.data;
    console.log('Received URL:', url);
    return <WebView source={{ uri: url }} />;
  };


  export default OpenLink;