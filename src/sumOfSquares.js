'use strict';

const { sum } = require('./sum');
const { square } = require('./square');

const sumOfSquares = (x, y) => sum(square(x), square(y));

module.exports = { sumOfSquares };
