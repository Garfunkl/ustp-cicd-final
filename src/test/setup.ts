import '@testing-library/jest-dom'
import { vi } from 'vitest'  // ← Import vi from vitest

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // ← Use vi.fn() instead of jest.fn()
    removeListener: vi.fn(), // ← Use vi.fn()
    addEventListener: vi.fn(), // ← Use vi.fn()
    removeEventListener: vi.fn(), // ← Use vi.fn()
    dispatchEvent: vi.fn(), // ← Use vi.fn()
  }),
})

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({  // ← Use vi.fn()
  observe: vi.fn(),  // ← Use vi.fn()
  unobserve: vi.fn(),  // ← Use vi.fn()
  disconnect: vi.fn(),  // ← Use vi.fn()
}))

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({  // ← Use vi.fn()
  observe: vi.fn(),  // ← Use vi.fn()
  unobserve: vi.fn(),  // ← Use vi.fn()
  disconnect: vi.fn(),  // ← Use vi.fn()
}))

// Mock crypto.randomUUID if not available
if (!global.crypto?.randomUUID) {
  Object.defineProperty(global.crypto, 'randomUUID', {
    value: () => Math.random().toString(36).substr(2, 9),
  })
}