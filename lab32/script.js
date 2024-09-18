const questions = [
    {
        question: "Qual princesa foi trancada em uma torre por dezoito anos?",
        answers: ["Tiana", "Rapunzel", "Moana", "Mérida"],
        correctAnswer: 1
    },
    {
        question: "Qual princesa perdeu seu salto de cristal?",
        answers: ["Cinderela", "Jasmine", "Ariel", "Moana"],
        correctAnswer: 0
    },
    {
        question: "Qual princesa foi amaldiçoada a dormir por cem anos?",
        answers: ["Bela", "Branca de Neve", "Aurora", "Mulan"],
        correctAnswer: 2
    },
    {
        question: "Qual princesa beijou um sapo?",
        answers: ["Tiana", "Raya", "Mérida", "Jasmine"],
        correctAnswer: 0
    },
    {
        question: "Qual princesa lutou em uma guerra disfarçada de homem?",
        answers: ["Pocahontas", "Bela", "Mulan", "Moana"],
        correctAnswer: 2
    }
];

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const answerLabels = document.querySelectorAll(`input[name="question${index}"]`);

        answerLabels.forEach((label,i) => {
            const labelElement = label.parentNode; //pega o elemento 
            if(i === q.correctAnswer) {
                labelElement.classList.add('correct');
            } else {
                labelElement.classList.add('incorrect');
            }
        });

        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
            
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
}

window.onload = loadQuestions;