var express = require('express');
var router = express.Router();
var todo_controller = require('../controllers/api/v1/todo_controller.js');

/* GET /api/v1/todos */
router.get('/v1/todos', todo_controller.index);

/* GET /api/v1/todos/:id */
router.get('/v1/todos/:id(\\d+)', todo_controller.show);

/* POST /api/v1/todos */
router.post('/v1/todos', todo_controller.create);

module.exports = router;
