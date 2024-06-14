import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './Navigation/TabNavigator';
import Footer from './Src/Components/Footer';
import Login from './Src/Screens/login';
import DrawerContent from './Navigation/Content';
import * as LocalAuthentication from 'expo-local-authentication';

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
  const [authResult, setAuthResult] = useState('');

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (hasHardware) {
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if (isEnrolled) {
          requestBiometricAuthentication();
        } else {
          console.error('Nenhuma biometria cadastrada no dispositivo.');
        }
      } else {
        console.error('Biometria não suportada pelo dispositivo.');
      }
    } catch (error) {
      console.error('Erro ao verificar suporte para biométrica:', error);
    }
  };

  const requestBiometricAuthentication = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Para desbloquear o aplicativo',
      });
      if (result.success) {
        setIsLoggedIn(true);
        setAuthResult('Autenticado com sucesso!');
        setTimeout(() => {
          setAuthResult('');
        }, 3000);
      } else {
        setAuthResult('Autenticação falhou ou foi cancelada.');
        setTimeout(() => {
          setAuthResult('');
        }, 3000);
      }
    } catch (error) {
      setAuthResult('Autenticação falhou ou foi cancelada.');
      setTimeout(() => {
        setAuthResult('');
      }, 3000);
    }
  };

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
          {authResult ? (
            <View style={{ padding: 10 }}>
              <Text>{authResult}</Text>
            </View>
          ) : null}
        </>
      )}
    </NavigationContainer>
  );
};

export default App;
