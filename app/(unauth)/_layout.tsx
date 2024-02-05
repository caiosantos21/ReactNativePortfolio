import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="sign" />
      <Stack.Screen name="forgot" />
    </Stack>
  )
}

export default _layout
