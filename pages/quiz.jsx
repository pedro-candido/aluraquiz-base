/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';

import db, { questions } from '../db.json';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

const QuestionWidget = ({ question, setQuestion, answer, setAnswer, totalQuestions }) => (
  <Widget>
    <Widget.Header>
      <h3>{`Question ${question} of ${totalQuestions}`}</h3>
    </Widget.Header>
    <Widget.Content>
      <h2>{questions[question - 1].title}</h2>
      <p>{questions[question - 1].description}</p>

      {questions[question - 1].alternatives.map((alternative) => (
        <div key={alternative}>
          <input
            id={alternative}
            name={`question_${question}`}
            type="radio"
            onCheck={setAnswer(question)}
          />
          <label htmlFor={alternative}>{alternative}</label>
        </div>
      ))}
      <button type="button" onClick={() => setQuestion(question + 1)}>
        Next question
      </button>
    </Widget.Content>
  </Widget>
);

const QuizPage = () => {
  const [question, setQuestion] = useState(1);
  const [answer, setAnswer] = useState('')
  const totalQuestions = questions.length;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuestionWidget
          question={question}
          setQuestion={setQuestion}
          totalQuestions={totalQuestions}
          answer={answer}
          setAnswer={setAnswer}
        />
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;
