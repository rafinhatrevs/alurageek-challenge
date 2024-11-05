import { conexaoApi } from "./conexaoApi.js";
import { mostrarProdutos } from "./mostrarProdutos.js";

const lista = document.getElementById('produtosLista');

const excluirProduto = async (event) => {
    const icone = event.target;

    if (icone.classList.contains('info__icone')) {
        const produtoId = icone.getAttribute('data-id');

        try {
            await conexaoApi.exclusaoProduto(produtoId);

            await mostrarProdutos();

        } catch (error) {
            console.log('Erro ao excluir produto: ', error);
            alert("Não foi possível excluir o produto. Tente novamente.");
        }
    }
};

lista.addEventListener('click', excluirProduto);