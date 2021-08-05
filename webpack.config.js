const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv); 
  //! Optional for web
  config.resolve.alias['react-native'] = 'react-native-web';
  config.resolve.alias['react-native-maps'] = 'react-native-web-maps';
  //! Optional for web 
  
  // Customize the config before returning it.
  return config;
};