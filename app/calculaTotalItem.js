const lista = [
  {id: 1, nome: 'Banana', valorUnitario: 2},
  {id: 2, nome: 'Maça', valorUnitario: 4.5},
  {id: 3, nome: 'Pera', valorUnitario: 3}
];

const calculaTotalItem = function(codigo, quantidade, desconto = 0) {
  var produtoEncontrado;

  // lista.forEach(function(produto) {
  //   if (produto.id === codigo) {
  //     produtoEncontrado = produto;
  //   }
  // });

  // produtoEncontrado = lista.find(function(produto){
  //   return produto.id === codigo;
  // });

  for(var i = 0; i <= lista.length-1; i++) {
    if (lista[i].id == codigo) {
      var produtoEncontrado = lista[i];
    }
  }

  const nomeProduto = produtoEncontrado.nome;
  const total = produtoEncontrado.valorUnitario * quantidade - desconto;

  return { produto: nomeProduto, valor: total}
}

module.exports = { calculaTotalItem }
