import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TravelPage from './screens/travel';
import KeepPage from './screens/keep';
import MypagePage from './screens/mypage';
import SearchPlaceView from './screens/travel/SearchPlace';
import SearchResultPage from './screens/travel/SearchResult';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Travel = () => {
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={TravelPage} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name='search-place' component={SearchPlaceView} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const Keep = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="keep" component={KeepPage} />
    </Stack.Navigator>
  )
}

const Mypage = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="mypage" component={MypagePage} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let ic = '';
            if(route.name === 'ai') {
              ic = 'near-me';
            } else if(route.name === 'keep') {
              ic = 'bookmark-outline';
            } else if(route.name === 'mypage') {
              ic = 'person-outline';
            }

            return <MaterialIcons name={ic} size={24} color={color} />;
          },
          tabBarActiveTintColor: "rgb(17, 24, 39)",
          tabBarInactiveTintColor: "rgb(156, 163, 175)",
          tabBarLabelStyle: {fontSize: 10, fontWeight: 500}
        })}
        initialRouteName="ai"
      >
        <Tab.Screen name="ai" component={Travel}
          options={{
            title: 'AI여행',
          }}
        />
        <Tab.Screen name="keep" component={Keep}
          options={{
            title: '저장됨',
          }}
        />
        <Tab.Screen name="mypage" component={Mypage}
          options={{
            title: '내 정보',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}