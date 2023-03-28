import {assign, mergeNestedObject} from '../../../src/utils/toolbox'
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
})
