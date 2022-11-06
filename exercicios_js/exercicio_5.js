/*const pessoas = [
    {name: "Fabiana Araújo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age:2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
]*/

/*let pessoasComId = adicionaCampoIdEmPessoas();
console.log(pessoasComId)

let pessoas2 = adicionaCampoIdEmPessoas2();
console.log(pessoas2);
*/
let pessoas2 = adicionaCampoIdEmPessoas3();
console.log(pessoas2);

function adicionaCampoIdEmPessoas(){
    let idd = 0;
    let pessoasComId = [];
    pessoas.map(item => {
        pessoasComId.push({ name: item.name, age: item.age, id: idd++});
    });
    return pessoasComId;
}

function adicionaCampoIdEmPessoas2(){
    let id = 0;
    pessoas.map((item, idx)=>{
        pessoas[idx].id = id++;
    });
    return pessoas;
}

function adicionaCampoIdEmPessoas3(){
    let id = 0;
    pessoas.map((item, idx)=>{
        item['id'] = id++;
    });
    return pessoas;
}