import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigation/TabNavigator';
import Footer from './Src/Components/Footer';
import Login from './Src/Screens/login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <NavigationContainer>
          <MyTabs />
          <Footer />
        </NavigationContainer>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;