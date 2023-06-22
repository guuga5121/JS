let resultado = document.getElementById('resultado')
let input1 = document.getElementById('n1')
let input2 = document.getElementById('n2')

let x = document.getElementById('botao')
x.addEventListener('click', apertar)

function apertar()
{
    resultado.innerHTML = (parseFloat(input1.value) * parseFloat(input2)) / 2
}