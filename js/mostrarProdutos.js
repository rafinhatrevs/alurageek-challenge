import { conexaoApi } from "./conexaoApi.js";

const lista = document.getElementById('produtosLista');
const mensagem = document.getElementById('listaMensagem');

const construirCard = (id, nome, valor, imagem) => {
    const card = document.createElement('li');
    card.className = 'lista__card';
    card.innerHTML = `
    <img class="card__img" src="${imagem}" alt="${nome}.">
    <p class="card__nome">${nome}</p>
    <div class="card__info">
        <p class="info__valor">R$ ${(valor / 100).toFixed(2)}</p>
        <img class="info__icone" src="./assets/trash.png" alt="Icone de lixeira." data-id="${id}">
    </div>`

    return card;
};

export const mostrarProdutos = async () => {
    try {
        const produtos = await conexaoApi.listaProdutos();

        if (produtos.length === 0) {
            mensagem.style.display = 'block';

        } else {
            mensagem.style.display = 'none';

            produtos.forEach(produto => {
                const card = construirCard(produto.id, produto.nome, produto.valor, produto.imagem);
                lista.appendChild(card);
            });
        }

    } catch (error) {
        console.log('Erro ao mostrar produtos: ', error);
        mensagem.textContent = "Erro ao carregar produtos. Tente novamente mais tarde.";
        mensagem.style.display = 'block';
    }
};

mostrarProdutos();