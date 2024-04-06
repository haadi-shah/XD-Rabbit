import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreens';
import AskAccount from './components/LoginPage';
import HomeScreen from './components/HomeView';
import MyCampaign from './components/LinksCampaign';
import OpenLink from './components/CampaignLinkOpener';
import LoginScreen from './components/PrivacyPolicyData';
import ContactScreen from './components/ContactUsInfo';
import BuyPointsScreen from './components/PointsScreen';
import WatchScreen from './components/WatchPointVideos';
import OpenVideoLinkOfWatchScreen from './components/WatchPointScreenLinkView';
const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='LoginAccount' component = {AskAccount} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PrivacyPolicy" component={LoginScreen} />
        <Stack.Screen name="Campaign" component={MyCampaign} />
        <Stack.Screen name="Contacts" component={ContactScreen} />
        <Stack.Screen name="BuyPoint" component={BuyPointsScreen} />
        <Stack.Screen name="Link" component={OpenLink} />
        <Stack.Screen name="Video" component={WatchScreen} />
        <Stack.Screen name="VideosLinks" component={OpenVideoLinkOfWatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
