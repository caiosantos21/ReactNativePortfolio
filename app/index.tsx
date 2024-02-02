// import { DatabaseProvider } from '@nozbe/watermelondb/react'
import { Link } from 'expo-router'
import React from 'react'
// import { projectDb } from './src/database/config'
import { Pressable, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function Home() {
  return (
    <SafeAreaProvider>
      <Text>ddsadasdasdasd</Text>

      <Link href="/teste" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </SafeAreaProvider>
  )
}

export default Home
