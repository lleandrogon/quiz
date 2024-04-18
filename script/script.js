const questions = [
    {
        question: "Qual destes é um operador de comparação em JavaScript?",
        answers: [
            { text: "&&", correct: false},
            { text: "||", correct: false},
            { text: "function", correct: false},
            { text: "===", correct: true},
            { text: "[]", correct: false},
        ]
    },
    {
        question: "O que o método `parseInt()` faz em JavaScript?",
        answers: [
            { text: "Remove espaços em branco de uma string", correct: false},
            { text: "Converte uma string em um número inteiro", correct: true},
            { text: "Converte um número em uma string", correct: false},
            { text: "Retorna o valor absoluto de um número", correct: false},
            { text: "Arredonda um número para o inteiro mais próximo", correct: false},
        ]    
    },
    {
        question: "Qual destes é um tipo de dado primitivo em JavaScript?",
        answers: [
            { text: "object", correct: false},
            { text: "function", correct: false},
            { text: "string", correct: true},
            { text: "array", correct: false},
            { text: "null", correct: false},
        ] 
    },
    {
        question: "Em JavaScript, qual é o operador lógico 'OU'?",
        answers: [
            { text: "&&", correct: false},
            { text: "||", correct: true},
            { text: "!", correct: false},
            { text: "==", correct: false},
            { text: "+=", correct: false},
        ] 
    },
    {
        question: "O que o método `push()` faz em um array em JavaScript?",
        answers: [
            { text: "Remove o último elemento do array", correct: false},
            { text: "Adiciona um novo elemento ao início do array", correct: false},
            { text: "Concatena dois arrays", correct: false},
            { text: "Adiciona um novo elemento ao final do array", correct: true},
            { text: "Inverte a ordem dos elementos no array", correct: false},
        ]
    },
    {
        question: "Qual destes é um método para iterar sobre os elementos de um array em JavaScript?",
        answers: [
            { text: "jump()", correct: false},
            { text: "iterate()", correct: false},
            { text: "forEach()", correct: true},
            { text: "loop()", correct: false},
            { text: "execute()", correct: false},
        ]
    },
    {
        question: "O que o operador `typeof` retorna quando usado com um array em JavaScript?",
        answers: [
            { text: "'object'", correct: true},
            { text: "'array'", correct: false},
            { text: "'list'", correct: false},
            { text: "'number'", correct: false},
            { text: "'undefined'", correct: false},
        ]
    },
    {
        question: "Qual destes é um exemplo válido de declaração de função em JavaScript?",
        answers: [
            { text: "function = myFunction() {}", correct: false},
            { text: "function myFunction() = {}", correct: false},
            { text: "function myFunction() {}", correct: true},
            { text: "myFunction() = function {}", correct: false},
            { text: "myFunction = function() {}", correct: false},
        ]
    },
    {
        question: "Em JavaScript, como você acessa o último elemento de um array chamado 'myArray'?",
        answers: [
            { text: "myArray.getLast()", correct: false},
            { text: "myArray[-1]", correct: false},
            { text: "myArray.get(-1)", correct: false},
            { text: "myArray.length - 1", correct: false},
            { text: "myArray[myArray.length - 1]", correct: true},
        ]
    },
    {
        question: "Qual destes métodos é usado para remover o primeiro elemento de um array em JavaScript?",
        answers: [
            { text: "removeFirst()", correct: false},
            { text: "shift()", correct: true},
            { text: "unshift()", correct: false},
            { text: "splice()", correct: false},
            { text: "pop()", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Começar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
