
document.addEventListener('DOMContentLoaded', function() {
  populaProdutos();
});

function populaProdutos(){
    const produtos = [
        {
            nome: "Osso que apita",
            img: {
                caminho: "osso-apita.png",
                alt: "Osso de brinquedo que emite som quando mordido"
            },
            descricao: "Brinquedo interativo que emite som agudo quando mordido, ideal para entreter seu cão por horas.",
            preco: "49,89",
            categoria: "secao-acessorios"
        },
        {
            nome: "Roupinha com abafador de ouvido",
            img: {
                caminho: "roupinha-abafador.png",
                alt: "Roupinha para cães com capuz abafador de ruídos"
            },
            descricao: "Conjunto completo com body térmico e capuz especial que reduz ruídos externos, perfeito para pets sensíveis a barulhos.",
            preco: "176,49",
            categoria: "secao-acessorios"
        },
        {
            nome: "Ração Whiskys",
            img: {
                caminho: "racao-whiskys.png",
                alt: "Ração premium para gatos adultos"
            },
            descricao: "Alimento completo para gatos adultos, com fórmula balanceada e nutrientes essenciais para saúde felina.",
            preco: "37,78",
            categoria: "secao-racao"
        },
        {
            nome: "Ração Filhote Feliz Shashê",
            img: {
                caminho: "racao-filhote.png",
                alt: "Ração especial para filhotes de cães"
            },
            descricao: "Formulação especial para filhotes, com proteínas de alta qualidade e DHA para desenvolvimento cerebral.",
            preco: "54,32",
            categoria: "secao-racao"
        },
        {
            nome: "Fralda Caricol",
            img: {
                caminho: "fralda-caricol.png",
                alt: "Fraldas descartáveis para cães"
            },
            descricao: "Fraldas descartáveis com absorção máxima, ideal para cães idosos, no pós-operatório ou no cio.",
            preco: "119,99",
            categoria: "secao-higiene"
        },
        {
            nome: "Alvejante Seguro para Cães Namol",
            img: {
                caminho: "alvejante-namol.png",
                alt: "Alvejante não tóxico para limpeza doméstica"
            },
            descricao: "Produto de limpeza eficiente sem componentes tóxicos, seguro para uso em ambientes com animais.",
            preco: "29,99",
            categoria: "secao-higiene"
        },
    ];

    const categorias = [
        {
            codigo: "secao-acessorios",
            nome: "Acessórios",
            descricao: "Coleiras, brinquedos e transportadoras"
        },
        {
            codigo: "secao-racao",
            nome: "Ração",
            descricao: "Alimentos para cães, gatos e outros animais"
        },
        {
            codigo: "secao-higiene",
            nome: "Higiene",
            descricao: "Shampoos, perfumes e produtos de limpeza"
        },
    ];

    for(let categoria of categorias){
        const elementoDaCategoria = document.getElementById(categoria.codigo);

        if(!elementoDaCategoria) continue;

        const titulo = document.createElement('h3');
        titulo.textContent = categoria.nome;
        elementoDaCategoria.appendChild(titulo);

        const descricao = document.createElement('p');
        descricao.textContent = categoria.descricao;
        elementoDaCategoria.appendChild(descricao);

        const containerDosCards = document.createElement('div');
        containerDosCards.classList.add('row');

        const produtosDaCategoria = produtos.filter(produto => produto.categoria===categoria.codigo);
        for(let produto of produtosDaCategoria){
            const elementoDoCard = criaCardDeProduto(produto);
            containerDosCards.appendChild(elementoDoCard);
        }

        elementoDaCategoria.appendChild(containerDosCards);
    }
}

function criaCardDeProduto(produto){
    // cria img
    const imagem = document.createElement('img');
    imagem.classList.add('card-img-top');
    imagem.src = `./imagens/${produto.img.caminho}`;
    imagem.alt = produto.img.alt;
    imagem.width = 200;

    // cria titulo
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.style.height = "48px";
    titulo.style.overflow = "hidden";
    titulo.textContent = produto.nome;
    // cria descricao
    const descricao = document.createElement('p');
    descricao.classList.add('card-text');
    descricao.style.height = "90px";
    descricao.style.overflow = "scroll";
    descricao.textContent = produto.descricao;
    // cria corpo
    const corpo = document.createElement('div');
    corpo.classList.add('card-body');
    corpo.appendChild(titulo);
    corpo.appendChild(descricao);

    // cria preco
    const preco = document.createElement('strong');
    preco.textContent = `R$ ${produto.preco}`;
    //cria texto rodape 
    const textoRodape = document.createElement('p');
    textoRodape.textContent = 'Preço: ';
    textoRodape.appendChild(preco);
    // cria rodape
    const rodape = document.createElement('div');
    rodape.classList.add('card-footer');
    rodape.appendChild(textoRodape);

    // cria card
    const artigo = document.createElement('article');
    artigo.classList.add('card');
    artigo.appendChild(imagem);
    artigo.appendChild(corpo);
    artigo.appendChild(rodape);
    const coluna = document.createElement('div');
    coluna.classList.add('col');
    coluna.appendChild(artigo);

    return coluna;
}