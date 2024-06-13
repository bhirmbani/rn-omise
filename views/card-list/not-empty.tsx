import ButtonComponent from "@/components/uikit/Button";
import { CCCardComponent } from "@/components/uikit/Card";
import useCards from "@/hooks/useCards";
import usePayment from "@/hooks/usePayment";
import { CardI } from "@/store";
import { Pressable, Text, View } from "@gluestack-ui/themed";
import { FlatList } from "react-native";

export default function CardList() {
  const { clearCards, cards, maskCCNumber } = useCards();
  const { onChargeCard, isLoading } = usePayment();
  return (
    <View height="$full" padding="$5">
      {isLoading ? (
        <Text textAlign="center" marginBottom="$4">
          Charging card...
        </Text>
      ) : null}
      <FlatList
        data={cards}
        ItemSeparatorComponent={() => <View py="$2.5" />}
        renderItem={({ item }: { item: CardI }) => (
          <Pressable
            disabled={isLoading}
            onPress={() => onChargeCard({ cardData: item })}
            key={item.ccNumber}
          >
            <CCCardComponent
              ccNumber={`${maskCCNumber(item.ccNumber)}`}
              nameOnCard={item.nameOnCard}
              expires={item.expiryDate}
              cardType={`${item?.type}`.toLowerCase()}
            />
          </Pressable>
        )}
        ListFooterComponent={() => (
          <View my="$2.5">
            <ButtonComponent
              text="Clear"
              onPress={clearCards}
              variant="solid"
            />
          </View>
        )}
        ListFooterComponentStyle={{ marginBottom: 40 }}
      />
    </View>
  );
}
