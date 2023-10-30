import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import PracticeScreen from './PracticeScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();
const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    iconSource: require('../assets/navigation/home.png'),
  },
  {
    name: 'Practice',
    component: PracticeScreen,
    iconSource: require('../assets/navigation/practice.png'),
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    iconSource: require('../assets/navigation/profile-f.png'),
  },
];

const MenuScreen = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#212832',
          paddingTop: 30,
          paddingBottom: 40
        },
      }}>
      {tabScreens.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  borderColor: focused ? '#944ADE' : 'transparent',
                  backgroundColor: focused ? '#2D1E3B' : 'transparent',
                  borderWidth: focused ? 2 : 0,
                }}>
                <Image
                  style={{
                    height: 30,
                    width: 30
                  }}
                  source={tab.iconSource}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MenuScreen;
