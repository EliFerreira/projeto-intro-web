// SEMANA1---------------------------------

// const aluno; // "";
// const idade;//
// const cid; //""
// const temDiagnostico; //true

const aluno1 = "Fulano de Tal Farias";
const idade1 = 10;
const temDiagnostico1 = true;
const diagnostico1 = ["TDAH", "TEA"];

const aluno2 = "Sicrano da Silva Junior";
const idade2 = 9;
const temDiagnostico2 = true;
const diagnostico2 = ["DOWN", "TDAH"];

const aluno3 = "Beltrana Maria Duarte";
const idade3 = 11;
const temDiagnostico3 = true;
const diagnostico3 = ["TEA"];

const aluno4 = "Sicrana Lima Souza ";
const idade4 = 8;
const temDiagnostico4 = false;
const diagnostico4 = ["em análise"];

//Função para saber a média de idade dos alunos do AEE

const mediaIdade = (idade1 + idade2 + idade3 + idade4) / 4;
console.log(
  "A médida de idade dos alunos cadastrados no AEE é: ",
  Number(mediaIdade)
);

//RELATÓRIO

function relatorio(aluno, idade, temDiagnostico, diagnostico) {
  console.log(`${aluno.toUpperCase()}
Idade: ${idade}
Já recebeu o diagnóstico: ${temDiagnostico}
Resultado: ${diagnostico}`);
}
relatorio(aluno1, idade1, temDiagnostico1, diagnostico1);

relatorio(aluno2, idade2, temDiagnostico2, diagnostico2);
relatorio(aluno3, idade3, temDiagnostico3, diagnostico3);
relatorio(aluno4, idade4, temDiagnostico4, diagnostico4);
