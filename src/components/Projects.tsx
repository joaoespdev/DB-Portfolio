import React from "react";
import "../App.css";
import { cardsData } from "../data/cardsData";
import {
  divideCardsIntoRows,
  getCardClassName,
  getRowClassName,
} from "../components/cardUtils";
import CardProps from "../components/CardProps";

const Projects: React.FC = () => {
  const cardRows = divideCardsIntoRows(cardsData, 3);

  return (
    <main className="projects">
      <div className="visaoGeral">
        <div className="cardsETextos">
          <div className="meusProjetos">
            <p className="meus">Meus</p>
            <h1 className="projetos">Projetos</h1>
          </div>

          {/* ✅ ADICIONAR ESTA DIV */}
          <div className="somenteCards">
            {cardRows.map((row, rowIndex) => (
              <div key={rowIndex} className={getRowClassName(rowIndex)}>
                {row.map((card, cardIndex) => (
                  <CardProps
                    key={card.id}
                    card={card}
                    cardClass={getCardClassName(cardIndex)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
