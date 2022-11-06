/*
const pessoas = [
    {name: "Fabiana Araújo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age:2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
]*/

let nomesCompletos = retornaNomesPessoas();
let nomes = retornaPrimeiroNome();

console.log(nomesCompletos);
console.log(nomes);

function retornaNomesPessoas(){
    /*let nomes = [];
    pessoas.map(item => {
        nomes.push(item.name);
    });
    console.log(nomes.toString());
    */
    let n = pessoas.map(item =>  item.name);
    return n;
}

function retornaPrimeiroNome(){
    /*let nomes = [];
    pessoas.map(item =>{
        let n = item.name.split(' ');
        nomes.push(n[0]);
    });*/
    let nomes = pessoas.map(item => item.name.split(' ')[0]);
    return nomes;
}