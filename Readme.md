# queryparam

## Install

```
npm install queryparam
```

## Usage

```js
const queryparam = require('queryparam');
const fooParams = queryparam('foo', 'http://www.example.com?foo=bar&foo=baz'); // [ 'bar', 'baz' ]
```

## API

### `queryparam(param, url?)`

Returns the query params that matches the `param` parameter in an array.

## License

MIT
