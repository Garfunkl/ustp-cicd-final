import { describe, it, expect } from 'vitest'

describe('Basic Format Tests', () => {
  it('should format a basic string', () => {
    const result = 'hello'.toUpperCase()
    expect(result).toBe('HELLO')
  })

  it('should handle empty string', () => {
    const result = ''.trim()
    expect(result).toBe('')
  })
})