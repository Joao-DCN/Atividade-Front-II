function contarFaixasDeNotas() {
  let aprovados = 0;
  let recuperacao = 0;
  let revisao = 0;

  for (let i = 1; i <= 6; i++) {
    const entrada = prompt(`Digite a nota do ${i}º estudante (0 a 10):`);
    const nota = Number(entrada);

    if (nota >= 7) {
      aprovados++;
    } else if (nota >= 5) {
      recuperacao++;
    } else {
      revisao++;
    }
  }

  console.log(`Notas >= 7: ${aprovados}`);
  console.log(`Notas entre 5 e 6.9: ${recuperacao}`);
  console.log(`Notas < 5: ${revisao}`);
}