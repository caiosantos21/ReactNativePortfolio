import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

//screenOptions={{ headerShown: false }}
export default function UnauthLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: '',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: 'Sair',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="exit" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
