import 'react-native-gesture-handler'
// import { projectDb } from '@database/watermellondb/config'
// import { DatabaseProvider } from '@nozbe/watermelondb/react'
// import { TamaguiProvider } from '@tamagui/core'
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider
// } from '@react-navigation/native'
import { projectTheme } from '@src/theme/reactPaper'
import { Stack } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider, Theme } from 'tamagui'
import tamaguiConfig from 'tamagui.config'
// import '../tamagui-web.css'

const _layout = () => {
  const colorScheme = useColorScheme()

  console.log(colorScheme)

  return (
    <PaperProvider theme={projectTheme}>
      <TamaguiProvider config={tamaguiConfig}>
        {/* <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        > */}
        <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
          <SafeAreaProvider>
            {/* <DatabaseProvider database={projectDb}> */}
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(unauth)" />
              <Stack.Screen name="(auth)" />
            </Stack>
            {/* </DatabaseProvider> */}
          </SafeAreaProvider>
        </Theme>
        {/* </ThemeProvider> */}
      </TamaguiProvider>
    </PaperProvider>
  )
}

export default _layout
