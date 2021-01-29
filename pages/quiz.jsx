/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';

import db, { questions } from '../db.json';
import IndexPage from '../src/components/IndexPage';
import Button from '../src/components/Button';

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>Carregando...</Widget.Header>

            <Widget.Content>[Desafio do Loading]</Widget.Content>
        </Widget>
    );
}

const Title = styled.h2`
  margin-bottom
`;

const QuestionWidget = ({
    question,
    setQuestion,
    answer,
    setAnswer,
    totalQuestions,
}) => {
    const router = useRouter();
    const questionId = `question__${question}`;

    const handleQuestion = (event) => {
        event.preventDefault();
        if (Number(question) === Number(totalQuestions))
            return router.push(`/`);
        setQuestion(question + 1);
    };

    return (
        <>
            <IndexPage>FF9 - Question {question}</IndexPage>
            <Widget>
                <Widget.Header>
                    <h3>{`Question ${question} of ${totalQuestions}`}</h3>
                </Widget.Header>
                <Widget.Content>
                    <h2>{questions[question - 1].title}</h2>
                    <p>{questions[question - 1].description}</p>
                    <form action={handleQuestion}>
                        {questions[question - 1].alternatives.map(
                            (alternative, index) => {
                                const alternativeId = `alternative_${index}`;
                                return (
                                    <div key={alternative}>
                                        <Widget.Topic
                                            as='label'
                                            htmlFor={`question__${alternative}`}
                                        >
                                            <input
                                                id={`question__${alternative}`}
                                                name={questionId}
                                                type='radio'
                                                required
                                            />
                                            {alternative}
                                        </Widget.Topic>
                                    </div>
                                );
                            }
                        )}
                        <Button type='submit'>Next question</Button>
                    </form>
                </Widget.Content>
            </Widget>
        </>
    );
};

const screenStates = {
  quiz: 'quiz',
  result: 'result',
  loading: 'loading'
}

const QuizPage = () => {
    const [question, setQuestion] = useState(1);
    const [answer, setAnswer] = useState('');
    const [screen, setScreen] = useState(screenStates.loading);
    const totalQuestions = questions.length;

    useEffect(() =>{
      setTimeout(()=>{
        setScreen(screenStates.quiz)
      }, 1 * 1000)
    }, [])



    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                {screenStates.quiz === screen && (
                    <QuestionWidget
                        question={question}
                        setQuestion={setQuestion}
                        totalQuestions={totalQuestions}
                        answer={answer}
                        setAnswer={setAnswer}
                    />
                )}
                {screenStates.loading === screen && <LoadingWidget />}
                {screenStates.result === screen && <div>Você acertou x questões</div>}
            </QuizContainer>
        </QuizBackground>
    );
};

export default QuizPage;
