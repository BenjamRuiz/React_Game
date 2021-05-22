import React, { useState } from "react";
import '../styles/quiz.css'
import axios from 'axios';

class Game extends React.Component {

	state = {
		questions: [],
		questionText: '',
		answerOptions: null,
		currentQuestion: 0,
		showScore: false,
		score: 0
	}

	componentDidMount() {
        this.getquestions();
    }

	async getquestions () {
		const res = await axios.get("http://localhost:8800").catch(error =>{
			console.log(error);
			alert("Error sending questions")
			return error;
		});;

		this.setState({questions: res.data, questionText: res.data[0].question, answerOptions: res.data[0].answers});
	}

	/*async function getanswers () {
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

	/*const questions = [
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
	];*/

	//console.log("mandar pregunta", quiz);
	//let answer = getanswers();
	//console.log("mandar respuestas", answer);

	render() {

		const handleAnswerOptionClick = (isCorrect) => {
            if (isCorrect) {
                this.setState({score: this.state.score + 1})
            }
            const nextQuestion = this.state.currentQuestion + 1;
            if (nextQuestion < this.state.questions.length) {
                this.setState({currentQuestion: nextQuestion})
                this.setState({questionText: this.state.questions[nextQuestion].question})
                this.setState({answerOptions: this.state.questions[nextQuestion].answers})
            } else {
                this.setState({showScore: true})
            }
        };

		return (
		<div>
				<br />
				<br />
				<br />
			<container class="d-flex justify-content-center"> 
			<div className='app'>
				{this.state.showScore ? 
					(<div className='score-section'>
						You scored {this.state.score} out of {this.state.questions.length}
					</div>
					) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {this.state.currentQuestion + 1}</span>/{this.state.questions.length}
							</div>
							<div className='question-text'>{this.state.questionText}</div>
						</div>

						{this.state.answerOptions != null ? 
							(
							<div className='answer-section'>
								<button onClick={() => handleAnswerOptionClick(this.state.answerOptions.answer1.isCorrect)}>{this.state.answerOptions.answer1.text}</button>
								<button onClick={() => handleAnswerOptionClick(this.state.answerOptions.answer2.isCorrect)}>{this.state.answerOptions.answer2.text}</button>
								<button onClick={() => handleAnswerOptionClick(this.state.answerOptions.answer3.isCorrect)}>{this.state.answerOptions.answer3.text}</button>
								<button onClick={() => handleAnswerOptionClick(this.state.answerOptions.answer4.isCorrect)}>{this.state.answerOptions.answer4.text}</button>
							</div>)
							:
							(<div></div>)}
						
					</>
				)}
			</div>
		</container>
		</div>
		);
	}
}
export default Game;



