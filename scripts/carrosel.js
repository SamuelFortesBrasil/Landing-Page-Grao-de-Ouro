const container = document.querySelector('.container-cliente')
const clientes = document.querySelectorAll('.cliente')

let index = 0

//Função normal, não sei porque, mais não quis usar um arrow function
function carrosel(){
    index++
    if(index >= clientes.length){
        index = 0
    }
    container.style.transform = `translateX(${ -index * 100}%)`
}

//Carrosel de Comentários de clientes
setInterval(carrosel,3000)

