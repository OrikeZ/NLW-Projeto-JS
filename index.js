const perguntas = [
  {
    pergunta: "Qual é o principal objetivo da Terapia Cognitivo Comportamental?",
    respostas: [
      "Explorar o inconsciente",
      "Identificar e modificar padrões de pensamento disfuncionais",
      "Promover a introspecção profunda",
    ],
    correta: 1
  },
  {
    pergunta: "Em que se baseia a TCC para tratar transtornos psicológicos?",
    respostas: [
      "Apenas em medicamentos",
      "Somente em mudanças comportamentais",
      "Modificar pensamentos e comportamentos",
    ],
    correta: 2
  },
  {
    pergunta: "Quem são os principais fundadores da Terapia Cognitivo Comportamental?",
    respostas: [
      "Sigmund Freud",
      "Aaron Beck e Albert Ellis",
      "Carl Rogers",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a ênfase da TCC no tratamento de transtornos mentais?",
    respostas: [
      "Apenas em medicamentos",
      "Apenas em mudanças comportamentais",
      "Modificar pensamentos e comportamentos",
    ],
    correta: 3
  },
  {
    pergunta: "O que são distorções cognitivas na Terapia Cognitivo Comportamental?",
    respostas: [
      "Padrões de comportamento repetitivos",
      "Erros sistemáticos no processamento de informações",
      "Sintomas físicos de transtornos mentais",
    ],
    correta: 2
  },
  {
    pergunta: "Como a TCC aborda o conceito de autoeficácia?",
    respostas: [
      "Ignora completamente",
      "Enfatiza a importância da autoeficácia",
      "Foca apenas em fatores externos",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um registro de pensamento na TCC?",
    respostas: [
      "Um diário pessoal",
      "Um documento para rastrear padrões de pensamento",
      "Um registro médico",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o papel do terapeuta na TCC?",
    respostas: [
      "Apenas ouvir o paciente",
      "Oferecer conselhos sem interação",
      "Colaborar ativamente com o paciente na identificação e modificação de pensamentos disfuncionais",
    ],
    correta: 3
  },
  {
    pergunta: "O que a TCC busca alcançar ao modificar pensamentos disfuncionais?",
    respostas: [
      "Eliminar completamente todos os pensamentos",
      "Substituir pensamentos negativos por pensamentos positivos",
      "Manter inalterados os padrões de pensamento",
    ],
    correta: 2
  },
  {
    pergunta: "Como a TCC trata as crenças nucleares ou centrais?",
    respostas: [
      "Ignora completamente",
      "Explora apenas em sessões iniciais",
      "Trabalha para modificar crenças disfuncionais profundamente enraizadas",
    ],
    correta: 3
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
