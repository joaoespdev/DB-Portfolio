import React from 'react';
import '../App.css';

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
              <p className="ferramentas1">HTML5, CSS3</p>
              <p className="textoCard">
                Este projeto destaca minhas principais competências como
                desenvolvedor, aliando um design minimalista e responsivo.
              </p>
              <a href="https://github.com/joaoespdev/DB-Portfolio">
                <button className="acessar" id="acessar3">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
