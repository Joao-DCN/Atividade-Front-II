function verificarCodigoDeAcesso() {
  const CODIGO_CORRETO = "javascript123";
  const MAX_TENTATIVAS = 3;

  for (let tentativa = 1; tentativa <= MAX_TENTATIVAS; tentativa++) {
    const codigo = prompt(`Tentativa ${tentativa} de 3 - Digite o código de acesso:`);

    if (codigo === CODIGO_CORRETO) {
      console.log("Acesso permitido");
      return;
    } else {
      const restantes = MAX_TENTATIVAS - tentativa;
      if (restantes > 0) {
        console.log(`Código incorreto! Tentativas restantes: ${restantes}`);
      } else {
        console.log("Acesso bloqueado");
      }
    }
  }
}