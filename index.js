/* eslint-disable flowtype/require-valid-file-annotation */
const interopRequire = require('interop-require')

module.exports = function(context, options) {
  return {
    presets: [
      [
        interopRequire('@babel/preset-env'),
        Object.assign(
          {
            targets: {
              node: 'current'
            }
          },
          options
        )
      ],
      interopRequire('@babel/preset-flow'),
      interopRequire('@babel/preset-react')
    ],
    plugins: [interopRequire('babel-plugin-package-name-import')]
  }
}
