const TasksModel = require('../models/tasksModel');


module.exports = class TasksService {

    // obtener todas las tareas
    static async tasksAll() {
        try {
            const response = await TasksModel.getAllTasks();
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    // nueva tarea
    static async tasksAdd(task) {
        try {
            const newTask = {
                task: task,
                done: false
            };
            const response = await TasksModel.createTask(newTask);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    // marcar como Realizada
    static async tasksDone(id) {
        try {
            const prevData = await TasksModel.getTaskById(id);
    
            const newData = {
                task: prevData.task,
                done: true
            };
        
            const response = await TasksModel.updateTask(id, newData);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    // marcar como No-realizada
    static async tasksUndo(id) {
        try {
            const prevData = await TasksModel.getTaskById(id);
    
            const newData = {
                task: prevData.task,
                done: false
            };
        
            const response = await TasksModel.updateTask(id, newData);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }

    // borrar tarea
    static async tasksDelete(id) {
        try {
            const response = await TasksModel.deleteTask(id);
            return response;
        } catch (e) {
            console.log(e.message);
        }
    }
}