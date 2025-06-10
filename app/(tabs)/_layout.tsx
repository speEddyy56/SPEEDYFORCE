import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function tabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#d4af37',
        tabBarInactiveTintColor: '#e6e6e6',

        tabBarStyle: {
          backgroundColor: '#0f3460',
          borderTopColor: '#f05454',
          height: 65,
          paddingVertical: 8,
        },

        tabBarIconStyle: {
          marginBottom: 2,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 0,
        },

        headerStyle: {
          backgroundColor: '#1a1a2e',
        },
        headerTintColor: '#e6e6e6',
        headerTitleStyle: {
          color: '#d4af37',
          fontWeight: 'bold',
        },
        headerShadowVisible: false,

        tabBarLabelPosition: 'below-icon', // garante texto abaixo do ícone
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Origem Dragões',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'rose-sharp' : 'rose-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'Povos Nórdicos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'shield-sharp' : 'shield-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Lista Dragões',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'skull-sharp' : 'skull-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="BuscaCEP"
        options={{
          title: 'Buscar CEP',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'search-sharp' : 'search-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs>
  );
}
