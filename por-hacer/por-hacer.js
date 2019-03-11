const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, err =>{
        if(err)  throw err;

        console.log('Archivo de datos actualizado');
    })
}

const cargarDB = () =>{

    try{
        listadoPorHacer =  require('../db/data.json');
    }catch (error){
        listadoPorHacer = [];
    }
    
}

const getListado = (completado) => {

    cargarDB();

    return listadoPorHacer.filter(tareas => tareas.completado === JSON.parse(completado));
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else return false;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.filter( tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (index.length === listadoPorHacer.length) {
        return false;
    }
    else {
        listadoPorHacer = index;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}