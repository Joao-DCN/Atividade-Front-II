function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    return `O número ${numero1} é maior que ${numero2}.`;
  } else if (numero2 > numero1) {
    return `O número ${numero2} é maior que ${numero1}.`;
  } else {
    return "Os dois números são iguais.";
  }
}