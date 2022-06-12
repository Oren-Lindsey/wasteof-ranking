/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  if (param.toLowerCase() !== 'willy.' && param.toLowerCase() !== 'wasteof.money') {
    return /^[a-z0-9_\\-]{1,20}$/.test(param.toLowerCase());
  } else {
    return true
  }
}