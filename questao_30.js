function registrarCompra() {
  let subtotal = 0;
  let produtosValidos = 0;

  while (true) {
    const entrada = prompt("Digite o valor do produto (0 para finalizar):");
    const valor = Number(entrada);

    if (valor === 0) {
      break;
    }

    if (valor < 0) {
      console.log("Valor inválido rejeitado.");
    } else {
      subtotal += valor;
      produtosValidos++;
    }
  }

  if (produtosValidos === 0) {
    console.log("Nenhum produto registrado");
    return;
  }

  let desconto = 0;
  if (subtotal >= 100) {
    desconto = subtotal * 0.10;
  }

  const totalFinal = subtotal - desconto;

  console.log(`Quantidade de produtos válidos: ${produtosValidos}`);
  console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
  console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`);
  console.log(`Total final: R$ ${totalFinal.toFixed(2)}`);
}