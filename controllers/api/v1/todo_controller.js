var models = require('../../../models');

exports.index = function(req, res, next) {
  models.Todo.all().then(todos => {
    res.json({ todos: todos });
  });
}
