const TasksService = require('../services/tasksService');

module.exports = class TasksCtrl {

    // obtener todas las tareas
    static async tasksAll(req, res) {
        try {
            const data = await TasksService.tasksAll();
            res.render('home', {title: 'Simple ToDo - NodeJS + Firebase', script: 'home.js', tasks: data});
        } catch (e) {
            console.log(e.message);
            res.status(413).send(e.message);
        }
    }

    // nueva tarea
    static async tasksAdd(req, res) {
        try {
            await TasksService.tasksAdd(req.body.task);
            res.redirect('/');
        } catch (e) {
            console.log(e.message);
            res.status(413).send(e.message);
        }
    }

    // marcar como Realizada
    static async tasksDone(req, res) {
        try {
            await TasksService.tasksDone(req.params.id);
            res.send("Tarea actualizada con exito!");
        } catch (e) {
            console.log(e.message);
            res.status(413).send(e.message);
        }
    }

    // marcar como No-realizada
    static async tasksUndo(req, res) {
        try {
            await TasksService.tasksUndo(req.params.id);
            res.send("Tarea actualizada con exito!");
        } catch (e) {
            console.log(e.message);
            res.status(413).send(e.message);
        }
    }

    // borrar tarea
    static async tasksDelete(req, res) {
        try {
            await TasksService.tasksDelete(req.params.id);
            res.send("Tarea eliminada con exito!");
        } catch (e) {
            console.log(e.message);
            res.status(413).send(e.message);
        }
    }
}