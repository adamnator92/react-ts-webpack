const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

module.exports = (envVars) => {
  const { env } = envVars;

  const envConfig = require(`./webpack.${env}.js`);

  const config = merge(baseConfig, envConfig);

  return config;
};
