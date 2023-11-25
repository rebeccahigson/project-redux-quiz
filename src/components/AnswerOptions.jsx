import { useSelector, useDispatch } from "react-redux";
import { quiz } from '../reducers/quiz';
import { CorrectAnswer } from "./CorrectAnswer";

export const AnswerOptions = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => a.questionId === question.id)
  );

  // Submit answer
  const handleSubmitAnswer = (selectedAnswerIndex) => {
    dispatch(
      quiz.actions. submitAnswer({
        questionId: question.id,
        answerIndex: selectedAnswerIndex,
      })
    );

    if (answerIndex === question.correctAnswerIndex) {
      console.log("You are correct")

    } else { console.log("you are wrong")}


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
          className="quiz-choice-button col-3-teaGreen"
          onClick={() => handleSubmitAnswer(index)}
          disabled={answer !== undefined}>
            {choice}
          </button>
        </div>
      ))
      }
      {answer !== undefined && (
        <>
        <p>The correct answer is {question.options[question.correctAnswerIndex]}.</p>
        <button
        className="col-1-charcoal next"
        onClick={handleGoToNextQuestion}>
            Next Question
        </button>
        </>
      )}
     
    </div>
  );
};
