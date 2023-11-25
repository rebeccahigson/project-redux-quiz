import { useDispatch, useSelector } from "react-redux";
import { quiz } from '../reducers/quiz';

export const QuestionSummary = () => {
    const dispatch = useDispatch();
    const finalAnswers = useSelector(
      (state) => state.quiz.answers
    );

    const correctAnswersSummary = finalAnswers.filter((answer) => answer.isCorrect).length;

    const handleRestart = () => {
        dispatch(quiz.actions.restart());
      }


  return (
    <section className="quiz-summary">
        <h1 className="quiz-h1">Congratulations! You have finished the quiz!</h1>
        <p>You got {correctAnswersSummary} answers correct out of 5</p>

        <button 
        className="" 
        onClick={handleRestart}>
          Try again
        </button>
    </section>
  )
}
