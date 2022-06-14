const answerElement = document.querySelector("#answer")
const questionInput = document.querySelector("#questionInput")
const questionButton = document.querySelector('#questionButton')
const answers = [
  "Os cálculos foram positivos para isso!",
  "As probabilidades não estão a favor disso.",
  "É decididamente assim.",
  "A soma do quadrado das possibilidades é igual ao quadro das incertezas.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Zero não pode ser dividido por zero, logo isso é impossível.",
  "Você pode contar com isso.",
  "No momento a resposta pertence ao conjunto dos imaginários.",
  "Delta é positivo, então sim.",
  "Os cálculos dizem que não.",
  "Provavelmente, as chances estão entre 1 e -1.",
  "Não é possível prever agora.",
  "Há uma possibilidade exponencial.",
  "As perspectivas não são tão boas.",
  "Sim, assim como 1 + 1 = 2.",
  "Não foi possível identificar as variáveis.",
  "Os resultados apontam que sim.",
  "Provavelmente, mesmo que tangencialmente."
]

function doQuestion() {

  if(questionInput.value == "") {
    alert("Digite sua pergunta")
    return
  }

  questionButton.setAttribute("disabled", true)

  const question = "<div>" + questionInput.value + "</div>"

  const  totalAnswers = answers.length
  const randomNumber = Math.floor(Math.random() * totalAnswers)

  answerElement.innerHTML = question + answers[randomNumber]

  answerElement.style.opacity = 1;

  setTimeout(function() {
    answerElement.style.opacity = 0;
    questionButton.removeAttribute("disabled")
  }, 3000)
}