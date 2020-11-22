const descripccion = {
    demand: true,
    alias: 'd',
    desc: 'Descripccion de la tarea por hacer'
}

const completado = {
    default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {descripccion})
    .command('actualizar', 'actualiza el estado completado', {descripccion, completado})
    .command('borrar', 'Elimina la tarea' , {descripccion})
    .help()
    .argv;


module.exports = {
    argv
}