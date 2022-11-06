/*const pessoas = [
    {name: "Fabiana Araújo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
]*/

let pessoaForaDalista = buscaPessoaPeloNome('Fabiana');
let pessoaNaLista = buscaPessoaPeloNome('Fabiana Araújo');
console.log(pessoaForaDalista);
console.log(pessoaNaLista);


function buscaPessoaPeloNome(nome){
    //let pessoa = pessoas.filter(it => nome.toLowerCase() === it.name.toLowerCase())
    let pessoa = pessoas.filter(it => nome.localeCompare(it.name)==0);
    return pessoa;
}