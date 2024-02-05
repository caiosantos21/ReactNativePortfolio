import React from 'react'
import { useController } from 'react-hook-form'
import { TextInput } from 'react-native-paper'
import { FormTextInputProps } from '../types/FormTextInputProps'

export const FormInput = (props: FormTextInputProps) => {
  const { formProps, label } = props
  const { defaultValue = '', ...otherformProps } = formProps

  const { field } = useController({ defaultValue, ...otherformProps })

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={field.value}
      onChangeText={field.onChange}
      style={{ marginVertical: 4 }}
    />
  )
}
