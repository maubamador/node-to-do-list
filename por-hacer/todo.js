
const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripccion) =>{

    cargarDB();

    let porHacer = {
        descripccion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer); //Convierte una cadena en formato JSON

    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
        console.log('The file has been saved!');
      });
}

const cargarDB = () =>{

    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripccion, completado) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex( desc =>  desc.descripccion === descripccion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}

const borrar = descripccion =>{
    cargarDB();
    let removed = listadoPorHacer.filter( desc =>  desc.descripccion !== descripccion);
    listadoPorHacer = removed;
    guardarDB();
    return true;
} 

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}