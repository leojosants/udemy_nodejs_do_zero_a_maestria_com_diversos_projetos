
const Task = require('../models/Task');

//  CRIANDO MÓDULO SEM INSTANCIAR OBJETOS
module.exports = class TaskController { static createTask(req, res) { res.render('tasks/create') } }