// teste de cosnsole para verificar se o arquivo está sendo carregado
console.log(document.getElementById("novoItem"))
console.log(document.getElementById("novoItem"))

//formulario sendo enviado
const form = console.log(document.getElementById("novoItem"))

// escutar por um evento de submit
// apois escutar executa uma funçao
form.addEventListener("submit", (evento) => {
    // interronper o evento atual
    // previne o comportamento padrão do evento
    evento.preventDefault()

    //CHEGAR NO INPUT , posicao fixa
    //problema: não consegue pode ser adicionado um novo elemento
    evento.log(evento.target[1].value)
    evento.log(evento.target[2].value)
    //com o element voce mostra o valor apartir  do objeto
    //podendo assim acessar quelauqer dado da array
    evento.log(evento.target.elements[nome].value)
    evento.log(evento.target.elements[quantidade].value)

    //toda vez que o formulario for submetido essa funçao cria elemento
    //deve ser acionada pelo evento
    criaelemento(evento.target.elements[nome].value, evento.target.elements[quantidade].value)



})

//criar um novo elemento, funçao
function criaelemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    //numero do item
    const numeroItem = document.createElement('strong')
    //numero item deve receber a quantidade 
    //tag do html
    numeroItem.innerHTML = quantidade

    //novo item tambem deve receber 
    novoItem.innerHTML = nome + numeroItem

    //verificar se deu certo
    console.log(novoItem)

    // um novo item deve ser encrementado pelo appendchild 
    novoItem.appendChild(numeroItem)
    //apos receber o objeto ,e ele acrescenta ao nome 
    novoItem.innerHTML += nome

}
//criar um novo elemento
const novoItem = document.createElement("div")

//adicionar um atributo ao elemento
novoItem.setAttribute("class", "item")

//criar um novo elemento dentro do elemento criado
const nomeItem = document.createElement("p")

//adicionar um atributo ao elemento
nomeItem.setAttribute("class", "nome")

//adicionar um texto ao elemento
nomeItem.textContent = nome

//criar um novo elemento dentro do elemento criado
const quantidadeItem = document.createElement("p")

//adicionar um atributo ao elemento
quantidadeItem.setAttribute("class", "quantidade")

//adicionar um texto ao elemento
quantidadeItem.textContent = quantidade

//adicionar o elemento criado ao elemento pai
novoItem.appendChild(nomeItem)
novoItem.appendChild(quantidadeItem)

//adicionar o elemento criado ao elemento pai
document.getElementById("itens").appendChild(novoItem)



//criaçao de nova const
lista.appendChild(novoItem)

const lista = document.getElementById("lista")

//verifica se o elemento existe
console.log(lista)

//criar o elemento e depois evasie/limpe o formulario 
evento.target.elements['nome'].value = ""
evento.target.elements['quantidade'].value = ""

//criar uma variavel pra n chamar 2x o mesmo elemento
//fazendo os 2 objetos virarem constantes podendo usa-los de forma
//sussinta no codigo

const nome = evento.target.elements['nome']
const quantidade = evento.target.elements['quantidade']

nome.value = ""
quantidade.value = ""

// refatoraçao pos criaaçao da constante 
criaElemento(evento.target.elements[nome].value, evento.target.elements[quantidade].value)
criaElemento(nome.value, quantidade.value)

nome.value = ""
quantidade.value = ""


//regristar a criaçao do novo elemento no localStorage

localStorage.setItem("nome", nome)
localStorage.setItem("quantidade", quantidade)

//toda vez que se salva um novo item, voce sobrescreve o localStorage
// entao se usa  o objetvo para fazer fazer um par de elementons
//dicionario de objetos

//transorma item em objeto

const itemAtual = {
    "nome" : nome
    "quantidade" : quantidade
}
//assim aao invez de enviar 2 informaçoes voce envia 1 objeto
// de novo item atual

//TODA VEZ QUE UM ARQUIVO E SALVO NO LOCALSTORAGE E SALVO COMO JSON
// POIS ELE SO LE textp
//ENTAO VOCE USA O COMANDO PRA TRANSFORMAR O JSON EM STRING

localStorage.setItem("novoItem", JSON.stringify(itemAtual))

//apos alterar o objeto fica representado com chaves {}
//apos alterar para objeto , precisamos seqenciar os objetos
//criando um array

itens.push{itemAtual}

/*O nosso item atual vai ser criado aqui, mas agora o que preenche
 esse tem atual? Não é só o nome, porque o nome é só o elemento
  do array, é o nome.value. A quantidade também,
  é quantidade.value.*/

"nome" : nome.value
"quantidade" : quantidade.value
nome.value = ""
quantidade.value = ""

//crirar constante apra verificar se o item existe no Array
//criado anteriormente no localStorage

const existe = itens.find(elemento => elemento.nome  === nome.value)
console.log(existe)
//agora que o item foi definido, deve-se ser feito uma verificaçao condicional, criando um elemento de controle dos itens
// o melhor é adicionar um ID adicionar um id usando os atributes do DATA-ATRIBUTES
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    const existe = itens.find( elemento => elemento.nome === nome.value )
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value    }
})
//Find no Array para saber se o elemento ja existe .
// parametro do ITEMATUAL  que recebe item e a tag do elemento strong abricando uma refencia dele no array e 
function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")
    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    //tagear os objetos com o ID
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    //atualizao do objeto para html usando a tag inner
    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)
}
//se aquele elemento já existe só atualizamos o elemento, se o nome não é encontrado, criamos o elemento do zero.
function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade

}

// remover um item do array 
//escrever no localStorage
//o splice funciona no índice do array, na posição onde o elemento estar, na posição 0, na posição 1, na posição 2. A posição é o nosso id, 
function deletaElemento (tag , id) {
    const item = document.querySelector("[data-id='"+id+"']")
    item.remove()
    localStorage.removeItem(tag)
}