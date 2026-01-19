import { describe, it, expect } from 'vitest'
import { formatDate, formatCurrency, formatNumber, truncateText } from '../formatting'

describe('Formatting Utilities', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15')
      expect(formatDate(date)).toBe('January 15, 2024')
    })

    it('handles null dates', () => {
      expect(formatDate(null)).toBe('')
    })

    it('handles undefined dates', () => {
      expect(formatDate(undefined)).toBe('')
    })
  })

  describe('formatCurrency', () => {
    it('formats currency with default USD', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56')
    })

    it('formats currency with EUR', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56')
    })

    it('formats currency with GBP', () => {
      expect(formatCurrency(1234.56, 'GBP')).toBe('£1,234.56')
    })

    it('handles zero values', () => {
      expect(formatCurrency(0)).toBe('$0.00')
    })

    it('handles negative values', () => {
      expect(formatCurrency(-123.45)).toBe('-$123.45')
    })
  })

  describe('formatNumber', () => {
    it('formats basic numbers', () => {
      expect(formatNumber(1234.56)).toBe('1,234.56')
    })

    it('formats with custom options', () => {
      expect(formatNumber(0.1234, { minimumFractionDigits: 2, maximumFractionDigits: 2 })).toBe('0.12')
    })

    it('formats large numbers', () => {
      expect(formatNumber(1000000)).toBe('1,000,000')
    })
  })

  describe('truncateText', () => {
    it('truncates long text', () => {
      expect(truncateText('This is a very long text', 10)).toBe('This is a...')
    })

    it('returns original text if shorter than max', () => {
      expect(truncateText('Short', 10)).toBe('Short')
    })

    it('handles exact length', () => {
      expect(truncateText('Exact', 5)).toBe('Exact')
    })

    it('handles empty string', () => {
      expect(truncateText('', 10)).toBe('')
    })
  })
})