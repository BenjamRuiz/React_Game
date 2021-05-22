import React, { useState } from "react";
import '../styles/quiz.css'
import axios from 'axios';

 /*function getquestions () {
	let dato={};
	let q=axios.get('http://localhost:8800').then((response) => {
		console.log("entre a la funcion getquestion", response);	
		dato=response.data;
		return response.data.question;
	}).
	catch(error =>{
		console.log(error);
		alert("Error sending questions")
		return error;
	});
	return dato;
}
async function getanswers () {
	let ans=axios.get('http://localhost:8800').then((response) => {
		console.log("entre a la funcion dice Benji");	
		return response.data.answers;
	}).
	catch(error =>{
		console.log(error);
		alert("Error sending answers")
		return error;
	});
	return await ans;
}*/


export default function App() {

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who won the FIFA World Cup of 2014',
			answerOptions: [
				{ answerText: 'Argentina', isCorrect: false },
				{ answerText: 'Germany', isCorrect: true },
				{ answerText: 'Brasil', isCorrect: false },
				{ answerText: 'Netherlands', isCorrect: false },
			],
		},
		{
			questionText: 'Which country produces the most coffee in the world?',
			answerOptions: [
				{ answerText: 'Brazil', isCorrect: true },
				{ answerText: 'Colombia', isCorrect: false },
				{ answerText: 'Nicaragua', isCorrect: false },
				{ answerText: 'Costa Rica', isCorrect: false },
			],
		},
		{
			questionText: 'Hg is the chemical symbol of which element?',
			answerOptions: [
				{ answerText: 'Helium', isCorrect: false },
				{ answerText: 'Magnesium', isCorrect: false },
				{ answerText: 'Mercury', isCorrect: true },
				{ answerText: 'Magnesium', isCorrect: false },
			],
		},
	];
	//let quiz = getquestions();
	//console.log("mandar pregunta", quiz);
	//let answer = getanswers();
	//console.log("mandar respuestas", answer);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
    <div>
            <br />
            <br />
            <br />
          <container class="d-flex justify-content-center"> 
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </container>
    </div>
	);
}
