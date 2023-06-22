let idade = document.getElementById("idade");
let titulo = document.getElementById("título");

function Apertar()
{
    if(idade.value >= 3000 && titulo.value == "Sim"){
        alert("Deverá Pagar")
    }
    else{
        alert("Não poderá pagar")
    }
}
