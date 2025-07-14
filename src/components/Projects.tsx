import React from "react";
import "../App.css";

const Projects: React.FC = () => {
  return (
    <main className="projects">
      <div className="visaoGeral">
        <div className="cardsETextos">
          <div className="meusProjetos">
            <p className="meus">Meus</p>
            <h1 className="projetos">Projetos</h1>
          </div>
          <div className="cards">
            <div className="card1">
              <img src="/images/biblioteca.png" alt="Biblioteca Nest" />
              <h3 className="bibliotecaTitulo">Biblioteca Nest JS</h3>
              <p className="ferramentas1">
                Type, PostgreSQL, Knex, ESLint, Prettier
              </p>
              <p className="textoCard">
                API REST desenvolvida para gerenciar o sistema de aluguel de
                livros de uma biblioteca. Esta API permite o gerenciamento de
                livros, autores, locatários e aluguéis com regras de negócio e
                relacionamentos apropriados.
              </p>
              <a href="https://github.com/joaoespdev/biblioteca-nest">
                <button className="acessar">GitHub</button>
              </a>
            </div>

            <div className="card2">
              <img src="/images/jarvis.png" alt="Gestor Tarefas" />
              <h3 className="blogTitulo">Gestor de Tarefas</h3>
              <p className="ferramentas1">NestJS, TypeScript, JWT, bcrypt</p>
              <p className="textoCard">
                API RESTful desenvolvida com NestJS para gerenciamento de
                tarefas com autenticação JWT. O sistema permite criar, listar,
                atualizar e deletar tarefas, além de contar com um sistema de
                autenticação de usuários.
              </p>
              <a href="https://github.com/joaoespdev/Task-Management-NestJS">
                <button className="acessar">GitHub</button>
              </a>
            </div>

            <div className="card3">
              <img src="/images/veiculos.png" alt="Crud Veículos" />
              <h3 className="vehicleTitulo">Crud Veículos</h3>
              <p className="ferramentas1">
                Spring Boot, H2, JPA, Lombok, Swagger
              </p>
              <p className="textoCard">
                API RESTful desenvolvida em Spring para gerenciamento de
                diferentes tipos de veículos. A API permite criação, leitura,
                atualização e exclusão.
              </p>
              <a href="https://github.com/joaoespdev/Veiculo-CRUD-DB">
                <button className="acessar" id="acessar3">
                  GitHub
                </button>
              </a>
            </div>
          </div>

          <div className="cardsSegundaLinha">
            <div className="card1">
              <img src="/images/naruto.jpeg" alt="Desafio Ninja" />
              <h3 className="calculadoraTitulo">Desafio Ninja</h3>
              <p className="ferramentas1">
                Spring, H2, JUnit, Mockito, Swagger
              </p>
              <p className="textoCard">
                Este projeto simula batalhas entre ninjas, com funcionalidades
                baseadas em Programação Orientada a Objetos (POO), inspiradas no
                anime Naruto.
              </p>
              <a href="https://github.com/joaoespdev/DESAFIO-NINJA-DB2">
                <button className="acessar">GitHub</button>
              </a>
            </div>

            <div className="card2">
              <img src="/images/pessoaCrud.jpg" alt="Pessoa Endereço" />
              <h3 className="blogTitulo">Pessoa Endereço</h3>
              <p className="ferramentas1">Spring Boot, H2, JPA, Lombok</p>
              <p className="textoCard">
                Aplicação em Java com CRUD no Spring Boot que fornece uma API
                REST para gerenciar Pessoa e Endereços num relacionamento de
                um-para-muitos.
              </p>
              <a href="https://github.com/joaoespdev/Desafio-CRUD-DB">
                <button className="acessar">GitHub</button>
              </a>
            </div>

            <div className="card3">
              <img src="/images/dbportfolio.png" alt="Meu Portfólio" />
              <h3 className="mobileTitulo">Meu Portfólio</h3>
              <p className="ferramentas1">HTML5, CSS3, React & Typescript</p>
              <p className="textoCard">
                Este projeto destaca minhas principais competências como
                desenvolvedor, aliando um design minimalista e responsivo.
              </p>
              <a href="https://github.com/joaoespdev/DB-Portfolio">
                <button className="acessar" id="acessar3">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
