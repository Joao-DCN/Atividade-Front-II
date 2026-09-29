function somarCincoValores() {
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    const entrada = prompt(`Digite o ${i}º valor:`);
    const numero = Number(entrada);
    soma += numero;
  }
  return soma;
}