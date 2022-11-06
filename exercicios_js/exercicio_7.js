/*const pessoas = [
    {name: "Fabiana Araújo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age:2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
]*/


media = calculaMediaIdades();
console.log(media);

function calculaMediaIdades(){
    let soma = pessoas.reduce((acc, item) => acc + item.age, 0);
    let media = soma / pessoas.length;
    return media;
}