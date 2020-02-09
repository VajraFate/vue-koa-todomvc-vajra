require('babel-core/register')({
  presets: [
    [
      'env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
});
require('./app.js');
// require('./server/controllers/todolist');
