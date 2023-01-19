// Transforme os itens que criamos nas últimas semanas em objetos.

// nome:
// idade:
// temDiagnostico:
// resultado:

const aluno1 = {
  nome: "Fulano de Tal Farias",
  idade: 10,
  temDiagnostico: true,
  resultado: ["TDAH", "TEA"],
};

const aluno2 = {
  nome: "Sicrano da Silva Junior",
  idade: 9,
  temDiagnostico: true,
  resultado: ["DOWN", "TDAH"],
};
const aluno3 = {
  nome: "Beltrana Maria Duarte",
  idade: 11,
  temDiagnostico: true,
  resultado: ["TEA"],
};

const aluno4 = {
  nome: "Sicrana Lima Souza ",
  idade: 8,
  temDiagnostico: false,
  resultado: ["em análise"],
};
const aluno5 = {
  nome: "Jovana Santos Cruz ",
  idade: 9,
  temDiagnostico: false,
  resultado: ["em análise"],
};

//Função para saber a média de idade dos alunos do AEE

const mediaIdade =
  (aluno1.idade + aluno2.idade + aluno3.idade + aluno4.idade + aluno5.idade) /
  5;
console.log("A médida de idade dos alunos cadastrados no AEE é: ", +mediaIdade);

//RELATÓRIO---------------------------

function relatorio(nome, idade, temDiagnostico, resultado) {
  console.log(`${nome.toUpperCase()}
Idade: ${idade}
Já recebeu o diagnóstico: ${temDiagnostico}
Resultado: ${resultado}`);
}

relatorio(aluno1.nome, aluno1.idade, aluno1.temDiagnostico, aluno1.resultado);
relatorio(aluno2.nome, aluno2.idade, aluno2.temDiagnostico, aluno2.resultado);
relatorio(aluno3.nome, aluno3.idade, aluno3.temDiagnostico, aluno3.resultado);
relatorio(aluno4.nome, aluno4.idade, aluno4.temDiagnostico, aluno4.diagnostico);
relatorio(aluno5.nome, aluno5.idade, aluno5.temDiagnostico, aluno5.resultado);

// Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;-------------------

let alunos = [];

// Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push()------------------

// alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5);

//Criar uma verificação antes de dar o push e condição else, que, em caso de valor false na condição acima, exiba um **ALERT**

function alunosComDiagnostico(aluno) {
  if (aluno.temDiagnostico) {
    alunos.push(aluno);
  } else {
    alert(`${aluno.nome} não foi adicionade, pois está em análise.`);
  }
}

alunosComDiagnostico(aluno1);
alunosComDiagnostico(aluno2);
alunosComDiagnostico(aluno3);
alunosComDiagnostico(aluno4);
alunosComDiagnostico(aluno5);
console.log(alunos);
