import React from 'react';
import '../App.css';

const Home: React.FC = () => {
  return (
    <main className="home">
      <div className="visaoGeral">
        <div className="textos">
          <p className="meuNomeE">Olá, meu nome é</p>
          <h1 className="nome">João Victor</h1>
          <p className="souTrainee">
            Sou trainee de desenvolvimento<br /> de software na DBServer.
          </p>
          <h2 className="sobreMim">Sobre mim</h2>
          <p className="textoSobreMim">
            Cientista da Computação e Desenvolvedor JR<br />
            ainda em formação. Conhecimento atual voltado<br />
            para linguagens como Java, JS e ferramentas como<br />
            HTML5, CSS3, Spring Boot, Swagger e Postman.<br />
            Entusiasta da tecnologia, objetivo e criativo com<br />
            o desejo de aprender. Pensamento voltado a entrega<br />
            e a qualidade do código (Conceitos S.O.L.I.D, Clean Code).<br />
            Em busca de uma oportunidade que proporcione<br />
            crescimento profissional e aprimoramento<br />
            como Desenvolvedor Full-Stack.
          </p>
        </div>

        <div className="imagemHabilidades">
          <img src="/images/fotoJoao.jpg" alt="João Victor" className="fotoJoao" />

          <div className="habilidades">
            <h2 className="habilidadesTexto">Habilidades</h2>
            <p className="backEnd">Back end</p>
            <div className="backListaNivelDIV">
              <ul className="backEndLista">
                <li>POSTMAN</li>
                <li>JAVA</li>
                <li>H2~SQL</li>
                <li>SPRING BOOT</li>
                <li>SWAGGER</li>
              </ul>

              <ul className="backListaNivel">
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas3.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas2.png" alt="Nível" />
                </li>
                <li>
                  <img src="/images/bolas2.png" alt="Nível" />
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
                <li>NODE</li>
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
                <li>
                  <img src="/images/bolas1.png" alt="Nível" />
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
