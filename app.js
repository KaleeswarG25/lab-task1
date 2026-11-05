const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        message: 'Hello! CI/CD Pipeline is working!',
        status: 'success',
        application: 'Node.js Demo App'
    }));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
