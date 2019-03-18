module.exports = {
  webpack: config => {
    // Alias all `react-native` imports to `react-native-web`
    config.module.rules.forEach(r => {
      r.exclude = path => {
        if (/next-server[\\/]dist[\\/]lib/.test(path)) {
          return false;
        }
        return /node_modules/.test(path) && 
        !/node_modules\/styled-components/.test(path);
      };
    })

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web"
    };

    return config;
  }
};
