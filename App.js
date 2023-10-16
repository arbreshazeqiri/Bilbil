import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PracticeScreen from './screens/PracticeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    iconSource: require('./assets/navigation/home.png'),
  },
  {
    name: 'Practice',
    component: PracticeScreen,
    iconSource: require('./assets/navigation/practice.png'),
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    iconSource: require('./assets/navigation/profile-f.png'),
  },
];

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#212832',
          },
        }}>
        {tabScreens.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ size }) => (
                <Image style={{ height: size, width: size }} source={tab.iconSource} />
              ),
              tabBarActiveBackgroundColor: '#161A1F',
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App
