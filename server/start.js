const babel = require('babel-register');

babel({
  presets: ['env']
});

module.exports = require('../app.js');
