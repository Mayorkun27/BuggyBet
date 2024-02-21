let http = require('http');
let fs = require('fs');
let path = require('path');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
          fs.readFile(path.join(__dirname, 'src' , 'index.html'), "utf-8", (err, data) => {
               if (err) {
                    res.writeHead(404, { "Content-Type":"text/plain" })
                    res.end(`Error 4040: File not found!`)
               } else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(data);
               }
          })
    }
    if (req.url == "/style.css") {
          fs.readFile(path.join(__dirname, 'src', 'style.css'), (err, data)  => {
               if (err) {
                    res.writeHead(404, { "Content-Type":"text/plain" })
                    res.end(`Error 4040: File not found!`)
               } else {
                    res.writeHead(200, {"Content-Type": "text/css"});
                    res.end(data);
               }
          })
     }
});

const port = 9999
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});