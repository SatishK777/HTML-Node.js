const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controller');

router.get('/',controllers.defaultController);
router.post('/addTodo', controllers.addTodoController);
router.get('/editTodo/:id', controllers.editTodoController);
router.post('/updateTodo', controllers.updateTodoController);


module.exports = router;

