import WebView from "react-native-webview";

const OpenVideoLinkOfWatchScreen = ({route}) => {
    const url = route.params.data;
    console.log('Received URL:', url);
    return <WebView source={{ uri: url }} />;
  }
export default OpenVideoLinkOfWatchScreen  