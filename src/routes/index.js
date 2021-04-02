const { Router } = require('express');
const router = Router();
const TasksCtrl = require('../controllers/tasksController');

router.get('/', TasksCtrl.tasksAll);
router.post('/new-task', TasksCtrl.tasksAdd);
router.delete('/delete-task/:id', TasksCtrl.tasksDelete);
router.put('/do-task/:id', TasksCtrl.tasksDone);
router.put('/undo-task/:id', TasksCtrl.tasksUndo);

module.exports = router;