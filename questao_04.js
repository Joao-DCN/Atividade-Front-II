function verificarParticipacao(idade) {
  if (idade < 0) {
    return "Idade inválida";
  } else if (idade >= 16) {
    return "Participação permitida";
  } else {
    return "Participação não permitida";
  }
}