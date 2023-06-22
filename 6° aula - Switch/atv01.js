let diasemana = document.getElementById("diasemana")
let resultado = document.getElementById("resultado")

function Apertar()
{
switch(diasemana.value)
{
    case "dia 1":
        resultado.innerHTML = ("esse dia não útil")
        break;
    case "dia 7"
        resultado.innerHTML = ("esse dia não útil")
        break;
        default:
            resultado.innerHTML = ("esse é um dia útil")
}
}