const assert = require('assert');
const queryparam = require('../index');

describe('queryparam', () => {
  it('sends an array of the matching params', () => {
    const param = queryparam('foo', 'http://bar.baz?foo=123&foo=456&bar=789');

    assert.deepEqual(param, ['123', '456']);
  });

  it('returns an empty array', () => {
    const param = queryparam('foo', 'http://foo.bar?baz=123');

    assert.deepEqual(param, []);
  });

  it('uses window', () => {
    global.window = {
      location: {
        href: 'http://foo.bar?baz=123'
      }
    }
    const param = queryparam('baz');

    assert.deepEqual(param, ['123']);
  });
});
