const perguntas = [
  {
    pergunta: "O que significa JavaScript?",
    respostas: [
      "Java para web",
      "Linguagem de programação para páginas web interativas",
      "Java para desenvolvimento mobile",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal função do comando 'document.getElementById()' em JavaScript?",
    respostas: [
      "Alterar o estilo de um elemento HTML",
      "Selecionar um elemento HTML pelo seu ID",
      "Criar um novo elemento HTML",
    ],
    correta: 1
  },
  {
    pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: [
      "var",
      "variable",
      "vrb",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um array em JavaScript?",
    respostas: [
      "Um tipo de dado para armazenar apenas números",
      "Uma estrutura de controle de fluxo",
      "Uma coleção ordenada de valores",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um modelo para interação com o usuário",
      "Uma representação estruturada de um documento HTML",
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um loop de repetição",
      "Um bloco de código que pode ser chamado e executado",
      "Uma variável global",
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para adicionar um elemento a um array em JavaScript?",
    respostas: [
      "push()",
      "append()",
      "add()",
    ],
    correta: 0
  },
  {
    pergunta: "O que é JSON em JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um formato de dados para intercâmbio de informações",
      "Uma função de manipulação de strings",
    ],
    correta: 1
  },
  {
    pergunta: "Como você faz um comentário de uma linha em JavaScript?",
    respostas: [
      "// Comentário",
      "# Comentário",
      "/* Comentário */",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para agendar a execução de uma função em um intervalo de tempo em JavaScript?",
    respostas: [
      "setTimeout()",
      "setInterval()",
      "delay()",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


// loop ou repetição 
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta


for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta

  quizItem.querySelector('dl').appendChild(dt)
}



quizItem.querySelector('dl dt').remove()
  //coloca a pergunta na tela
quiz.append(quizItem)
}