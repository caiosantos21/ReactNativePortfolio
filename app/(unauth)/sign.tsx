import { router } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Card } from 'react-native-paper'
import { BodyContainer } from '../../src/components/containers/Body'
import { FormInput } from '../../src/components/form/Input'
import { FormPassword } from '../../src/components/form/Password'

const Sign = () => {
  const { control } = useForm()

  return (
    <BodyContainer>
      <Card style={{ width: '80%' }}>
        <Card.Content>
          <FormInput formProps={{ control, name: 'name' }} label="Nome" />

          <FormInput formProps={{ control, name: 'login' }} label="E-mail" />

          <FormPassword
            formProps={{ control, name: 'password' }}
            label="Senha"
          />
        </Card.Content>

        <Card.Actions style={{ justifyContent: 'space-between' }}>
          <Button mode="text" onPress={router.back}>
            Voltar
          </Button>

          <Button onPress={() => {}}>Cadastrar</Button>
        </Card.Actions>
      </Card>
    </BodyContainer>
  )
}

export default Sign
