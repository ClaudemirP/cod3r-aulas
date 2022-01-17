const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true}
]

//1. fragil: true
//2. qtde * preco -> total
//3. media totais

//1
const fragil = carrinho.filter(item => item.fragil)
console.log(fragil)

//2
const totalPreco = carrinho.map(elem => elem.qtde * elem.preco)
console.log(totalPreco)

//3
const media = carrinho
.filter(item => item.fragil)
.map(item => item.qtde * item.preco)
.reduce((acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    console.log(acc, el)
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal/novaQtde
    }
}, {qtde: 0, total: 0, media: 0} /*valor inicial*/)

console.log(media)

//criando nosso proprio reduce
Array.prototype.meuReduce = function(fn, inicial){
    let acumulador = inicial
    for(let i = 0; i < this.length; i++){
        if(!acumulador && i === 0) {
            acc = this[i]
            continue
        }
        acumulador = fn(acumulador, this[i], i, this)
    }
    return acumulador
}