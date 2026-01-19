import { renderHook, act } from '@testing-library/react';
// import { describe, it, expect } from '@jest/globals';
import useLocalStorage from '../useLocalStorage';

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with default value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('saves and retrieves values from localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    
    act(() => {
      result.current[1]('new value');
    });
    
    expect(result.current[0]).toBe('new value');
    expect(localStorage.getItem('test-key')).toBe('"new value"');
  });

  it('handles complex objects', () => {
    const testObject = { name: 'test', count: 1 };
    const { result } = renderHook(() => useLocalStorage('object-key', {}));
    
    act(() => {
      result.current[1](testObject);
    });
    
    expect(result.current[0]).toEqual(testObject);
  });
});