
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dexswapsdk.cjs.production.min.js')
} else {
  module.exports = require('./dexswapsdk.cjs.development.js')
}
