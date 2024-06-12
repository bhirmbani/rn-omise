import ButtonComponent from "@/components/uikit/Button";
import { CCCardComponent } from "@/components/uikit/Card";
import useCards from "@/hooks/useCards";
import { View } from "@gluestack-ui/themed";

export default function CardList() {
  const { clearCards } = useCards();
  return (
    <View padding="$5">
      <CCCardComponent
        ccNumber="•••• •••• •••• 9989"
        nameOnCard="Ty Lee"
        expires="12/25"
        cardType="mastercard"
      />
      <ButtonComponent text="clear" onPress={clearCards} variant="solid" />
    </View>
  );
}
