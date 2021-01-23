const { string, bool } = require('./index');

describe('string', () => {
  it('should return true if param is string', () => {
    expect(string('wow')).toBe(true);
  })
  it('should return false if param is not string', () => {
    expect(string(1)).toBe(false);
    expect(string(true)).toBe(false);
    expect(string(() => {})).toBe(false);
    expect(string({})).toBe(false);
    expect(string([1, 2])).toBe(false);
  })
  it('should throw if param is not provided', () => {
    expect(() => string()).toThrow();
  })
})

describe('bool', () => {
  it('should return true if param is bool', () => {
    expect(bool(false)).toBe(true);
  })
  it('should return false if param is not bool', () => {
    expect(bool(1)).toBe(false);
    expect(bool('aaa')).toBe(false);
    expect(bool(() => {})).toBe(false);
    expect(bool({})).toBe(false);
    expect(bool([1, 2])).toBe(false);
  })
  it('should throw if param is not provided', () => {
    expect(() => bool()).toThrow();
  })
})