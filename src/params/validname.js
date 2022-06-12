/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  if (param !== 'willy.' && param !== 'wasteof.money') {
    return /^[a-z0-9_\\-]{1,20}$/.test(param);
  } else {
    return true
  }
}