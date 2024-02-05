import React from 'react'
import { ScrollView, ViewProps } from 'react-native'

interface BodyContainerProps extends ViewProps {}

export const BodyContainer = (props: BodyContainerProps) => {
  const { children } = props

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </ScrollView>
  )
}
