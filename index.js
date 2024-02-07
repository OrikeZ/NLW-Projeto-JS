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

// a função queryselector dentro da função biblioteca document, 
// me auxilia para selecionar um item do documento, facilitando
// o uso, a modificação e a utilidade do mesmo
// citando um id usando # consigo modificar o item #quiz citado no html
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop ou repetição 
//cria uma variavel constanto e faz ela fazer um loop na buscando 
// na varial perguntas, dentro desse loop se cria a variavel quiziTEM
//que copia o template do html fazendo copiar a formatação
// e fazendo com que as a variavel perguntas se replique na formatação do html
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

// faz a mesma coisa que o item acima porém para as respostas pegando 
// o filho dt  e mudando o conteudo do span do html para a variavel resposta
  for(let resposta of item.respostas){
   const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
   quizItem.querySelector('dl').appendChild(dt)

}

quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
quiz.append(quizItem)
}