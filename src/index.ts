import http from 'http';
import url, { URLSearchParams } from 'url';

const PORT = process.env.PORT || 3204;

export const server = http
    .createServer(function (req, res) {
        const path = url.parse(req.url as string).search;
        const params = new URLSearchParams(path as string);
        const pathName = url.parse(req.url as string).pathname;

        const num2 = params.get('num2');
        const num1 = params.get('num1');

        if (
            pathName !== '/calculator' ||
            !/\d/.test(num1 as string) ||
            !/\d/.test(num2 as string)
        ) {
            res.end('Error 404: not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(
                `<div>Suma</div><p>${num1} + ${num2} = ${
                    Number(num1) + Number(num2)
                }</p>
        <div>Resta</div><p>${num1} - ${num2} = ${
                    Number(num1) - Number(num2)
                }</p>
        <div>Multiplicacion</div><p>${num1} * ${num2} = ${
                    Number(num1) * Number(num2)
                }</p>
        <div>Division</div><p>${num1} / ${num2} = ${
                    Number(num1) / Number(num2)
                }</p>`
            );
        }
    })
    .listen(PORT);
