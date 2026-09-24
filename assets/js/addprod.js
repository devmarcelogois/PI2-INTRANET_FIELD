const btnLivro = document.getElementById('btn-livro');
const btnHq = document.getElementById('btn-hq');
const divNovoExemplar = document.getElementById('div_novo_exemplar');
const divNovaMidia = document.getElementById('div_nova_midia');

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

});

const slcOutroIdioma = document.getElementById('select-idioma');
const divOutroIdioma = document.getElementById('div_outro_idioma');

slcOutroIdioma.addEventListener('change', (event) => {
    if (event.target.value === "0") {
      divOutroIdioma.style.display = "block"; // Mostra a div
    } else {
        divOutroIdioma.style.display = "none";  // Esconde a div
        inputOutroIdioma.required = false; // Tira a obrigatoriedade quando estiver oculto

    }
});

document.querySelectorAll('input[name="opcao_gerenciamento"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const valorSelecionado = event.target.value;

        divNovaMidia.style.display =
            (valorSelecionado === "novaMidia") ? "block" : "none";

        divNovoExemplar.style.display =
            (valorSelecionado === "novoExemplar") ? "block" : "none";
    });
});

async function carregarGenerosLiterarios() {
        const generos =  listarGenerosLiteraios(); 
        
        const box = document.querySelector("#genero");
        
        let htmlGerado = ""; // Variável para acumular o HTML
        
        generos.forEach(genero => {
            // Usa += para ir somando cada checkbox no texto
            htmlGerado += `
                <label>
                    <input type="checkbox" name="generos[]" value="${genero.id}">
                    ${genero.nome}
                </label><br>
            `;
        });
        
        // Joga todo o texto acumulado dentro da div de uma vez só
        box.innerHTML = htmlGerado;          
}
carregarGenerosLiterarios();

async function carregarIdioma() {
        const idiomas =  listarIdiomas(); 
        
        const box = document.querySelector("#select-idioma");
        
        let htmlGerado=""; // Variável para acumular o HTML

        idiomas.forEach(idioma => {
            // Usa += para ir somando cada checkbox no texto
            htmlGerado += `
                    <option value="${idioma.id}">
                    ${idioma.nome}                </option>

            `;
        });
                
        box.innerHTML += htmlGerado;          
}
carregarIdioma();