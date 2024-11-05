import { conexaoApi } from "./conexaoApi.js";
import { mostrarProdutos } from "./mostrarProdutos.js";

const formulario = document.querySelector('.form');
const inputNome = document.getElementById('nome');
const inputValor = document.getElementById('valor');
const inputImagem = document.getElementById('imagem');
const botaoLimpar = document.getElementById('botaoLimpar');

const guardarProduto = async (event) => {
    event.preventDefault();

    const nome = inputNome.value;
    const valor = Number(inputValor.value);
    const imagem = inputImagem.value;

    try {
        await conexaoApi.novoProduto(nome, valor, imagem);

        mostrarProdutos();

        formulario.reset();

    } catch (error) {
        console.log('Erro ao guardar produto: ', error);
    }
};

formulario.addEventListener('submit', guardarProduto);

botaoLimpar.addEventListener('click', () => {
    formulario.reset();
});