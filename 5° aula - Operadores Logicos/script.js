let idade = document.getElementById("idade");
let titulo = document.getElementById("título");

function Apertar()
{
    if(idade.value >= 16 && titulo.value == "Sim"){
        alert("Vota")
    }
    else{
        alert("Não poderá votar")
    }
}
