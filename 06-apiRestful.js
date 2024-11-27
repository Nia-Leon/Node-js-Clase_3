const express = require('express');
const app = express();
app.use(express.json()); // incorporado para procesar cuerpos JSON

let usuarios = [
    { id: 1, nombre: 'Nia', email: 'nia@gmail.com'},
    { id: 2, nombre: 'Juan', email: 'juan@gmail.com'},
    { id: 3, nombre: 'Felipe', email: 'felipe@gmail.com'},

];

//Obtener todo los usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

//Obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuario no encontrado');
    res.json(usuario);
});

//Crear un nuevo usuario 
app.post('/usuarios', (req, res) => {
    const nuevoUsuario = { id: usuarios.length +1, nombre: req.body.nombre, email: req.body.email };
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

//Actualizar un usuario 
app.put('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuario no encontrado');
    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    res.json(usuario);
});

//Eliminar un usuario 
app.delete('/usuarios/:id', (req, res) => {
    const usuario = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (usuario === -1) return res.status(404).send('Usuario no encontrado');
    const usuarioEliminado = usuarios.splice(usuario, 1);
    res.json(usuarioEliminado);
});

























app.listen(3001, () => console.log('Servidor API RESTFul en http://localhost:3001'));