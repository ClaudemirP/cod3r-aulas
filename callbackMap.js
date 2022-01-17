const nums = [1,2,3,4,5]
//i => indice
//n => cada valor do array
//a => o array
const dobro = (value, index, array) => value * 2 + index + array.length

console.log(nums.map(dobro))

//(method) Array<number>.map<any>(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"]
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const getNome = carrinho.map(nomes => nomes.nome)
const getTotal = carrinho.map(value => value.qtde * value.preco)

console.log(getNome, getTotal)

//como construir o nosso próprio map
Array.prototype.meuMap = function(fn){
    const novoArray = []
    for (let index = 0; index < this.length; index++){
        novoArray.push(fn(this[index], index, this))
    }
    return novoArray
}