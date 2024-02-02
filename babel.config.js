// process.env.EXPO_ROUTER_APP_ROOT = '../../src/app'

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'], // 'module:metro-react-native-babel-preset'
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic'
        }
      ],
      ['module:react-native-dotenv']
      //   require.resolve('expo-router/babel'),
      //   'nativewind/babel'
    ]
  }
}
