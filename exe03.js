// Create a program that reads a CSV file with the following structure: product name, price, quantity and calculate the total value of the products and the total quantity of products.
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const arquivoCSV = path.join(__dirname, 'produtos.csv');

const produtos = [];
let totalProdutos = 0;
let valorTotalProdutos = 0;

fs.createReadStream(arquivoCSV)
    .pipe(csv())
    .on('data', (row) => {
        const preco = parseFloat(row.preco);
        const quantidade = parseInt(row.quantidade);

        totalProdutos += quantidade;
        valorTotalProdutos += preco * quantidade;

        produtos.push(row);
    })
    .on('end', () => {
        console.log(`Total de produtos: ${totalProdutos}`);
        console.log(`Valor total dos produtos: R$ ${valorTotalProdutos.toFixed(2)}`);
    })
    .on('error', (error) => {
        console.log('Erro ao ler o arquivo', error);
    });