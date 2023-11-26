import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { quiz } from '../reducers/quiz';

export const AnswerOptions = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const [isCorrect, setIsCorrect] = useState(null)

  // Submit answer
  const handleSubmitAnswer = (selectedAnswerIndex) => {
    dispatch(
      quiz.actions. submitAnswer({
        questionId: question.id,
        answerIndex: selectedAnswerIndex,
      })
    );

    

    if (selectedAnswerIndex === question.correctAnswerIndex) {
      console.log("You are correct")
      setIsCorrect(true);

    } else { 
      console.log("you are wrong")
      setIsCorrect(false);
    }
  };

  
  
  // Next question
  const handleGoToNextQuestion = () => {
    console.log("Going to next question...");
    dispatch(
    quiz.actions.goToNextQuestion()
    );
  };


  return (
    <div>
      {question.options.map((choice, index) => (
        <div 
        key={index}
        className="quiz-choice-container">
          <button
          className={`quiz-choice-button col-3-teaGreen ${isCorrect !== null && index === answer?.answerIndex ? (isCorrect ? "quiz-choice-button-correct" : "quiz-choice-button-wrong") : ""}`}
          onClick={() => handleSubmitAnswer(index)}
          disabled={answer !== undefined}>
            {choice}
          </button>
        </div>
      ))
      }

      {answer !== undefined && (
        <>
        <p className="correct-answer">The correct answer is {question.options[question.correctAnswerIndex]}.</p>
        <div className="bottom-buttons">
          <button
          className="col-1-charcoal next"
          onClick={handleGoToNextQuestion}>
              Next Question
          </button>
        </div>
        </>
      )}
     
    </div>
  );
};
