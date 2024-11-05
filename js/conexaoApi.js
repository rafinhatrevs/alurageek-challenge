const listaProdutos = async () => {
    const resposta = await fetch('http://localhost:3000/produtos', {
        method: 'GET'
    });

    const respostaConvertida = await resposta.json();

    return respostaConvertida;
};

const novoProduto = async (nome, valor, imagem) => {
    const resposta = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    if (!resposta.ok) {
        throw new Error('Não foi possível guardar o produto.');
    }

    const produto = await resposta.json();

    return produto;
};

const exclusaoProduto = async (id) => {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    });

    if (!resposta.ok) {
        throw new Error('Não foi possível excluir o produto.');
    }
};

export const conexaoApi = {
    listaProdutos,
    novoProduto,
    exclusaoProduto
};