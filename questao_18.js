function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = numero; i > 1; i--) {
    fatorial *= i;
  }
  return fatorial;
}