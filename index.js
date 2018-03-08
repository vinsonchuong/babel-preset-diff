const interopRequire = require('interop-require')
const path = require('path')

module.exports = function(context, options) {
  return {
    presets: [
      [
        interopRequire('babel-preset-env'),
        Object.assign(
          {
            targets: {
              node: 'current'
            }
          },
          options
        )
      ],
      interopRequire('babel-preset-stage-0'),
      interopRequire('babel-preset-flow')
    ],
    plugins: [
      interopRequire('babel-plugin-package-name-import'),
      interopRequire('babel-plugin-symlink-import')
    ]
  }
}

function getModulePath(module) {
  return path.dirname(require.resolve(`${module}/package.json`))
}
