function somarAteZero() {
  let soma = 0;
  let quantidade = 0;

  while (true) {
    const entrada = prompt("Digite um número (0 para encerrar):");
    const numero = Number(entrada);

    if (numero === 0) {
      break;
    }

    soma += numero;
    quantidade++;
  }

  console.log(`Soma: ${soma}`);
  console.log(`Quantidade: ${quantidade}`);
}