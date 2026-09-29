function analisarMultiplosDeTres(limite) {
  let quantidade = 0;
  let soma = 0;

  for (let i = 1; i <= limite; i++) {
    if (i % 3 === 0) {
      console.log(i);
      quantidade++;
      soma += i;
    }
  }

  console.log(`Quantidade: ${quantidade}`);
  console.log(`Soma: ${soma}`);
}