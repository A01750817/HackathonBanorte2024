// components/TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinPathStack from './CoinPathStack';
import VideoMenu from './videoMenu';
import Perfil from './Perfil';
import RankingsAndChat from './RankingsAndChat'; // Importar el nuevo componente
import BottomBar from './BottomBar';

// Importar íconos para las pestañas
import rankingsIcon from '../assets/TrioPersonas.png'; // Asegúrate de que este ícono exista
import chatIcon from '../assets/icons8-chat-50.png'; // Asegúrate de que este ícono exista

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <Tab.Screen name="CoinPathStack" component={CoinPathStack} />
      <Tab.Screen name="VideoMenu" component={VideoMenu} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen 
        name="RankingsAndChat" 
        component={RankingsAndChat} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image 
              source={rankingsIcon} 
              style={{ 
                width: size, 
                height: size, 
                tintColor: focused ? '#EB0029' : '#ccc' 
              }} 
            />
          ),
          tabBarLabel: 'Ranking & Chat',
        }}
      />
    </Tab.Navigator>
  );
}
