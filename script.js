class Produto {
  static prod = [
    {
      id: "1",
      title: "K9",
      price: 1800,
      stock_quantity: 10,
    },
  ];
}

const produto = Produto.prod[0];

const desconto = produto.price * 0.1;
const precoFinal = produto.price - desconto;

console.log("Nome do produto:", produto.title);
console.log("Preço:", produto.price);
console.log("Desconto:", desconto);
console.log("Preço final:", precoFinal);