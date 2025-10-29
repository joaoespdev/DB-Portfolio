import React from "react";
import { Card } from "../components/Card";

interface ProjectCardProps {
  card: Card;
  cardClass: string; // card1, card2, card3
}

const CardProps: React.FC<ProjectCardProps> = ({ card, cardClass }) => {
  return (
    <div className={cardClass}>
      <img src={card.imagem} alt={card.altText} />
      <h3 className="calculadoraTitulo">{card.titulo}</h3>
      <p className="ferramentas1">{card.ferramentas}</p>
      <p className="textoCard">{card.textoCard}</p>
      <a href={card.linkGithub}>
        <button className="acessar">GitHub</button>
      </a>
    </div>
  );
};

export default CardProps;
