import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Teste() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text>USER ID {id}</Text>

      <TouchableOpacity onPress={router.back}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Teste
