function calcularMedia() {
  let soma = 0;
  for (let i = 1; i <= 4; i++) {
    const entrada = prompt(`Digite a ${i}ª nota (0 a 10):`);
    const nota = Number(entrada);
    soma += nota;
  }
  return soma / 4;
}