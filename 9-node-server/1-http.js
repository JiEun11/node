const http = require('http');
// const http2 = require('http2');  //https

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res)=> {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.write('Welcome!');
    res.end();
});

server.listen(8080);