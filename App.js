import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TravelPage from './screens/travel';
import KeepPage from './screens/keep';
import MyPage from './screens/mypage';
import SearchPlaceView from './screens/travel/SearchPlace';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export function TabView() {
  return (
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
      })}
      initialRouteName="ai"
    >
      <Tab.Screen name="ai" component={TravelPage}
        options={{
          title: 'AI여행',
        }}
      />
      <Tab.Screen name="keep" component={KeepPage}
        options={{
          title: '저장됨',
        }}
      />
      <Tab.Screen name="mypage" component={MyPage}
        options={{
          title: '내 정보',
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="home" component={TabView} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name='search-place' component={SearchPlaceView} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}