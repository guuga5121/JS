//Arrays unidimensional
//Podemos criar ass:
const num1 = new Array(30,-1,5,3,121);
//ou podemos fazer:
const num2 = [-2,40,16,111,333,64];

console.log(num1)
console.log(num2)

console.log(`1º elemento:  ${num1[0]}`)
console.log(num2[1]);
console.log("2° elemento" + num2[2])

console.log(`3° elemento: ${num1[2]}`)
console.log(`3° elemento: ${num2[4]}`)
console.log(num1[2]+ num1[1])
console.clear();

//Arrays bidimensionais
const matrix = 
[
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null ,'Uva', -350],
]

console.log(matrix)
console.log(matrix[1])
console.log(matrix[1] [1])
console.clear()
let moedas = ['Real', 'Dólar', 'Coroa', 'Peso', ]

console.log(moedas)
moedas[1] = "Iene"
console.log(moedas)

let matrix2= 
[
    [1,2,3],
    [4,5,6],

]
console.log(matrix2)
matrix2[1][1] = 10;
console.log(matrix2
    )

//tamanho de arrays
console.clear();
let vetor = [0,1,2,3,4];
console.log(vetor.length);

//
console.clear()
const frutas = ['Banana', 'Laranja', 'Maçã','Manga'];

frutas.pop();
console.log(frutas)

//shift() <- remove o primeiro item
frutas.shift()
console.log(frutas)

//push(nome) ,- Inserir no ultimo item um valor
frutas.push("Goiaba")
console.log(frutas)

//unshift(nome) <- inserir no valor primeiro item um valor
frutas.unshift('Kiwi')
console.log(frutas)