import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Question from "../../components/Question";
import { nanoid } from "nanoid"
import he from "he"
import Confetti from 'react-confetti'


export default function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [endGame, setEndGame] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  

  useEffect(() => {
    fetchTriviaData();
  }, [endGame]);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    
    for (let i = 0; i < shuffledArray.length; i++) {
      const answers = shuffledArray[i].answers;
      shuffledArray[i].answers = shuffleAnswers(answers);
    }
    
    return shuffledArray;
  }
  
  function shuffleAnswers(answers) {
    const shuffledAnswers = [...answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    return shuffledAnswers;
  }

  const fetchTriviaData = async () => {
    if(!endGame){ 
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
      );
      const data = await response.json();
      setAllQuestions(shuffleArray(setQuestions(data)));
    } catch (error) {
      console.log("Error fetching trivia data:", error);
    }}
  };

  function setQuestions(data){
    const mappedQuestionsList = []
    for(let i = 0; i < 10; i++){
      let allAnswers = [...data.results[i].incorrect_answers, data.results[i].correct_answer]
      let questionId = nanoid();


      allAnswers = allAnswers.map(answer => ({
         text: he.decode(answer), 
         selected: false,
         id: nanoid(),
         questionId: questionId 
      }));
      
      mappedQuestionsList.push ({
        question: he.decode(data.results[i].question),
        answers: allAnswers,
        correctAnswer: he.decode(data.results[i].correct_answer),
        questionId: questionId,
        questionNumber: i + 1
      });
    };
    return mappedQuestionsList;
};

  function handleSelect(answerId, questionId) {
    console.log("answerId", answerId);
    const updatedQuestions = allQuestions.map((question) => {
      if (question.questionId !== questionId) {
        return question;
      } else {
        const updatedAnswers = question.answers.map((answer) => {
          if (answer.id === answerId) {
            return { ...answer, selected: true };
          } else {
            return { ...answer, selected: false };
          }
        });
        return { ...question, answers: updatedAnswers };
      }
    });
    setAllQuestions(updatedQuestions);
  }
  function checkAnswers(questions, endGame) {
    let correct = 0;
    for (let question of questions) {
      for (let answer of question.answers) {
        if (answer.selected && answer.text === question.correctAnswer) {
          correct += 1;
        }
      }
    }
    
    return correct;
  }


  function finishGame() {
    const correct = checkAnswers(allQuestions, true);
    setCorrectAnswers(correct);
    setEndGame(!endGame);
  }
  

  const mappedQuestions = allQuestions.map((questionPart, index) => (
  <Question
    key={index}
    question={questionPart.question}
    answers={questionPart.answers}
    handleClick={handleSelect}
    questionId={questionPart.questionId} 
    gameFinished={endGame}
    correctAnswer={questionPart.correctAnswer}
    questionNumber={questionPart.questionNumber}
  />
  ))

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      {mappedQuestions}
      <Button className="w-50 mb-5" onClick={finishGame} id="liveToastBtn">{endGame? "Play again" : "Submit"}</Button>
      {endGame && <Confetti className="" width={window.innerWidth} height={window.innerHeight}/> }
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
      {endGame && <h1 >You got {correctAnswers} out of 10 correct!</h1>}
    </div>
  );
}