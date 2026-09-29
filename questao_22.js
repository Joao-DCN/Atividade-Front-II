function contarClassificacoes() {
  let positivos = 0;
  let negativos = 0;
  let zeros = 0;

  for (let i = 1; i <= 8; i++) {
    const entrada = prompt(`Digite o ${i}º número:`);
    const numero = Number(entrada);

    if (numero > 0) {
      positivos++;
    } else if (numero < 0) {
      negativos++;
    } else {
      zeros++;
    }
  }

  console.log(`Positivos: ${positivos}`);
  console.log(`Negativos: ${negativos}`);
  console.log(`Zeros: ${zeros}`);
}