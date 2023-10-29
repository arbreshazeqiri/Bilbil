import React, { useState } from 'react';
import Navigation from './screens/Navigation';
import StartingScreen from './screens/StartingScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? <Navigation /> : <StartingScreen />
}

export default App;
