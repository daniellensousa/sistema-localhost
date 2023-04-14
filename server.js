const index = require(".");

require("dotenv").config({path:"variables.env" });

index.set("port", process.env); 
const server = index.listen(index.get("port"), () => {
    
    console.log("Servidor Rodando na porta: " + server.address().port)
})