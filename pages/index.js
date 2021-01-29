import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import IndexPage from '../src/components/IndexPage';
import Switch from '../src/components/Switch';
import Input from '../src/components/Input';
import QuizContainer from '../src/components/QuizContainer';

export const InputName = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input{
    padding: 10px;
    border: 1px;
    border-radius: 2px;
    width: 100%;
  }

  button{
    transition: .2s;
    font-size: 16px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    position: relative;
    right: 12%;

    &:hover{
      cursor: pointer;
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <>
      <IndexPage>FF9 Quiz</IndexPage>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <InputName onSubmit={handleSubmit}>
                <Input state={name} setState={setName} />
              </InputName>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <Switch to="quiz">Quiz da galera</Switch>

              <p>
                Salve salve
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/pedro-candido" />
      </QuizBackground>
    </>
  );
}
