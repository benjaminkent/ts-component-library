const path = require('path')

// Export a function. Accept the base config as the only param.
// `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../packages'),
  })

  config.module.rules.push({
    enforce: 'pre',
    test: /\.(ts|tsx|vue)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          appendTsSuffixTo: [/\.vue$/],
          configFile: '.storybook/tsconfig.json',
        },
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
