function calcular(numero1, numero2, operacao) {
  if (operacao === "+") {
    return numero1 + numero2;
  } else if (operacao === "-") {
    return numero1 - numero2;
  } else if (operacao === "*") {
    return numero1 * numero2;
  } else if (operacao === "/") {
    if (numero2 === 0) {
      return "Erro: Divisão por zero não é permitida.";
    }
    return numero1 / numero2;
  } else {
    return "Operação inválida";
  }
}