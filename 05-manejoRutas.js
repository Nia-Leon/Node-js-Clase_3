const express = require('express');
const app = express();

//Ruta Basica
app.get('/usuarios', (req, res) =>{
    res.send('Listado de Usuarios');
});

//Rutas Dinamicas
app.get('/usuarios/:id', (req, res) =>{
    const idUsuario = req.params.id
    res.send(`Datos del usuario con ID ${idUsuario}`)
});

//Ruta con parametros Opcionales
app.get('/usuario/:id?', (req, res) =>{
    const idUsuario = req.params.id;
    if(idUsuario){
        res.send(`Datos del usuario con ID ${idUsuario}`);
    }else{
        res.send(`Otro Listado de usuarios`);
    }
    
});

// persona.segundoNombre? parametros opcionales

//Ruta con multiples parametros
app.get('/usuario/:id/tarea/:idTarea', (req, res) => {
    const idUsuario = req.params.id;
    const idTarea = req.params.idTarea;
    res.send(`Datos de la tarea ${idTarea} del usuario con  ID ${idUsuario}`);
});

//Por categoria ver cantidad de productos
app.get('/categoria/:idCategoria/producto/:idProducto/cantidad/:cantidad', (req, res) => {
    const idCategoria = req.params.idCategoria;
    const idProducto = req.params.idProducto;
    const cantidadProductos = req.params.cantidad;

    res.send(`La cantidad ${cantidadProductos} es del Producto ID ${idProducto}, de la categoria ${idCategoria} `);
});

//Ruta con parametros de Consultas
app.get('/usuarios',(req, res) => {
    const idUsuario = req.query.id;
    if (idUsuario){
        res.send(`Datos del usuario con ID ${idUsuario}`);
    }else{
        res.send(`Otro Listado de Usuario`);
    }
});
app.listen(3001, () => console.log('Servidor escuchando en http://localhost:3001'));
