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

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export const InputName = styled.form`
  display: flex;
  flex-flow: column;

  input{
    padding: 10px;
    border: 1px;
    border-radius: 2px;

    &:focus{
      border: 1px solid ${({ theme }) => theme.colors.primary}
    }
  }

  button{
    transition: .2s;
    margin-top: 5%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: 4px;
    border: 1px;

    &:hover{
      cursor: pointer;
    }
  }
`;

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <>
      <IndexPage />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <InputName onSubmit={handleSubmit}>
                <input
                  id="name"
                  placeholder="Digite aqui seu nome"
                  type="text"
                  value={name}
                  autoComplete="disabled"
                  onChange={(event) => setName(event.target.value)}
                />
                <button
                  disabled={name === ''}
                  style={name === ''
                    ? {
                      transition: '.2s',
                      opacity: '0',
                      position: 'absolute',
                      top: '-10px',
                    }
                    : {
                      transition: '.2s',
                      opacity: '1',
                      position: 'relative',
                      top: '0px',
                    }}
                  type="submit"
                >
                  Jogar
                </button>
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
