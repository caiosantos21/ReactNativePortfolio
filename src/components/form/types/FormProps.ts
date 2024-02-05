import { Control, FieldValues } from 'react-hook-form'

export type FormProps = {
  control: Control<FieldValues, any, FieldValues>
  name: string
  defaultValue?: string | number
}
