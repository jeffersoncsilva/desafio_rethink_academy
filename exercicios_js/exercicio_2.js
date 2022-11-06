const pessoas = [
    {name: "Fabiana Araújo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
]

//testa_ToString_em_vetor();
//combina_elementos_com_Join();
//combina_Arrays_usando_concat();
//adiciona_Item_Fim_Array_usando_push();
//remove_Ultimo_Item_Array_usando_pop();
//remove_Primeiro_Item_Array_usando_shift();
//adiciona_Item_Inicio_Array_usando_unshift();
//remove_Itens_Array_Com_Splice_Indicando_Posicao_Inicial_E_Final();
//remove_Itens_Array_Com_Splice_Indicando_Posicao_Inicial();
//substitui_elementos_array_com_Splice();
//retorna_array_com_slice_indicando_posicao_inicial_e_final();
//divide_string_em_vetor_usando_split();
//procura_posicao_elemento_com_indexOf();
//retorna_ultimo_index_elemento_array_com_lastIndexOf();
//filtra_pessoas_com_idade_maior_que_55_usando_filter();
//mostra_dados_pessoas_usando_forEach();
//testa_idades_maiores_que_zero_com_every();
//pega_nome_pessoas_usando_map();
//verifica_se_existe_o_item_no_array_com_includes_quando_item_nao_esta();
//verifica_se_existe_o_item_no_array_com_includes_quando_item_esta();
//testa_idade_menor_que_zero_usando_some();

function testa_ToString_em_vetor(){
    /* Função toString() */
    let cores = ['red', 'blue','black']
    console.log(cores.toString());
}

function combina_elementos_com_Join(){
    /* join, comginando todos os elementos do array em uma string. */
    let cores = ['red', 'blue','black']
    let tudo = cores.join(' - ');
    console.log(tudo)
}

function combina_Arrays_usando_concat(){
    /* Combina dois arrays */
    let pessoas2 = [
        {name: "Marcela Fernandez", age: 29},
        {name: "Martines Rodiguez", age: 59}
    ]
    let combinado = pessoas.concat(pessoas2);
    console.log(combinado);
}

function adiciona_Item_Fim_Array_usando_push(){
    pessoas.push({name: "Rodrigues Soares", age: 38});
    console.log(pessoas);
}

function remove_Ultimo_Item_Array_usando_pop(){
    /* remove o último item do array pessoas e o retorna */
    let ultimaPessoa = pessoas.pop();
    console.log(ultimaPessoa);
    console.log(pessoas);
}

function remove_Primeiro_Item_Array_usando_shift(){
    /* Remove o primeiro item do array. */
    let primeiraPessoa = pessoas.shift();
    console.log(primeiraPessoa);
    console.log(pessoas);
}

function adiciona_Item_Inicio_Array_usando_unshift(){
    /** Adiciona item no inicio de um array. */
    let novaPessoa = {name: "Antonieta Gusman", age: 15};
    pessoas.unshift(novaPessoa);
    console.log(pessoas);
}

function remove_Itens_Array_Com_Splice_Indicando_Posicao_Inicial_E_Final() {
    /** SPLICE para remover itens, indicando a posição inicial seguido da quantidade de 
    elementos que será removido. */
    pessoas.splice(0, 3);
    console.log(pessoas);
}

function remove_Itens_Array_Com_Splice_Indicando_Posicao_Inicial(){
    /** SPLICE para remover todos elementos a partir de uma posição inicial.
     * Todos apos a posição indicada serão removidos do vetor.
     */
    pessoas.splice(5);
    console.log(pessoas);
}

function substitui_elementos_array_com_Splice(){
    /** SPLICE para remover elementos e substituilos por outros elementos. */
    let novos = [
        {name: "Luiz Felipe", age: 21},
        {name: "Giovanny", age: 27},
        {name: "Carolina de Freitas", age: 22}
    ]
    pessoas.splice(3, 6, novos[0], novos[1], novos[2]);
    console.log(pessoas);
}

function retorna_array_com_slice_indicando_posicao_inicial_e_final(){
    /** SLICE retorna um novo array com a parte indicada */
    let inicio = pessoas.slice(0, 3);
    console.log(inicio);
}

function divide_string_em_vetor_usando_split(){
    /** SPLIT usado para strings, dividindo uma string em substring 
     * e as retornando como um array.
     */
    let nome="Maria Antonieta das Neves de Cruzes Limas Rocha";
    let vetorNome = nome.split(' ');
    console.log(vetorNome)
}

function procura_posicao_elemento_com_indexOf(){
    /** indexOf procura por um elemento em um array e retorna o índice dele no array */
    let cores = ['vermelha', 'roxo','azul', 'preto','marrom']
    let indexAzul = cores.indexOf('azul');
    console.log(cores[indexAzul]);
}

function retorna_ultimo_index_elemento_array_com_lastIndexOf(){
    /** LASTINDEXOF retorna de forma semelhante ao anterior, a diferença
    * e que irá retornar o último index que foi encontrado.
    */
    let cores = ['vermelha', 'roxo','azul', 'preto','marrom', 'vermelha']
    let indexVermelha = cores.lastIndexOf('vermelha');
    console.log(indexVermelha + ' - ' + cores[indexVermelha]);
}

function filtra_pessoas_com_idade_maior_que_55_usando_FILTER(){
    /** filter() cria um array se os métodos passarem em uma determinada condição */
    let resultados = pessoas.filter(it => it.age >= 55);
    console.log(resultados);
}

function mostra_dados_pessoas_usando_FOR_EACH(){
    // sem usar index
    pessoas.forEach(item =>{
        console.log('nome: ' + item.name + ' - idade: ' + item.age);
    });

    // usando index do array
    pessoas.forEach((item, indice) => {
        console.log(pessoas[indice]);
    });
}

function testa_idades_maiores_que_zero_com_EVERY(){
    let positivos = pessoas.every(item => {return item.age > 0; });
    if(positivos)
        console.log('todos os números são positivos.');
    else
        console.log('nem todos os números são positivos.');
}

function pega_nome_pessoas_usando_MAP(){
    /** map() cria um array manipulando valores de outros arrays. */
    let res = pessoas.map(item => {        
        return item.name;
    });
    console.log(res);
}

function verifica_se_existe_o_item_no_array_com_INCLUDES_quando_item_nao_esta(){
    let item = {name: "Ana Luiza", age: 2};
    let resultado = pessoas.includes(item);
    console.log(resultado);
}

function verifica_se_existe_o_item_no_array_com_INCLUDES_quando_item_esta(){
    let item = pessoas[4];
    let resultado = pessoas.includes(item);
    console.log(resultado);
}

function testa_idade_menor_que_zero_usando_SOME(){
    let temPositivo = pessoas.some(item => {
        console.log(item);
        return item.age >= 0;
    });
    if(temPositivo)
        console.log('existe pelo menos uma pessoa com idade positiva.');
    else
        console.log('não existe nimguem que tenha idade positiva.');
}