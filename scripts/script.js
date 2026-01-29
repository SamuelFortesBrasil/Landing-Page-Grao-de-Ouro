//Função para Mostrar Tabelas de Tipos de Cafés-------------------

const btFechar = document.getElementById('fechar')
const PopUpContainer = document.getElementById('pop-up-container')
const imagem = document.getElementById('tabela')
const btVerMais1 = document.getElementById('tipo-1')
const btVerMais2 = document.getElementById('tipo-2')
const btVerMais3 = document.getElementById('tipo-3')
//Declaração de Variáveis----------------------------------------

btFechar.addEventListener('click',()=>{
    PopUpContainer.style.display = 'none'
})

btVerMais1.addEventListener('click',()=>{
    imagem.src = '../imagens/Tabela-grãos.png'
    PopUpContainer.style.display = 'flex'
})

btVerMais2.addEventListener('click',()=>{
    imagem.src = '../imagens/tabela-moido.jpg'
    PopUpContainer.style.display = 'flex'
})

btVerMais3.addEventListener('click',()=>{
    imagem.src = '../imagens/tabela-capsulas.jpg'
    PopUpContainer.style.display = 'flex'
})

// Fim da Função-----------------------------------------------

//Função para um menu Hamburguer----------------------------------

const btMenu = document.getElementById('hamburguer')
const ul = document.getElementById('menu-container')
let contador = 0

btMenu.addEventListener('click',()=>{
    contador++
    ul.style.display = 'flex'
    btMenu.style.fontSize = '1.5em'
    if(contador % 2 === 0){
        ul.style.display = 'none'
        btMenu.style.fontSize = '2em'
        contador = 0
    }
})
//Fim da Função-----------------------------------------------------