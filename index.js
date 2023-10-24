#!/usr/bin/env node

const args = process.argv
const command = args[2]
console.log('Hola ' + process.argv[2])

const fs = require('fs')
const data = require('./data.json')
const package = require('./package.json')
console.log(data);
console.log(package);


function main() {
	switch (command) {
		case '--help':
			showHelp()
			break

		case '--version':
		case '-v':
			showVersion()
			break

		case '--getNew':
		case '-gn':
			createTask()
			break

		case '--getList':
		case '-gl':
			getTasks()
			break

		case '--getTaskId':
		case '-gti':
			getTaskById()
			break

		case '--getSaveUpdate':
		case '-gs':
			saveData()
			break
			
		case '--getUpdate':
		case '-gu':
			updateTask()
			break

		case '--getDelete':
		case '-gd':
			deleteTask()
			break

		case '--getClear':
		case '-gc':
			clearTasks()
			break

		default:
			console.log(args)
			console.error('comando no definido')
	}
}

main()

function showHelp() {
	console.log('Uso: task <comando>')
	console.log('')
	console.log('Comandos disponibles:')
	console.log('  new <task>: Crear una nueva tarea')
	console.log('  list: Listar todas las tareas')
	console.log('  show <taskId>: Obtener una tarea por su ID')
	console.log('  update <taskId> <taskBody>: Actualizar una tarea')
	console.log('  delete <taskId>: Eliminar una tarea')
	console.log('  clear: Eliminar todas las tareas')
}



function showVersion() {
	//todo enseña la versión
	console.log('task v1.0.0')
}
//! -gl
function getTasks() {
	const lista = JSON.parse(JSON.stringify(data))
	//todo lista de todas las tareas
	console.log('getTasks');
}
//! -gti
function getTaskById(id) {
	//todo obtener una tarea por su ID
	console.log('getTaskById');
}
//! -gs
function saveData(newData) {
	const newData1 = fs.readFileSync('./data.json', 'utf8')
	console.log(newData1);

	//todo guarda un nuevo data
	console.log('saveData');
}
//! -gn
function createTask(body) {
	//todo crea una nueva tarea
	console.log('createTask');
}
//! -gu
function updateTask(id, body) {
	//todo update una task
	console.log('updateTask');
}
//! -gd
function deleteTask(id) {
	//todo elimina UNA tarea
	console.log('deleteTask');
}
//! -gc
function clearTasks() {
	//todo elimina TODAS las tareas
	console.log('getclearTasksTaskById');
}
