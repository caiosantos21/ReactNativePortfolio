import React from 'react'
import { useController } from 'react-hook-form'
import { TextInput } from 'react-native-paper'
import { FormTextInputProps } from './types/FormTextInputProps'

export const FormTextInput = (props: FormTextInputProps) => {
  const { formProps, inputProps } = props
  const { defaultValue = '', ...otherformProps } = formProps
  const { label, isPassword } = inputProps

  const { field } = useController({ defaultValue, ...otherformProps })

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={field.value}
      onChangeText={field.onChange}
      secureTextEntry={isPassword}
    />
  )
}
