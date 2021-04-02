const db = require("../dbConect");

module.exports = class TasksModel {

    // obtener todas las tareas
    static async getAllTasks() {
        let response = {};
        await db.ref('tasks').once('value', (snapshot) => {
           response = snapshot.val();
        });
        return response;
    }

    // obtener todas las tareas
    static async getTaskById(id) {
        let response = {};
        await db.ref('tasks/' + id).once('value', (snapshot) => {
            response = snapshot.val();
        });
        return response;
    }

    // nueva tarea
    static async createTask(newTask) {
        const response = await db.ref('tasks').push(newTask);
        return response;
    }

    // actualizar una tarea
    static async updateTask(id, newData) {
        const response = await db.ref('tasks/' + id).set(newData);
        return response;
    }

    // borrar tarea
    static async deleteTask(id) {
        const response = await db.ref('tasks/' + id).remove();
        return response;
    }
}