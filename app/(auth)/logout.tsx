import { router } from 'expo-router'
import React from 'react'
import { Button, Card } from 'react-native-paper'
import { BodyContainer } from '../../src/components/containers/Body'

function LogoutAuth() {
  const handleConfirm = () => {
    router.replace('/(unauth)/login')
  }

  return (
    <BodyContainer>
      <Card style={{ width: '80%' }}>
        <Card.Title
          title="Deseja sair?"
          titleNumberOfLines={2}
          style={{ marginVertical: 10 }}
        />

        <Card.Actions style={{ justifyContent: 'space-between' }}>
          <Button mode="text" onPress={router.back}>
            Não
          </Button>

          <Button onPress={handleConfirm}>Sim</Button>
        </Card.Actions>
      </Card>
    </BodyContainer>
  )
}

export default LogoutAuth
