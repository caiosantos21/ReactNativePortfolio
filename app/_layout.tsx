import { Stack } from 'expo-router'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { projectTheme } from '../src/theme'

const _layout = () => {
  // console.log('db =', db.collections)
  return (
    <PaperProvider theme={projectTheme}>
      <SafeAreaProvider>
        {/* <DatabaseProvider database={projectDb}> */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(unauth)" />
          <Stack.Screen name="(auth)" />
        </Stack>
        {/* </DatabaseProvider> */}
      </SafeAreaProvider>
    </PaperProvider>
  )
}

const project = () => {
  return (
    <>
      {/* <DatabaseProvider database={projectDb}> */}
      <_layout />
      {/* </DatabaseProvider> */}
    </>
  )
}

export default project
