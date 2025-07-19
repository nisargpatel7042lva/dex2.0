// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

// Add resolver configuration for Node.js modules
config.resolver.alias = {
  ...config.resolver.alias,
  crypto: 'react-native-crypto',
  stream: 'stream-browserify',
  buffer: '@craftzdog/react-native-buffer',
};

// Add resolver configuration for problematic modules
config.resolver.alias = {
  ...config.resolver.alias,
  'jose': require.resolve('jose'),
};

module.exports = config;