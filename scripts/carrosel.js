const container = document.querySelector('.container-cliente')
const clientes = document.querySelectorAll('.cliente')

let index = 0


function carrosel(){
    index++
    if(index >= clientes.length){
        index = 0
    }
    container.style.transform = `translateX(${ -index * 100}%)`
}

setInterval(carrosel,3000)

