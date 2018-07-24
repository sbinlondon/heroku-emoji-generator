const http = require('http');

const router = require('./router');

const server = http.createServer(router);

const port = 8000;

server.listen(port);

console.log(`Server is up and running at localhost:${port}`) 
