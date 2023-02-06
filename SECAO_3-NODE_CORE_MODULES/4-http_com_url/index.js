// 
const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {

    // Resgatando url
    const urlInfo = require('url').parse(req.url, true);

    const name = urlInfo.query.name;

    res.statusCode = 200;

    // Habilitando envio de html
    res.setHeader('contenty-Type', 'text/html');

    if (!name) {
        res.end(`
            <h1>Preencha seu nome:</h1>
   
            <form method="GET">
                <input type="text" name="name" />
                <input type="submit" value="Enviar" />
            </form>
        `);
    }
    else {
        res.end(`
            <h1>Seja bem-vindo ${name}!</h1>`
        );
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`); 
});