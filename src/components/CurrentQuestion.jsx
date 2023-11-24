import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";
import { QuestionSummary } from "./QuestionSummary";
import "./quiz.css";
import { Answer } from "./Answer"

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  // Submit answer
  const handleSubmitAnswer = (answerIndex) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: answerIndex,
      })
    );

    if (answerIndex === question.correctAnswerIndex) {
      console.log("You are correct")

    } else { console.log("you are wrong")}
  };

   // Next question
   const handleGoToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());

    if (state.quiz.currentQuestionIndex + 1 === state.quiz.questions.length) {
      console.log("Last question reached");
    }
  };
 
  return (
    <section className="quiz-wrapper">
      <header className="bold progress col-1-charcoal">
        Question {question.id} of 5
      </header>

      <form>
        <h1>Question: {question.questionText}</h1>

        {/* Answer options array */}
        {question.options.map((choice, index) => (
          <div key={index} className="quiz-choice-container">
            <button
              className="quiz-choice-button col-3-teaGreen"
              onClick={() => handleSubmitAnswer(index)}>
              {choice}
            </button>
          </div>
        ))}

        <Answer />
        
      </form>
    </section>
  );
};
