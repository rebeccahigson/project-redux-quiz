import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../reducers/quiz";
import { QuestionSummary } from "./QuestionSummary";
import "./quiz.css";

export const CurrentQuestion = () => {
  const dispatch = useDispatch();

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  // Submit answer
  const handleSubmitAnswer = (answerIndex) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: answerIndex,
      })
    );
  };

  // Next question
  const handleGoToNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <section className="quiz-wrapper">
      <p className="bold progress col-1-charcoal">
        Question {question.id} of 5
      </p>
      <form>
        <h1 className="quiz-h1">Question: {question.questionText}</h1>

        {/* Answer options array */}
        {question.options.map((choice, index) => (
          <div key={index} className="quiz-choice-container">
            <button
              className="quiz-choice-button col-3-teaGreen"
              onClick={() => handleSubmitAnswer(index)}
            >
              {choice}
            </button>
          </div>
        ))}
      </form>
      <p>You answered {question.options[question.answerIndex]}</p>
      <p>
        <span className="bold">The correct answer is:</span>{" "}
        {question.options[question.correctAnswerIndex]}
      </p>

      {/* Next and submit button */}
      <div className="bottom-buttons">
        {question.id < 4 ? (
          <button
            className="col-1-charcoal next"
            onClick={handleGoToNextQuestion}
          >
            Next question
          </button>
        ) : (
          <button className="col-4-lightGreen"> Submit</button>
        )}
      </div>

      <button className="quiz-choice-button-correct col-3-teaGreen">
        <span className="check">✓</span> Testing Correct
      </button>
      <button className="quiz-choice-button-wrong col-6-red">
        <span className="x-wrong">✘</span> Testing Wrong
      </button>
      <QuestionSummary />
    </section>
  );
};
