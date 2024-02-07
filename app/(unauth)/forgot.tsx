import { BodyContainer } from '@components/containers/Body'
import { FormInput } from '@components/form/Input'
import { router } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Card } from 'react-native-paper'

const Forgot = () => {
  const { control } = useForm()

  return (
    <BodyContainer>
      <Card style={{ width: '80%' }}>
        <Card.Title
          title="Informe abaixo o e-mail do usuário que deseja recuperar a senha."
          titleNumberOfLines={2}
          style={{ marginVertical: 10 }}
        />

        <Card.Content>
          <FormInput formProps={{ control, name: 'email' }} label="E-mail" />
        </Card.Content>

        <Card.Actions style={{ justifyContent: 'space-between' }}>
          <Button mode="text" onPress={router.back}>
            Voltar
          </Button>

          <Button onPress={() => {}}>Recuperar senha</Button>
        </Card.Actions>
      </Card>
    </BodyContainer>
  )
}

export default Forgot
