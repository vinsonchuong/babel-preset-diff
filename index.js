module.exports = {
  presets: [
    [
      require('babel-preset-env'),
      {
        targets: {
          node: 'current'
        }
      }
    ],
    require('babel-preset-stage-0'),
    require('babel-preset-flow')
  ],
  plugins: [require('babel-plugin-package-name-import')]
}
