function classificarNota(nota) {
  if (nota < 0 || nota > 10) {
    return "Nota inválida";
  } else if (nota >= 7) {
    return "Aprovado";
  } else if (nota >= 5) {
    return "Recuperação";
  } else {
    return "Revisão necessária";
  }
}