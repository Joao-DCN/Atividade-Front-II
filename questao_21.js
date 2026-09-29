function contarParesEImpares() {
  let pares = 0;
  let impares = 0;

  for (let i = 1; i <= 10; i++) {
    const entrada = prompt(`Digite o ${i}º número inteiro:`);
    const numero = parseInt(entrada);

    if (numero % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log(`Total de pares: ${pares}`);
  console.log(`Total de ímpares: ${impares}`);
}