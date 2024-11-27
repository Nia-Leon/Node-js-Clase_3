// const express = require('express');
// const app = express();
// app.use(express.json());

// let tareas = [];

// app.get('/tareas', (req, res) => {
//     res.json(tareas);
// });

// app.post('/tareas', (req, res) => {
//     const tarea = { id: tareas.length + 1, descripcion: req.body.descripcion };
//     tareas.push(tarea);
//     res.status(201).json(tarea);
// });

// app.listen(3000, () => // console.log('API de tareas escuchando en http://localhost:3000'));

// EJEMPLO 2

const express = require('express');
const app = express();
app.use(express.json());
 
const usuarioRouter = express.Router();
const tareaRouter = express.Router({ mergeParams: true });
 
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Felipe' }
];
 
const tareas = {
    1: { id: 1, descripcion: 'Comprar pan' },
    2: { id: 2, descripcion: 'Leer un libro' },
    3: { id: 3, descripcion: 'Jugar en el Parque' }
};
 
usuarioRouter.get('/', (req, res) => {
    res.json(usuarios);
});
 
tareaRouter.get('/', (req, res) => {
    const userId = req.params.id;
    res.json(tareas[userId] || []);
});
 
app.use('/usuarios', usuarioRouter);
usuarioRouter.use('/:id/tareas', tareaRouter);

app.use('/usuarios/1', usuarioRouter);
usuarioRouter.use('/:id/', tareaRouter);

app.use('/usuarios/2', usuarioRouter);
usuarioRouter.use('/:id', tareaRouter);

app.use('/usuarios/3', usuarioRouter);
usuarioRouter.use('/:id', tareaRouter);
 
app.listen(3001, () => console.log('Servidor escuchado en http://localhost:3001'));
