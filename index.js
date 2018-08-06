/* eslint-disable flowtype/require-valid-file-annotation */
const presetEnv = require('@babel/preset-env').default
const presetFlow = require('@babel/preset-flow').default
const presetReact = require('@babel/preset-react').default
const pluginPackageNameImport = require('babel-plugin-package-name-import')
  .default

module.exports = function(context, options) {
  return {
    presets: [
      [
        presetEnv,
        Object.assign(
          {
            targets: {
              node: 'current'
            }
          },
          options
        )
      ],
      presetFlow,
      presetReact
    ],
    plugins: [pluginPackageNameImport]
  }
}
