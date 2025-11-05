// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('JAI BABU\n'.repeat(10));
// });
// server.listen(5000, () => {
//     console.log("Server Running at http://localhost:5000/");

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("JAI BABU");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});


server.listen(3000, '0.0.0.0', () => {
    console.log("Server running at http://10.50.43.206:3000/");
});