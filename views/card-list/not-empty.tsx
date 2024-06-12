import ButtonComponent from "@/components/uikit/Button";
import { CCCardComponent } from "@/components/uikit/Card";
import useCards from "@/hooks/useCards";
import { CardI } from "@/store";
import { View } from "@gluestack-ui/themed";
import { FlatList } from "react-native";

export default function CardList() {
  const { clearCards, cards, maskCCNumber } = useCards();
  console.log(cards.length);
  return (
    <View padding="$5">
      <FlatList
        data={cards}
        ItemSeparatorComponent={() => <View py="$2.5" />}
        renderItem={({ item }: { item: CardI }) => (
          <CCCardComponent
            key={item.ccNumber}
            ccNumber={`${maskCCNumber(item.ccNumber)}`}
            nameOnCard={item.nameOnCard}
            expires={item.expiryDate}
            cardType={`${item?.type}`.toLowerCase()}
          />
        )}
        ListFooterComponent={() => (
          <View my="$2.5">
          <ButtonComponent  text="Clear" onPress={clearCards} variant="solid" />
          </View>
        )}
        ListFooterComponentStyle={{ marginBottom: 40 }}
      />
    </View>
  );
}
