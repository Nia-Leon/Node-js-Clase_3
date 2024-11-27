const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hola, Mundo desde Node.js');
});

server.listen(3004, () =>{
    console.log('Servidor escuchando http://localhost:3004')
});
