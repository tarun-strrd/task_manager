const express=require('express');
const router = express.Router();
const {GetAllTasks, CreateTask, GetTask, UpdateTask, DeleteTask} = require('../controllers/tasks.js');
router.route('/').get(GetAllTasks).post(CreateTask);
router.route('/:id').get(GetTask).patch(UpdateTask).delete(DeleteTask);

module.exports = router;