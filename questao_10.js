function verificarBeneficio(emprestimos, oficinas) {
  if (emprestimos >= 10 || oficinas >= 3) {
    return "Benefício concedido";
  } else {
    return "Sem direito ao benefício";
  }
}