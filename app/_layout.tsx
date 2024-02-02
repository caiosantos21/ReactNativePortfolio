import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
        <Stack.Screen name="teste/[id]" options={{ headerTitle: 'Teste' }} />
      </Stack>
    </SafeAreaProvider>
  )
}
