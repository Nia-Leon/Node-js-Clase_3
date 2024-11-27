const http = require('http');
const url = require('url');

const server = http.createServer( (req, res) => {
    const parsedUrl = url.parse(req.url, true); // url.parse() para descomponer la URL
    const name = parsedUrl.query.nombre || "Visitante";

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bienvenido a la pagina principal');
    } else if (parsedUrl.pathname === '/usuario') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hola, ${name}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Pagina no encontrada');
    }
});

server.listen(3001, () => {
    console.log('Servidor escuchando en http://localhost:3001');
});
