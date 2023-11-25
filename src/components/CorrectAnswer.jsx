import { useSelector, useDispatch } from "react-redux";
import { quiz } from '../reducers/quiz';

export const CorrectAnswer = () => {
    const dispatch = useDispatch();
    const question = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
    );

    // Next question
    const handleGoToNextQuestion = () => {
        dispatch(
        quiz.actions.goToNextQuestion()
        );
    };

  return (
    <div>
        <p>You are correct</p>
        <button
        className="col-1-charcoal next"
        onClick={handleGoToNextQuestion}>
            Next Question
        </button>
    </div>
  );
};
