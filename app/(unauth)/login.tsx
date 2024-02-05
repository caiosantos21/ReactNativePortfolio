import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Card } from 'react-native-paper'
import { FormTextInput } from '../../src/components/form/TextInput'

const Login = () => {
  const { control } = useForm()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <Card.Content>
          <FormTextInput
            formProps={{ control, name: 'login' }}
            inputProps={{
              label: 'E-mail'
            }}
          />

          <FormTextInput
            formProps={{ control, name: 'password' }}
            inputProps={{
              label: 'Senha',
              isPassword: true
            }}
          />
        </Card.Content>
      </Card>
    </View>
  )
}

export default Login
