
const descripcion = {
        demand: true,
        alias: 'd',
    };

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
            .command('crear', 'Crear un elemento TO DO', {
                descripcion
            })
            .command('actualizar', 'actualiza el estado completado de una tarea', {
                descripcion,
                completado
            })
            .command('borrar', 'Borrar el elemento de las tareas Por hacer', {
                descripcion
            })
            .command('listar', 'Muestra la lista de tareas por hacer', {
                completado
            })
            .help()
            .argv;


module.exports = {
    argv
}