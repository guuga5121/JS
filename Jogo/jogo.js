let Nomedojogador;
let resposta;

Nomedojogador = document.getElementById("Nomedojogador")
resposta = document.getElementById("resposta")

function EnviarNome()
{
    
    if(Nomedojogador.value == "")
    {
        alert("insira um nome ")
    }
    else{
        resposta.innerHTML = "Olá, " + Nomedojogador.value + ".Vamos jogar!"
    }
}