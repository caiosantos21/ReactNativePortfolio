import { Redirect, useRootNavigationState } from 'expo-router'
import React from 'react'

const index = () => {
  const rootNavigationState = useRootNavigationState()

  if (!rootNavigationState?.key) return null

  return <Redirect href={'/(unauth)/login'} />
}

export default index
