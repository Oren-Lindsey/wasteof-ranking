/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return /^[a-z0-9_\\-]{1,20}$/.test(param);
  }