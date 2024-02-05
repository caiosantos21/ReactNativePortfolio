import React, { useState } from 'react'
import { useController } from 'react-hook-form'
import { TextInput } from 'react-native-paper'
import { FormTextInputProps } from '../types/FormTextInputProps'

export const FormPassword = (props: FormTextInputProps) => {
  const { formProps, label } = props
  const { defaultValue = '', ...otherformProps } = formProps

  const { field } = useController({ defaultValue, ...otherformProps })
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const icon = secureTextEntry ? 'eye' : 'eye-off'

  const toggleIsPassword = () => setSecureTextEntry((old) => !old)

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={field.value}
      onChangeText={field.onChange}
      style={{ marginVertical: 4 }}
      secureTextEntry={secureTextEntry}
      right={<TextInput.Icon icon={icon} onPress={toggleIsPassword} />}
    />
  )
}
