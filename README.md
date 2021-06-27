# next-get2get
> Get paths one by one.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-get2get
```

## usage
```js
import '@jswork/next-get2get';

const e1 = { target: { value: '121' } };
const e2 = { detail: { value: '122' } };
const e3 = 123;
const paths = ['target.value', 'detail.value'];

const res1 = nx.get2get(e1, paths, 'event-value');
const res2 = nx.get2get(e2, paths, 'event-value');
const res3 = nx.get2get(e3, paths, 'event-value');

// '121'
// '122'
// 'event-value'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-get2get/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-get2get
[version-url]: https://npmjs.org/package/@jswork/next-get2get

[license-image]: https://img.shields.io/npm/l/@jswork/next-get2get
[license-url]: https://github.com/afeiship/next-get2get/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-get2get
[size-url]: https://github.com/afeiship/next-get2get/blob/master/dist/next-get2get.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-get2get
[download-url]: https://www.npmjs.com/package/@jswork/next-get2get
