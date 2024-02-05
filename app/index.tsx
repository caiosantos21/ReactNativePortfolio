import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

const index = () => {
  return (
    <>
      <View style={{ flex: 1, marginVertical: 50 }}>
        <Text>index</Text>

        <Button
          icon="login"
          mode="contained"
          onPress={() => router.push('(unauth)/login')}
        >
          GO TO LOGIN
        </Button>

        <Button
          icon="camera"
          mode="contained"
          onPress={() => router.push('(auth)')}
        >
          GO TO HOME
        </Button>
      </View>
    </>
  )
}

export default index
