import { config } from '@tamagui/config/'
// import { radius, size, space, themes, zIndex } from '@tamagui/themes'
import { createTamagui } from 'tamagui'

// const tokens = createTokens({
//   color: {
//     darkRed: '#550000',
//     lightRed: '#ff0000'
//   },
//   // ... see configuration docs for required tokens
//   space,
//   size,
//   radius,
//   zIndex
// })

export const tamaguiConfig = createTamagui(config)
// export const tamaguiConfig = createTamagui({ themes, tokens })

// const tamaguiConfig = createTamagui({
//   tokens,
//   themes: {
//     dark: {
//       red: tokens.color.darkRed
//     },
//     light: {
//       red: tokens.color.lightRed
//     }
//   }
// })

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
