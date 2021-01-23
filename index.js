const emptyParamMiddleware = callback => p => {
  if (typeof p === 'undefined') {
    throw new Error('no param provided');
  }
  return callback(p);
}

const string = emptyParamMiddleware(p => typeof p === 'string');
const bool = emptyParamMiddleware(p => typeof p === 'boolean');
const func = emptyParamMiddleware(p => typeof p === 'function');
const num = emptyParamMiddleware(p => typeof p === 'number');
const obj = emptyParamMiddleware(p => {
  const keyVal = Object.entries(p);
  return keyVal.every(([key, validator]) => {
    const isValid = validator(p[key]);
    return isValid;
  });
})

module.exports = {
  string,
  obj,
  bool,
  func,
  num,
}