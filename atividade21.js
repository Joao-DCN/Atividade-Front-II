"use strict";

/*
  ATIVIDADE PRÁTICA — LEITURA E ALTERAÇÃO DO DOM
*/

// 01. Solicite o nome do estudante e altere a mensagem de
// boas-vindas utilizando textContent.
const nomeEstudante = prompt("Por favor, digite seu nome:") || "Estudante";
const elementoBoasVindas = document.querySelector("#mensagem-boas-vindas");
elementoBoasVindas.textContent = `Seja bem-vindo(a), ${nomeEstudante}!`;

// 02. Mostre no Console o texto atual do nome da loja usando
// textContent. Depois, altere o nome da loja com textContent.
const elementoNomeLoja = document.querySelector("#nome-loja");
console.log("Nome atual da loja:", elementoNomeLoja.textContent);
elementoNomeLoja.textContent = "TechStore Premium";

// 03. Altere o título principal da página utilizando textContent.
const elementoTituloPrincipal = document.querySelector("#titulo-principal");
elementoTituloPrincipal.textContent = "Catálogo Exclusivo de Tecnologia";

// 04. Mostre no Console o texto visível do subtítulo utilizando
// innerText. Depois, altere o subtítulo com innerText.
const elementoSubtitulo = document.querySelector("#subtitulo-principal");
console.log("Subtítulo atual (innerText):", elementoSubtitulo.innerText);
elementoSubtitulo.innerText = "Os melhores equipamentos para desenvolvedores e estudantes.";

// 05. Insira o aviso de promoção utilizando innerHTML.
// O aviso deve possuir pelo menos uma tag <strong> e uma tag <span>.
const elementoAvisoPromo = document.querySelector("#aviso-promocao");
elementoAvisoPromo.innerHTML = "<strong>Aproveite!</strong> <span>Cupom TECH10 ativo para 10% de desconto.</span>";

// 06. Altere a categoria do produto em destaque utilizando
// textContent.
const elementoCategoriaDestaque = document.querySelector("#categoria-destaque");
elementoCategoriaDestaque.textContent = "Periféricos High-End";

// 07. Altere o nome do produto em destaque utilizando innerText.
const elementoNomeDestaque = document.querySelector("#nome-produto-destaque");
elementoNomeDestaque.innerText = "Teclado Mecânico RGB Pro";

// 08. Mostre no Console o textContent e o innerText da descrição
// do produto. Depois, altere a descrição utilizando innerText.
const elementoDescricaoDestaque = document.querySelector("#descricao-produto-destaque");
console.log("Descrição (textContent):", elementoDescricaoDestaque.textContent);
console.log("Descrição (innerText):", elementoDescricaoDestaque.innerText);
elementoDescricaoDestaque.innerText = "Teclado mecânico com switches azuis, iluminação RGB customizável e layout ABNT2.";

// 09. Altere o preço do produto em destaque utilizando textContent.
const elementoPrecoDestaque = document.querySelector("#preco-produto-destaque");
elementoPrecoDestaque.textContent = "R$ 349,90";

// 10. Altere a situação do estoque utilizando innerHTML.
// Destaque a situação com uma tag <strong>.
// Utilize somente um texto definido no próprio código.
const elementoEstoque = document.querySelector("#status-estoque");
elementoEstoque.innerHTML = "Em estoque: <strong>12 unidades disponíveis</strong>";

// 11. Atualize as três estatísticas do catálogo.
// Utilize textContent na primeira, innerText na segunda e
// innerHTML com uma tag <strong> na terceira.
const elementoStatTotalProdutos = document.querySelector("#total-produtos");
const elementoStatTotalCategorias = document.querySelector("#total-categorias");
const elementoStatTotalOfertas = document.querySelector("#total-ofertas");

elementoStatTotalProdutos.textContent = "24";
elementoStatTotalCategorias.innerText = "5";
elementoStatTotalOfertas.innerHTML = "<strong>8</strong>";

// 12. Altere os nomes dos três produtos secundários.
// Utilize textContent para impedir que possíveis tags sejam
// interpretadas pelo navegador.
const elementoProduto1 = document.querySelector("#nome-produto-01");
const elementoProduto2 = document.querySelector("#nome-produto-02");
const elementoProduto3 = document.querySelector("#nome-produto-03");

elementoProduto1.textContent = "Teclado Mecânico Compacto";
elementoProduto2.textContent = "Mouse Ergonômico Sem Fio";
elementoProduto3.textContent = "Monitor Ultrawide 29\"";

// 13. Atualize a lista de benefícios utilizando innerHTML.
// Crie pelo menos três elementos <li> dentro da lista.
const elementoListaBeneficios = document.querySelector("#lista-beneficios");
elementoListaBeneficios.innerHTML = `
  <li>Frete grátis em compras acima de R$ 200</li>
  <li>Garantia de 12 meses em todos os produtos</li>
  <li>Suporte técnico especializado 24/7</li>
`;

// 14. Atualize automaticamente o ano do rodapé utilizando
// new Date().getFullYear() e textContent.
const elementoAnoAtual = document.querySelector("#ano-atual");
elementoAnoAtual.textContent = new Date().getFullYear();

// 15. Mostre no Console o outerHTML do texto final do rodapé.
// Depois, utilize outerHTML para substituir completamente esse
// elemento por uma nova tag <p> com classe e conteúdo diferentes.
// Após a substituição, selecione novamente o novo elemento e
// mostre seu outerHTML no Console.
const elementoTextoRodape = document.querySelector("#texto-rodape");
console.log("outerHTML original do texto do rodapé:", elementoTextoRodape.outerHTML);

elementoTextoRodape.outerHTML = '<p class="creditos-rodape" id="novo-texto-rodape">CodeStore — Todos os direitos reservados.</p>';

const elementoNovoTextoRodape = document.querySelector("#novo-texto-rodape");
console.log("outerHTML do novo elemento inserido:", elementoNovoTextoRodape.outerHTML);