import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../Src/Screens/Home';
import Planos from '../Src/Screens/Planos';
import Transacoes from '../Src/Screens/Trans';
import Mais from '../Src/Screens/Mais';
import Index from '../Src/Screens/Index';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Index" screenOptions={{ headerShown: false, tabBarStyle: {display: 'none'} }}>
      <Tab.Screen name="Index" component={Index} />
      <Tab.Screen name="Home" component={Principal} />
      <Tab.Screen name="Planos" component={Planos} />
      <Tab.Screen name="Transações" component={Transacoes} />
      <Tab.Screen name="Mais" component={Mais} />
    </Tab.Navigator>
  );
}