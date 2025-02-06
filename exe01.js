// printar os parametros passados por linha comando
const parametros = process.argv.slice(2).join(" "); // é um array contendo todos os argumentos passados na linha de comando

if (!parametros) {
    console.log("Nenhum parâmetro foi passado!");
    process.exit(1); // encerra o processo com erro
}

console.log("Frase capturada:", parametros); // printa a frase capturada