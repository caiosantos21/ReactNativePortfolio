// import { projectDb } from '@database/watermellondb/config'
// import { DatabaseProvider } from '@nozbe/watermelondb/react'
import { projectTheme } from '@theme/index'
import { Stack } from 'expo-router'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const _layout = () => {
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

export default _layout
