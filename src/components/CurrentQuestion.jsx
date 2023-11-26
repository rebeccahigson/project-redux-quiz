
import { useSelector } from "react-redux";
import { AnswerOptions } from "./AnswerOptions";
import { QuestionSummary } from "./QuestionSummary";


export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector(
    (state) => state.quiz.quizOver
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (quizOver) {
    return <QuestionSummary />
  }

  

  return (
    <>
    <header>
       <p className="bold progress col-1-charcoal">
        Question {question.id} of 5
      </p>
    </header>
    <form>
      <h1>Question: {question.questionText}</h1>
      <AnswerOptions />
    </form>
    </>
  );
};