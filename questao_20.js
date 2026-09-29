function simularCrescimento(rodadas) {
  let quantidade = 1;
  for (let i = 1; i <= rodadas; i++) {
    quantidade *= 2;
    console.log(`Rodada ${i}: ${quantidade}`);
  }
}