## Creación de un Programa CLI para la Gestión de Tareas

En este desafío, vamos a desarrollar un programa de línea de comandos (CLI) utilizando Node.js para la gestión de tareas.

_Una interfaz de línea de comandos (CLI) es una forma de interactuar con programas y sistemas operativos mediante comandos de texto. Esta herramienta resulta muy eficaz para acelerar tareas, especialmente para desarrolladores y administradores de sistemas._

### Iteración 0

1. Realiza un "Fork" y "Clona" el repositorio.
2. Asegúrate de que Node.js esté instalado en tu sistema utilizando el comando `node -v`.
3. Comprueba la siguiente configuración en el `package.json`. Esto registra un nombre de comando para nuestro programa CLI (task).

```javascript
{
 "name": "task",
 "version": "1.0.0",
 "bin": {
   "task": "index.js"
 }
}
```

En la sección `bin`, asociamos el nombre con el que ejecutaremos nuestro programa al archivo que contiene su código fuente, en este caso, `index.js`.

4. Se ha proporcionado un código base en `index.js` que servirá como punto de partida para implementar la funcionalidad del programa. A lo largo de las iteraciones, desarrollarás la lógica que permitirá a los usuarios gestionar sus tareas desde la línea de comandos.

La primera línea del código es un "hashbang", que le indica al sistema operativo qué intérprete usar al ejecutar el script:

```javascript
#!/usr/bin/env node
```

5. El siguiente paso es instalar el programa CLI en tu sistema para poder ejecutarlo desde cualquier ubicación. Para hacerlo, crearemos un enlace simbólico, que actúa como referencia al archivo principal del programa:

```bash
npm link
```

6. Si el enlace simbólico se ha generado correctamente, deberías poder ejecutar nuestro programa CLI de la siguiente manera:

```bash
task -v
```

Si la configuración es correcta, esta ejecución mostrará la versión del programa en la salida. 7. Finalmente, ejecuta el comando `task --help` para ver la funcionalidad esperada del programa en la salida. Tu objetivo es implementar toda esta funcionalidad a partir del código base proporcionado, pero lo haremos paso a paso:

```bash
task --help
```

## Iteración 1

Comencemos por crear la lógica para nuestro gestor de tareas. Lo haremos mientras entendemos la base de código proporcionada y algunas características de Node.js.

Para recibir las entradas del usuario, utilizaremos el objeto global `process`. Con `process.argv`, que es un array que contiene los argumentos de la línea de comandos pasados al proceso actual durante la ejecución. Puedes acceder a estos argumentos como muestra el siguiente ejemplo:

```javascript
// app.js
console.log(process.argv)
```

Si ejecutamos este script con el comando:

```bash
node app.js arg1 arg2
```

La salida en la consola de `app.js` mostrará:

```bash
['/path/to/node', '/path/to/app.js', 'arg1', 'arg2']
```

\- [0] es la ruta al ejecutable de Node.js.
\- [1] es la ruta al script ejecutado.
\- [2] es el primer argumento.
\- [3] es el segundo argumento.

Podemos pasar tantos argumentos como deseemos, separados por espacios, y se agregarán a este array. El programa asume que todo lo que coloques después del nombre del comando son argumentos.

```bash
task new "Mi primera tarea"
```

Pero vamos paso a paso. Antes de crear tareas, comenzaremos mostrando las tareas existentes.

Se han incluido algunas tareas de inicio en el archivo `data.json`.

Cada tarea contiene:

- `id`: una marca de tiempo ([timestamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)) del momento en que se generó la tarea.
- `body`: el contenido de la tarea.

1. Implementa la función `getTasks()` para que el comando `task list` devuelva la siguiente salida en la consola con el formato especificado. Las tareas deben estar ordenadas por fecha en orden decreciente:

```bash

20 NOV 13:40: Completar la presentación del proyecto
19 NOV 11:0: Hacer las compras de la tienda de comestibles
18 NOV 8:20: Llamar al cliente para discutir los detalles del proyecto
```

2. Implementa la función `getTask(id)` para que el comando `task show <taskId>` devuelva una tarea específica según el ID pasado como argumento. El formato de salida debe ser:

```bash
ID: #1637412000000

20 NOV 13:40: Completar la presentación del proyecto
```

## Iteración 2

Ahora, continuaremos con la capa de persistencia.

1. El siguiente paso es obtener la data en un objeto nativo de javascript para manejarla desde el script. Asegurate de que el script obtiene la data antes de que necesite usarla.

Siéntete libre de usar `console.log`tanto como necesites para comprender la base de código.

Utilizaremos este archivo `data.json` y el módulo `fs` para actuar como nuestra base de datos y almacenar las tareas.

Para que nuestro programa guarde en disco los cambios en los datos, implementaremos una función `saveData()` que utilizará el módulo `fs` para trabajar con el sistema de archivos.

2. Incluye el módulo `fs` para utilizar su funcionalidad en el script.

3. Implementa una función `saveData(newData)` que admita una estructura de datos como parámetro. Esta función se utilizará para sobrescribir el contenido del archivo JSON con los nuevos cambios.

4. Implementa la función `clearTasks()` que se invocará con el comando `task clear` para eliminar todas las tareas predefinidas. **NOTA**: Este comando debe guardar los cambios en disco utilizando la función `saveData(newData)` previamente implementada.

### Iteración 3

Ahora, completaremos las operaciones de Crear, Leer, Actualizar y Borrar ([CRUD](https://www.codecademy.com/article/what-is-crud) para las tareas y aseguraremos que se guarden los cambios en el archivo `data.json`.

1. `createTask(body)`: Esta función recibe un string con el cuerpo de la nueva tarea y generará una nueva tarea con el `id` correspondiente.

2. `updateTask(id, body)`: Recibe un número de `id` y un string con el nuevo cuerpo de la tarea que se debe actualizar. La función debe identificar el registro correspondiente y guardar el cambio.

3. `deleteTask(id)`: Recibe el `id` y borra el registro correspondiente.

¡Happy coding!
