/* eslint-disable no-unused-vars, flowtype/require-valid-file-annotation, flowtype/no-types-missing-file-annotation */
import 'babel-preset-diff'
import * as React from 'react'

function Component() {
  return <div>Hello World!</div>
}

function add(x: number, y: number): number {
  return x + y
}

async function io() {
  await Promise.resolve()
}

function dynamicImport() {
  return import('react')
}

const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
}
const nested = obj?.foo?.bar?.boop ?? 'foo'
