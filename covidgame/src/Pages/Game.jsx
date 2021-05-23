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
		score: 0,
		risk: 0,
		risk0: 2,
		risk1: 4,
		risk2: 6
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

	async postscore (){
		axios.post('http://localhost:8800/updatePoints', {userId: 'lano', points: this.state.score}).then((result) => {
			alert("Score Updated");
			window.location.href= "/Home";
		}).catch(error => {
			console.log(error);
			alert("ERROR Score Not Updated");
			return error;
		});
	}

	async postuser (){
		var userpost= axios.post('http://localhost:8800/userPoints', {userId: 'lano'}).then((result) => {
			alert("User score saved");
			window.location.href= "/Home";
		}).catch(error => {
			console.log(error);
			alert("ERROR User not saved");
			return error;
		});
		this.setState({score: userpost.data[0].points});
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

		const handleRiskOptionClick = () =>{
			this.setState({risk: this.state.risk})
		};

		const handleAnswerOptionClick = (isCorrect) => {
            if (isCorrect) {
                this.setState({score: this.state.score + this.state.risk})
				this.setState({risk: this.state.risk = 1})
            } else {
				this.setState({score: this.state.score - this.state.risk})
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
			<div class ='bet'>
				<h4>Choose Your Bet</h4>
				
				<div className='answer-section'>
				&nbsp;<button onClick={() => handleRiskOptionClick(this.state.risk = this.state.risk0)} >Risk 0 = 2 pts</button>&nbsp;
						<button onClick={() => handleRiskOptionClick(this.state.risk = this.state.risk1)} >Risk 1 = 4 pts</button>&nbsp;
						<button onClick={() => handleRiskOptionClick(this.state.risk = this.state.risk2)} >Risk 2 = 6 pts</button>&nbsp;
				</div>
			</div>
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



