function encontrarMaiorNumero() {
  const primeiraEntrada = prompt("Digite o 1º número:");
  let maior = Number(primeiraEntrada);

  for (let i = 2; i <= 5; i++) {
    const entrada = prompt(`Digite o ${i}º número:`);
    const numero = Number(entrada);

    if (numero > maior) {
      maior = numero;
    }
  }

  return maior;
}