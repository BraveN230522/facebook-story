module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets/',
          '@theme': './src/theme/',
          '@navigation': './src/navigation/',
          '@components': './src/components/',
          '@screens': './src/screens/',
          '@translations': './src/translations/',
          '@utils': './src/utils/',
          '@services': './src/services/',
          '@type': './src/types/',
          '@redux': './src/redux/',
          '@net': './src/net/',
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
