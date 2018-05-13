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

exports.create = function(req, res, next) {
  models.Todo.create({
    title: req.body.title,
    description: req.body.description
  }).then(newTodo => {
    res.status(201).json({ todo: newTodo })
  });
};

exports.update = function(req, res, next) {
  models.Todo.findById(req.params.id).then(todo => {
    todo.update({
      title: req.body.title,
      description: req.body.description
    });
    res.status(204).send();
  });
}

exports.destroy = function(req, res, next) {
  models.Todo.destroy({
    where: { id: req.params.id }
  }).then(todo => {
    res.status(204).json({})
  });
};
