var models = require('../../../models');

exports.index = function(req, res, next) {
  models.Todo.all().then(todos => {
    res.json({ todos: todos });
  });
}

exports.show = function(req, res, next) {
  models.Todo.findById(req.params.id).then(todo => {
    res.json({ todo: todo })
  });
}
