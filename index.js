#!/usr/bin/env node

const args = process.argv
const command = args[2]

function main() {
	switch (command) {
		case '--help':
			showHelp()
			break

		case '--version':
		case '-v':
			showVersion()
			break

		// AQUÍ TU CÓDIGO PARA PROCESAR OTROS COMANDOS

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
	console.log('task v1.0.0')
}

function getTasks() {
	// AQUI TU CÓDIGO
}

function getTaskById(id) {
	// AQUI TU CÓDIGO
}

function saveData(newData) {
	// AQUI TU CÓDIGO
}

function createTask(body) {
	// AQUÍ TU CÓDIGO
}

function updateTask(id, body) {
	// AQUI TU CÓDIGO
}

function deleteTask(id) {
	//AQUÍ TU CÓDIGO
}

function clearTasks() {
	//AQUÍ TU CÓDIGO
}
