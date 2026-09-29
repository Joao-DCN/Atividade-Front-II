function calcularCompra(valorCompra) {
  if (valorCompra < 0) {
    console.log("Erro: O valor da compra não pode ser negativo.");
    return;
  }

  let desconto = 0;
  if (valorCompra >= 200) {
    desconto = valorCompra * 0.10;
  }

  const valorFinal = valorCompra - desconto;

  console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`);
  console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
  console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
}