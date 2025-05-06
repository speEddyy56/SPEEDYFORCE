import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function tabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#104957',
        tabBarInactiveTintColor: '#95cfde',       
        tabBarStyle: {backgroundColor: '#0291b5', borderColor: '#0291b5'},

        headerStyle: {
          backgroundColor: '#0291b5',
        },

        headerShadowVisible: false,
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
      name = 'index'
      options={{
        title: 'Origem dos Dragões',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'diamond-sharp' : 'diamond-outline'} color = {color} size = {24} />
        ),
      }}
      />

      <Tabs.Screen
      name = "about"
      options={{
        title: 'Povos nórdicos',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
        ),
      }}
      />

      <Tabs.Screen
      name = "toDoList"
      options={{
        title: 'Lista de Dragoes',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'layers-sharp' : 'layers-outline'} color={color} size={24} />
        ),
      }}
      />
      </Tabs>

      
  );
}
