import ButtonComponent from "@/components/uikit/Button";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function CardListIsEmpty() {
  return (
    <Center height="$full">
      <VStack py="$10" alignItems="center">
        <Heading size="5xl">💳</Heading>
        <Text color="#000000">No Cards Found</Text>
        <Text color="#000000">We recommend adding a card for easy payment</Text>
        <ButtonComponent
          variant="link"
          text="Add New Card"
          onPress={() => router.push("/add-new-card")}
        />
      </VStack>
    </Center>
  );
}
