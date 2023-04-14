let fs = require('fs');
let http = require('http');
let url = require('url')

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}

let callback = function(request, response){

    let parts = url.parse(request.url);

    if(parts.path == "/abertura/tipoJson"){
        readFile(response, "./recursos/arquivo.json")
        response.writeHead(200, {"Content-type": 'application/json; charset=utf-8;'});
    }else if(parts.path == "/abertura/tipoJpeg"){
        readFile(response, "./recursos/arquivo.jpeg")
        response.writeHead(200, {"Content-Type": 'image/jpeg'});
    }else if(parts.path == "/abertura/tipoMp3"){
        readFile(response, "./recursos/arquivo.mp3")
        response.writeHead(200, {"Content-Type": 'audio/mpeg'});
    }else if(parts.path == "/abertura/tipoMp4"){
        readFile(response, "./recursos/arquivo.mp4")
        response.writeHead(200, {"Content-Type": 'video/mp4'});
    }else if(parts.path == "/abertura/tipoMd"){
        readFile(response, "./recursos/arquivo.md")
        response.writeHead(200, {"Content-Type": 'text/markdown'});
    }else if(parts.path == "/abertura/tipoDocx"){
        readFile(response, "./recursos/arquivo.docx")
        response.writeHead(200, {"Content-Type": 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
    }else if(parts.path == "/abertura/tipoPdf"){
        readFile(response, "./recursos/arquivo.pdf")
        response.writeHead(200, {"Content-type": 'application/pdf'});
    }else{
        readFile(response, "./recursos/404.html")
        response.writeHead(200, {"Content-type": 'text.html; charset=utf-8;'});
    }
};
let server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado ...")