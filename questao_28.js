function iniciarMenu() {
  let opcao = -1;

  while (opcao !== 0) {
    const menuTexto = "--- MENU ---\n1 — Mostrar mensagem de boas-vindas\n2 — Calcular o dobro de um número\n0 — Encerrar\nEscolha uma opção:";
    opcao = parseInt(prompt(menuTexto));

    if (opcao === 1) {
      console.log("Bem-vindo à oficina de JavaScript");
    } else if (opcao === 2) {
      const valor = Number(prompt("Digite um número:"));
      console.log(`O dobro de ${valor} é ${valor * 2}`);
    } else if (opcao === 0) {
      console.log("Programa encerrado.");
    } else {
      console.log("Opção inválida");
    }
  }
}