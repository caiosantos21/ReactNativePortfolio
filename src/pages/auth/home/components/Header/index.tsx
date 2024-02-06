import { router } from 'expo-router'
import React from 'react'
import { Appbar, Menu } from 'react-native-paper'

export const HomeAuthHeader = () => {
  const [visible, setVisible] = React.useState(false)
  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  return (
    <Appbar.Header>
      <Appbar.Content title="" />

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
        anchorPosition="bottom"
      >
        <Menu.Item
          onPress={() => router.replace('/(unauth)/login')}
          title="Sair"
          trailingIcon="exit-to-app"
        />
      </Menu>
    </Appbar.Header>
  )
}
