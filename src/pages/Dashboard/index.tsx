import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de resositórios do GitHub</Title>

      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/50510515?v=4"
            alt="Repositório"
          />
          <div>
            <strong>aluiziodevelopes/mini-curso-reactjs</strong>
            <p>Repositorio do mini curso gratuito de reactjs</p>
          </div>
          <FiChevronsRight size={20} />
        </a>
      </Repos>
    </>
  );
};
