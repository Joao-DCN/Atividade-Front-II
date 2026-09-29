function solicitarNotaValida() {
  let nota = Number(prompt("Digite uma nota entre 0 e 10:"));

  while (nota < 0 || nota > 10 || isNaN(nota)) {
    console.log("Nota inválida");
    nota = Number(prompt("Digite novamente uma nota entre 0 e 10:"));
  }

  console.log(`Nota aceita: ${nota}`);
  return nota;
}