import { getInitials } from "../getInitials";

// Assuming getInitials.js is in the same directory
describe('getInitials', () => {
  test('should return correct initials for a two-word name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  test('should return correct initial for a single word name', () => {
    expect(getInitials('Alice')).toBe('A');
  });

  test('should handle names with leading/trailing spaces', () => {
    expect(getInitials('  Bob  ')).toBe('B');
  });

  test('should handle names with multiple spaces between words', () => {
    expect(getInitials('Charlie   Brown')).toBe('CB');
  });

  test('should return an empty string for an empty input string', () => {
    expect(getInitials('')).toBe('');
  });


  test('should correctly handle hyphenated names (splitting by space)', () => {
    expect(getInitials('Jean-Luc Picard')).toBe('JP');
  });
});