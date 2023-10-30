import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingScreen from './screens/StartingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  //npx expo start --tunnel
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartingScreen} options={{ headerTitle: '', headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: '', headerTintColor: '#C2C3C4', headerStyle: { backgroundColor: '#212832' } }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerTitle: '', headerTintColor: '#C2C3C4', headerStyle: { backgroundColor: '#212832' } }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
