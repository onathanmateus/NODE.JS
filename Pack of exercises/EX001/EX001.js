const http = require ("http");
const fs = require ("fs");
const path = require ("path");

const server = http.createServer((req, res)=>{
  fs.readFile(path.resolve(__dirname, "EX001.html"), (err, arquivo)=>{
    res.writeHead(200, {"Content-Type":"text/html"})
    res.write(arquivo)
    return res.end()
  })
});
server.listen(3000, ()=>{console.log("Servidor rodando !!!")});