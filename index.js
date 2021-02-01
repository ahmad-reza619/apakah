const string = p => typeof p === 'string';
const bool = p => typeof p === 'boolean';
const func = p => typeof p === 'function';
const num = p => typeof p === 'number';
const arr = p => p instanceof Array;
const date = p => p instanceof Date;
const obj = schema => p => {
  const keyVal = Object.entries(schema);
  return keyVal.every(([key, validator]) => {
    const isValid = validator(p[key]);
    return isValid;
  });
}
const or = (...params) => v => params.some(func => func(v));
const and = (...params) => v => params.every(func => func(v));

module.exports = {
  string,
  obj,
  bool,
  func,
  num,
  arr,
  date,
  or,
  and,
}