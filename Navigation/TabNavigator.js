import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../Src/Screens/Home';
import Planos from '../Src/Screens/Planos';
import Transacoes from '../Src/Screens/Trans';
import Mais from '../Src/Screens/Mais';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#31654e',
        tabBarInactiveTintColor: '#a3a3a3',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: {height: '10%', paddingBottom: '5%'}
      }}>
      <Tab.Screen name="Principal" component={Principal} options={{ tabBarIcon: ({ color, size }) => ( <MaterialIcons name="cottage" color={color} size={size} />),}} />
      <Tab.Screen name="Planos" component={Planos} options={{ tabBarIcon: ({ color, size }) => ( <MaterialIcons name="event-available" color={color} size={size} />),}} />
      <Tab.Screen name="Transações" component={Transacoes} options={{ tabBarIcon: ({ color, size }) => ( <MaterialIcons name="currency-exchange" color={color} size={size} />),}} />
      <Tab.Screen name="Mais" component={Mais} options={{ tabBarIcon: ({ color, size }) => ( <MaterialIcons name="more-horiz" color={color} size={size} />),}}/>
    </Tab.Navigator>
  );
}