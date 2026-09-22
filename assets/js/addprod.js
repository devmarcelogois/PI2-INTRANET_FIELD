const btnLivro = document.getElementById('btn-livro');
const btnHq = document.getElementById('btn-hq');
const slcOutroIdioma = document.getElementById('slc_outro_idioma');
const divOutroIdioma = document.getElementById('div_outro_idioma');


//Nova mídia ou novo exemplar
const rdNovoExemplar = document.getElementById('rd-novo_exemplar');
const rdNovaMidia = document.getElementById('rd-nova_midia');
const divNovaMidia = document.getElementById('div_nova_midia');
const divNovoExemplar = document.getElementById('div_novo_exemplar');

//inputs do item
let tipoItem = "LIVRO";
const input_Titulo = document.getElementById('input_titulo');
const input_Autor = document.getElementById('input_autor');
const input_Ano = document.getElementById('input_ano');
const input_Idioma = document.getElementById('input_idioma');
const input_Isbn = document.getElementById('input_isbn');
const input_Preco = document.getElementById('input_preco');

function getDados() {
    return { 
        tipo: tipoItem, 
        titulo: input_Titulo.value, 
        autor: input_Autor.value,
        ano: input_Ano.value,
        isbn: input_Isbn.value,
        preco: input_Preco.value,
        idioma: input_Idioma.value
    };
}

btnLivro.addEventListener('click', () => {
    tipoItem = "LIVRO";

    // Muda o placeholder de algo compatível
    input_Titulo.placeholder = 'História de Sua Vida';
    input_Autor.placeholder = 'Ted Chiang';
    input_Ano.placeholder = '1998';
    input_Isbn.placeholder = '978-8551000786';
    input_Preco.placeholder = '75';

    // Ajusta o destaque dos botões
    //btnLivro.classList.add('active');
    //btnHq.classList.remove('active');

    inputUser.placeholder = 'nome@sebo-pansofia.com';
});

btnHq.addEventListener('click', () => {
    tipoItem = "HQ";
    
    // Muda o placeholder de algo compatível
    input_Titulo.placeholder = 'Batman & Robin #001';
    input_Autor.placeholder = 'Grant Morrison';
    input_Ano.placeholder = '2019';
    input_Isbn.placeholder = '978-8583680253';
    input_Preco.placeholder = '150';

    // Ajusta o destaque dos botões
    //btnHq.classList.add('active');
    //btnLivro.classList.remove('active');

    inputUser.placeholder = 'Hq_user';
});

slcOutroIdioma.addEventListener('change', (event) => {
    if (slcOutroIdioma.value === "outro") {
      divOutroIdioma.style.display = "block"; // Mostra a div
    } else {
      divOutroIdioma.style.display = "none";  // Esconde a div
    }
});

rdNovoExemplar.addEventListener('change', (event) => {
    divNovaMidia.style.display = "none";
    divNovoExemplar.style.display = "block"; 
});

rdNovaMidia.addEventListener('change', (event) => {
    divNovoExemplar.style.display = "none"; 
    divNovaMidia.style.display = "block";
});