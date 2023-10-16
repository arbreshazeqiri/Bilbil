import React from 'react';
import { Image, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import PracticeScreen from './screens/PracticeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    iconSource: require('./assets/navigation/home.png'),
    headerIcons: [
      {
        name: 'Flag',
        size: 45,
        iconSource: require('./assets/navigation/albanian-flag.png')
      },
      {
        name: 'Streak',
        size: 30,
        value: 1,
        iconSource: require('./assets/navigation/streak.png')
      },
      {
        name: 'Level',
        size: 30,
        value: 1,
        iconSource: require('./assets/navigation/level.png')
      },
      {
        name: 'Hearts',
        size: 30,
        value: 5,
        iconSource: require('./assets/navigation/heart.png')
      }
    ]
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

  const HomeHeaderIcons = ({ icons }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 0, padding: 20, backgroundColor: '#212832' }}>
      {icons.map((icon, index) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image key={index} source={icon.iconSource} style={{ width: icon.size, height: icon.size }} />
          {icon.value && <Text style={{ color: 'white', fontWeight: 900, fontSize: 18 }}>{icon.value}</Text>}
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#212832' }}>
      <NavigationContainer>
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
                headerStyle: { backgroundColor: '#212832' },
                tabBarShowLabel: false,
                tabBarIcon: () => (
                  <Image style={{ height: 30, width: 30 }} source={tab.iconSource} />
                ),
                tabBarActiveBackgroundColor: '#161A1F',
                header: () => {
                  if (tab.headerIcons) {
                    return (
                      <HomeHeaderIcons icons={tab.headerIcons} />
                    );
                  }
                },
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default App;
