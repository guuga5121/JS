let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let sinal = document.getElementById("sinal")
let resultado = document.getElementById("resultado")
let soma;
let divisao;
let subtracao;
let multiplicacao;

function calculo()
{
    switch(sinal.value)
    {
        case"+":
        soma = parseInt(valor1.value) + parseInt(valor2.value)
         resultado.innerHTML = soma 
         break
        case"/":
        divisao = parseInt(valor1.value) / parseInt(valor2.value)
         resultado.innerHTML = divisao 
         break
        case"-":
        subtracao = parseInt(valor1.value) - parseInt(valor2.value)
         resultado.innerHTML = subtracao 
         break
        case"*":
        multiplicacao = parseInt(valor1.value) * parseInt(valor2.value)
         resultado.innerHTML = multiplicacao 
         break
    }
}