import { useSelector, useDispatch } from "react-redux";
import { quiz } from '../reducers/quiz';

export const Header = () => {
    const question = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
      );

  return (
    <header>
       <p className="bold progress col-1-charcoal">
        Question {question.id} of 5
      </p>
    </header>
  )
}
