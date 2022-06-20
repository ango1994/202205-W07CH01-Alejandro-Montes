import fs from 'fs/promises';
import http from 'http';
import url, { URLSearchParams } from 'url';

const PORT = process.env.PORT || 3204;

http.createServer(function (req, res) {
    const path = url.parse(req.url as string).search;
    const params = new URLSearchParams(path as string);

    const num2 = params.get('num2');
    const num1 = params.get('num1');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`${+num1 + +num2}`);
}).listen(PORT);
