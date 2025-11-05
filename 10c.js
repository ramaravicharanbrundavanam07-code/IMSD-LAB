const fs = require('fs');

// Read the existing file
fs.readFile('src.txt.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        process.exit(1);
    }

    console.log('File content:', data);
    const http = require('http');
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } else if (req.url === "/about") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("About Page");
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page Not Found");
        }

    });
    server.listen(3000, () => {
        console.log("Server running at http://localhost:3000/");
    })
});

