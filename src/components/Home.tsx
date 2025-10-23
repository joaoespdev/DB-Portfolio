import React from "react";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <main className="home">
      <div className="visaoGeral">
        <div className="textos">
          <p className="meuNomeE">Olá, meu nome é</p>
          <h1 className="nome">João Victor</h1>
          <p className="souTrainee">
            Sou trainee de desenvolvimento
            <br /> de software na DBServer.
          </p>
          <h2 className="sobreMim">Sobre mim</h2>
          <p className="textoSobreMim">
            Um Cientista da Computação em formação e<br />
            Desenvolvedor Fullstack Júnior, com conhecimentos
            <br />
            voltados para linguagens como TypeScript, JavaScript e Java
            <br />
            além de ferramentas e frameworks como HTML5, CSS3
            <br />
            NestJS, Node, Prettier, Eslint, Jest, Spring Boot, JUnit, Mockito
            <br />
            Docker, Swagger, Postman, Insomnia e Git.
            <br />
            <br />
            Apaixonado por tecnologia, sou uma pessoa objetiva
            <br />
            criativa, com grande vontade de aprender e evoluir
            <br />
            constantemente na área de desenvolvimento. Tenho como
            <br />
            foco a entrega contínua e a qualidade do código, aplicando
            <br />
            Metodologias ágeis, princípios S.O.L.I.D e boas práticas de
            <br />
            Clean Code no meu dia a dia como programador.
          </p>
        </div>

        <div className="imagemHabilidades">
          <div className="fotoJoaoDiv">
            <img src="/images/eu.jpg" alt="João Victor" className="fotoJoao" />
          </div>

          <div className="habilidades">
            <h2 className="habilidadesTexto">Habilidades</h2>
            <p className="backEnd">Back end</p>
            <div className="backListaNivelDIV">
              <ul className="backEndLista">
                <li>NEST JS</li>
                <li>TYPESCRIPT</li>
                <li>SPRING BOOT</li>
                <li>JAVA</li>
                <li>NODE</li>
                <li>KNEX JS</li>
                <li>JEST</li>
                <li>SQL</li>
              </ul>

              <ul className="backListaNivel">
                <li>
                  <img src="/images/bolas4.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas2.png" alt="Nível" />
                </li>
              </ul>
            </div>

            <p className="frontEnd">Front end</p>
            <div className="frontListaNivelDIV">
              <ul className="frontEndLista">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVA SCRIPT</li>
                <li>REACT</li>
              </ul>

              <ul className="frontListaNivel">
                <li>
                  <img src="/images/bolas5.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas5.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
