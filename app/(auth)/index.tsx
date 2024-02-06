import React from 'react'
import { Text } from 'react-native'
import { BodyContainer } from '../../src/components/containers/Body'
import { HomeAuthHeader } from '../../src/pages/auth/home/components/Header'

function HomeAuth() {
  return (
    <>
      <HomeAuthHeader />

      <BodyContainer>
        <Text>teste s</Text>
      </BodyContainer>
    </>
  )
}

export default HomeAuth
