import { expect, test } from 'vitest'
import helloWorld from '.'

test('First test', () => {
  expect(helloWorld('Donato')).equals('Hello Donato')
})
