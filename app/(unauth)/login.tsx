import { router } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button, Card } from 'react-native-paper'
import { FormInput } from '../../src/components/form/Input'
import { FormPassword } from '../../src/components/form/Password'

const Login = () => {
  const { control } = useForm()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '80%' }}>
        <Card.Content>
          <FormInput formProps={{ control, name: 'login' }} label="E-mail" />

          <FormPassword
            formProps={{ control, name: 'password' }}
            label="Senha"
          />
        </Card.Content>

        <Card.Actions style={{ flexDirection: 'column' }}>
          <Button icon="login" mode="contained" onPress={() => {}}>
            Acessar
          </Button>

          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => router.push('(unauth)/sign')}>
              Cadastro
            </Button>

            <Button onPress={() => router.push('(unauth)/forgot')}>
              Esqueceu a senha?
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default Login
