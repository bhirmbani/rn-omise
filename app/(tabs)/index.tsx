import useCards from "@/hooks/useCards";
import CardListIsEmpty from "@/views/card-list/empty";
import withHeader from "@/hoc/withHeader";
import CardList from "@/views/card-list/not-empty";

export default function HomeScreen() {
  const { cards } = useCards();

  if (cards.length === 0) {
    return withHeader(CardListIsEmpty)({});
  }

  return withHeader(CardList)({});
}