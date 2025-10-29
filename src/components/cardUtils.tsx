import { Card } from "../components/Card";

export const divideCardsIntoRows = (cards: Card[], cardsPerRow: number = 3) => {
  const rows: Card[][] = [];
  for (let i = 0; i < cards.length; i += cardsPerRow) {
    rows.push(cards.slice(i, i + cardsPerRow));
  }
  return rows;
};

export const getCardClassName = (index: number): string => {
  const cardClasses = ["card1", "card2", "card3"];
  return cardClasses[index % 3];
};

export const getRowClassName = (rowIndex: number): string => {
  if (rowIndex === 0) return "cards";
  if (rowIndex === 1) return "cardsTerceiraLinha";
  return "cardsSegundaLinha";
};
