import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz"

export const QuestionSummary = () => {
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch(quiz.actions.restart());
      }


  return (
    <section className="quiz-summary">
        <h1 className="quiz-h1">Congratulations! You have finished the quiz!</h1>
        <p>Please find your results bellow:</p>


        <button className="" onClick={handleRestart}>Try again</button>
    </section>
  )
}
