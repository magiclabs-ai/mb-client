import {assign, camelCaseObjectKeysToSnakeCase, camelCaseToSnakeCase,
  handleAsyncFunction,
  mergeNestedObject,
  snakeCaseObjectKeysToCamelCase,
  snakeCaseToCamelCase} from '@/utils/toolbox'
import {describe, expect, test} from 'vitest'

describe('Toolbox', () => {
  test('assign function', () => {
    const objectToAssign = {hello: 'world'}
    assign(objectToAssign, [], 'empty')
    expect(objectToAssign).toStrictEqual({hello: 'world', '': 'empty'})
    assign(objectToAssign, ['1', '2', '3'], 'test')
    expect(objectToAssign).toStrictEqual({hello: 'world', '': 'empty', 1: {2: {3: 'test'}}})
  })
  test('mergeNestedObject', () => {
    const initialObject = {item: {item: {name: 'itemName'}}}
    const objectToMerge = {item: {item: {item: 'test'}}}
    expect(mergeNestedObject(initialObject, objectToMerge))
      .toStrictEqual({item: {item: {name: 'itemName', item: 'test'}}})
  })
  test('camelCaseToSnakeCase', () => {
    expect(camelCaseToSnakeCase('helloWorld')).toBe('hello_world')
    expect(camelCaseToSnakeCase('helloWorldTest')).toBe('hello_world_test')
  })
  test('camelCaseObjectKeysToSnakeCase', () => {
    const camelCaseObject = {helloWorld: 'helloWorld', helloWorldTest: 'helloWorldTest'}
    const snakeCaseObject = {hello_world: 'helloWorld', hello_world_test: 'helloWorldTest'}
    expect(camelCaseObjectKeysToSnakeCase(camelCaseObject)).toStrictEqual(snakeCaseObject)
  })
  test('snakeCaseToCamelCase', () => {
    expect(snakeCaseToCamelCase('hello_world')).toBe('helloWorld')
    expect(snakeCaseToCamelCase('hello_world_test')).toBe('helloWorldTest')
  })
  test('snakeCaseObjectKeysToCamelCase', () => {
    const snakeCaseObject = {hello_world: 'helloWorld', hello_world_test: 'helloWorldTest'}
    const camelCaseObject = {helloWorld: 'helloWorld', helloWorldTest: 'helloWorldTest'}
    expect(snakeCaseObjectKeysToCamelCase(snakeCaseObject)).toStrictEqual(camelCaseObject)
  })
  test('handleAsyncFunction succeed', async () => {
    const res = await handleAsyncFunction(async () => new Promise(resolve => resolve('success')))
    expect(res).toBe('success')
  })
  test.fails('handleAsyncFunction fails', async () => {
    const res = await handleAsyncFunction(async () => {throw new Error('error')})
    expect(res).toThrowError('error')
  })
})
