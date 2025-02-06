const parametros = process.argv.slice(2).join(" ");

if (!parametros) {
    console.log("Nenhum parâmetro foi passado!");
    process.exit(1);
}

// Entrada "Eu tenho 41 anos"

// Saída esperada:
// Letras: 11
// Numeros: 2

let quantidadeLetras = 0;
let quantidadeNumeros = 0;

for (let char of parametros) {
    if (char.match(/[a-zA-Z]/)) {
        quantidadeLetras++; // incrementa a quantidade de letras
    } else if (char.match(/[0-9]/)) {
        quantidadeNumeros++; // incrementa a quantidade de números
    }
}

// console.log("Letras: " + quantidadeLetras);
console.log(`Letras: ${quantidadeLetras}`);
console.log(`Números: ${quantidadeNumeros}`)
