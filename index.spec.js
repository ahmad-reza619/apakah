const { string, bool, func, num, obj, arr, date, and, or } = require('./index');

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
})

describe('func', () => {
  it('should return true if param is func', () => {
    expect(func(() => {})).toBe(true);
  })
  it('should return false if param is not func', () => {
    expect(func(1)).toBe(false);
    expect(func('aaa')).toBe(false);
    expect(func(false)).toBe(false);
    expect(func({})).toBe(false);
    expect(func([1, 2])).toBe(false);
  })
})

describe('num', () => {
  it('should return true if param is num', () => {
    expect(num(12)).toBe(true);
  })
  it('should return false if param is not num', () => {
    expect(num(() => {})).toBe(false);
    expect(num('aaa')).toBe(false);
    expect(num(false)).toBe(false);
    expect(num({})).toBe(false);
    expect(num([1, 2])).toBe(false);
  })
})

describe('obj', () => {
  const schema = {
    hello: string,
  };
  it('should return true if param is obj', () => {
    expect(obj(schema)({
      hello: 'mister',
    })).toBe(true);
  })
  it('should return false if param is not obj', () => {
    const s = {
      test: num,
    }
    expect(obj(s)(() => {})).toBe(false);
    expect(obj(s)('aaa')).toBe(false);
    expect(obj(s)(false)).toBe(false);
    expect(obj(s)(3)).toBe(false);
    expect(obj(s)([1, 2])).toBe(false);
  })
})

describe('arr', () => {
  it('should return true if param is arr', () => {
    expect(arr([])).toBe(true);
  })
  it('should return false if param is not arr', () => {
    expect(arr(() => {})).toBe(false);
    expect(arr('aaa')).toBe(false);
    expect(arr(false)).toBe(false);
    expect(arr(3)).toBe(false);
    expect(arr({})).toBe(false);
  })
})

describe('date', () => {
  it('should return true if param is arr', () => {
    expect(date(new Date())).toBe(true);
  })
  it('should return false if param is not arr', () => {
    expect(date(() => {})).toBe(false);
    expect(date('aaa')).toBe(false);
    expect(date(false)).toBe(false);
    expect(date(3)).toBe(false);
    expect(date({})).toBe(false);
    expect(date([])).toBe(false);
  })
})

const f = () => false;
const t = () => true;

describe('and', () => {
  it('should return true if param is all true', () => {
    expect(and(t, t, t)()).toBe(true);
  })
  it('should return false if param is has false', () => {
    expect(and(t, f, t)()).toBe(false);
  })
})

describe('or', () => {
  it('should return true if param has true', () => {
    expect(or(f, f, t)()).toBe(true);
  })
  it('should return false if param has no true value', () => {
    expect(or(f, f, f)()).toBe(false);
  })
})