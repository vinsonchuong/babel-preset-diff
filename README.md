# babel-preset-diff
Compile all unsupported features for current environments

`babel-preset-diff` aims to offer the most commonly used Babel presets and
plugins so that developers do not have to duplicate and maintain a complex
Babel configuration project to project. It also aims to support only the latest
Node and browser versions by default.

## Usage
Install [babel-preset-diff](https://yarnpkg.com/en/package/babel-preset-diff)
by running

```sh
yarn add --dev babel-preset-diff
```

Add it to your Babel configuration (`.babelrc` or `package.json`)

```json
{
  "presets": [
    "diff"
  ]
}
```