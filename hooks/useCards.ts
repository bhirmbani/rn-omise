import { CardI, cardAtom } from "@/store";
import { useAtom } from "jotai";

export default function useCards() {
  const [cards, setCards] = useAtom(cardAtom);

  const addNewCard = (newCard: CardI) => {
    setCards(async (card) => {
      const resolved = await card;
      return [...resolved, newCard];
    });
  };

  const deleteCard = (index: number) => {
    setCards(async (card) => {
      const resolved = await card;
      const newCard = resolved.filter((each, idx) => idx !== index);
      return newCard;
    });
  };

  const clearCards = () => {
    setCards(() => {
      return [];
    });
  };

  return {
    cards,
    addNewCard,
    deleteCard,
    clearCards,
  };
}
