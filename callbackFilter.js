const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 1
const itensValidos = carrinho.filter(qtdeMaiorQueZero)

console.log(itensValidos)

//podemos usar mais de uma função
const nomeItensValidos= carrinho.filter(qtdeMaiorQueZero).map(getNome)

console.log(nomeItensValidos)

//como criar nosso proprio filter
Array.prototype.meuFilter = function(fn){
    const novoArray = []
    for (let index = 0; index < this.length; index++){
        if(fn(this[index], index, this)){
            novoArray.push(this[index])
        }
    }
    return novoArray
}