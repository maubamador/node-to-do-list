

const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/todo');


let comando = argv._[0];

switch (comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripccion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log('======Por Hacer====='.green);
            console.log(tarea.descripccion);
            console.log('Estado', tarea.completado);
            console.log('======================'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripccion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripccion);
        break;
    default:
        console.log('comando no reconocido');
}

