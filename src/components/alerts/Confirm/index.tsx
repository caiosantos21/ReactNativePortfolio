import React from 'react'
import { Button, Dialog, Text } from 'react-native-paper'

type ConfirmAlertProps = {
  alertTitle?: string
  alertMsg: string
  isVisible: boolean
  handleConfirm: () => void
  closeAlert: () => void
}

export const ConfirmAlert = (props: ConfirmAlertProps) => {
  const { isVisible, handleConfirm, closeAlert } = props

  return (
    <Dialog visible={isVisible} onDismiss={closeAlert}>
      <Dialog.Title>Alert</Dialog.Title>

      <Dialog.Content>
        <Text variant="bodyMedium">This is simple dialog</Text>
      </Dialog.Content>

      <Dialog.Actions>
        <Button onPress={closeAlert}>Done</Button>
        <Button onPress={handleConfirm}>Done</Button>
      </Dialog.Actions>
    </Dialog>
  )
}
