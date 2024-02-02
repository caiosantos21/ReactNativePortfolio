// import { DatabaseProvider } from '@nozbe/watermelondb/react'
import { Link, router } from 'expo-router'
import React from 'react'
// import { projectDb } from './src/database/config'
import { Pressable, Text } from 'react-native'

function Home() {
  return (
    <>
      <Text>ddsa3323asd</Text>

      <Link href="/teste/1" style={{ marginVertical: 10 }}>
        <Text>Ir para teste</Text>
      </Link>

      <Pressable onPress={() => router.push(`/teste/1`)}>
        <Text>Ir para teste w</Text>
      </Pressable>
    </>
  )
}

export default Home
