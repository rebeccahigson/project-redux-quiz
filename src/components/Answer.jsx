import { useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";


export const Answer = () => {
    const question = useSelector(
        (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
      );

    const currentAnswer = useSelector(
        ((state) => state.quiz.answers)
      );


      

  return (
    <section>
        <p>You answered: </p>
        <p>The correct answer is: {question.options[question.correctAnswerIndex]}</p>
    </section>
  )
};
