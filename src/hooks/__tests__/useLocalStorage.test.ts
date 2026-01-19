import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import useLocalStorage from '../useLocalStorage'

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  it('initializes with default value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
    expect(result.current[0]).toBe('default')
  })

  it('saves and retrieves values from localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
    
    act(() => {
      result.current[1]('new value')
    })
    
    expect(result.current[0]).toBe('new value')
    expect(localStorage.getItem('test-key')).toBe('"new value"')
  })

  it('handles complex objects', () => {
    const testObject = { name: 'test', count: 1 }
    const { result } = renderHook(() => useLocalStorage('object-key', {}))
    
    act(() => {
      result.current[1](testObject)
    })
    
    expect(result.current[0]).toEqual(testObject)
    expect(localStorage.getItem('object-key')).toBe(JSON.stringify(testObject))
  })

  it('handles function updates', () => {
    const { result } = renderHook(() => useLocalStorage('count-key', 0))
    
    act(() => {
      result.current[1]((prev) => prev + 1)
    })
    
    expect(result.current[0]).toBe(1)
    expect(localStorage.getItem('count-key')).toBe('1')
  })

  it('loads existing values from localStorage', () => {
    localStorage.setItem('existing-key', '"existing value"')
    
    const { result } = renderHook(() => useLocalStorage('existing-key', 'default'))
    
    expect(result.current[0]).toBe('existing value')
  })

  it('handles invalid localStorage data', () => {
    localStorage.setItem('invalid-key', 'invalid json')
    
    const { result } = renderHook(() => useLocalStorage('invalid-key', 'default'))
    
    expect(result.current[0]).toBe('default')
  })
})