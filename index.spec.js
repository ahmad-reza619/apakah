const { string } = require('./index');
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
    expect(string(null)).toBe(false);
  })
  it('should return false if param is not provided', () => {
    expect(string()).toThrow();
  })
})