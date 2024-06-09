import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './Navigation/TabNavigator';
import Footer from './Src/Components/Footer';
import Login from './Src/Screens/login'
import DrawerContent from './Navigation/Content';

const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MyTabs} />
    </Stack.Navigator>
  );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <MyTabs />
          <DrawerContent onLogout={handleLogout} />
        </>
      ) : (
        <>
          <Root />
        </>
      )}
    </NavigationContainer>
  );
};

export default App;
