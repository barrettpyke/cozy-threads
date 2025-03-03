import { formatCentsToDollars } from './currency';

describe('formatCentsToDollars', () => {
  it('should format cents to dollars correctly', () => {
    expect(formatCentsToDollars(100)).toBe('$1.00');
    expect(formatCentsToDollars(5000)).toBe('$50.00');
    expect(formatCentsToDollars(12345)).toBe('$123.45.00');
    expect(formatCentsToDollars(0)).toBe('$0.00');
    expect(formatCentsToDollars(99)).toBe('$0.99.00');
  });
});
