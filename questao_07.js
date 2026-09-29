function classificarTemperatura(temperatura) {
  if (temperatura < 20) {
    return "Frio";
  } else if (temperatura <= 30) {
    return "Agradável";
  } else {
    return "Quente";
  }
}