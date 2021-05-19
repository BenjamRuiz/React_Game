function buildQuiz(){
    // variable to store the HTML output
const output = [];

// for each question...
myQuestions.forEach(
    (currentQuestion, questionNumber) => {

    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
        </label>`
        );
    }

    // add this question and its answers to the output
    output.push(
        `<div class ="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
        <div>`       
    );
    }
);

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
    else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    });
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
    question: "Hg is the chemical symbol of which element?",
    answers: {
        a: "Helium",
        b: "Magnesium",
        c: "Mercury"
    },
    correctAnswer: "c"
    },
    {
    question: "Which country produces the most coffee in the world?",
    answers: {
        a: "Brazil",
        b: "Colombia",
        c: "Nicaragua"
    },
    correctAnswer: "a"
    },
    {
    question: "How much does the Chewbacca costume weigh?",
    answers: {
        a: "2 kg",
        b: "5 kg",
        c: "3.6 kg",
    },
    correctAnswer: "c"
    }
];


// display quiz right away
buildQuiz();

//Pagination
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);


nextButton.addEventListener("click", showNextSlide);

// on submit, show results
submitButton.addEventListener('click', showResults);
