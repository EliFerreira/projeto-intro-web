// Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

const alunos = [
  {
    nome: "Fulano de Tal Farias",
    idade: 10,
    temDiagnostico: true,
    resultado: ["TDAH", "TEA"],
  },

  {
    nome: "Sicrano da Silva Junior",
    idade: 9,
    temDiagnostico: true,
    resultado: ["DOWN", "TDAH"],
  },
  {
    nome: "Beltrana Maria Duarte",
    idade: 11,
    temDiagnostico: true,
    resultado: ["TEA"],
  },

  {
    nome: "Sicrana Lima Souza ",
    idade: 8,
    temDiagnostico: false,
    resultado: ["em análise"],
  },
  {
    nome: "Jovana Santos Cruz ",
    idade: 9,
    temDiagnostico: false,
    resultado: ["em análise"],
  },
];

//ANTES
console.log("nome: " + alunos[0].nome);
console.log("idade: " + alunos[0].idade);
console.log("já recebeu diagnóstico: " + alunos[0].temDiagnostico);
console.log("resultado: " + alunos[0].resultado);
console.log("-----SEMANA 3-----");

function relatorioAlterado(alunos) {
  for (aluno of alunos) {
    for (propriedade in aluno) {
      console.log(`${propriedade}: ${aluno[propriedade]}`);
    }
    console.log("------//------");
  }
}
relatorioAlterado(alunos);

// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
