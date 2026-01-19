// import { describe, it, expect } from '@jest/globals';
import { formatDate, formatCurrency } from '../formatting';

describe('Formatting Utilities', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15');
      expect(formatDate(date)).toBe('January 15, 2024');
    });

    it('handles invalid dates', () => {
      expect(formatDate(null)).toBe('');
      expect(formatDate(undefined)).toBe('');
    });
  });

  describe('formatCurrency', () => {
    it('formats currency with default USD', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('formats currency with different currency codes', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
      expect(formatCurrency(1234.56, 'GBP')).toBe('£1,234.56');
    });

    it('handles zero values', () => {
      expect(formatCurrency(0)).toBe('$0.00');
    });
  });
});