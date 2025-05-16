import { describe, test, expect } from 'vitest'
import { Addition } from '../src/index.js'

describe('Unitary test', () => {
    test('1 + 1 = 2', () => {
        expect(Addition(1,1)).toBe(2)
    })
})