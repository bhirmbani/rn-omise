import { StyleSheet } from "react-native";

import {
  Center,
  Heading,
  Pressable,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import ButtonComponent from "@/components/uikit/Button";
import { Link, Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Cards",
          headerShown: true,
          headerRight: () => {
            return (
              <Link href="/add-new-card" asChild>
                <Pressable>
                  <Entypo name="plus" size={24} color="black" />
                </Pressable>
              </Link>
            );
          },
        }}
       />
        <Center height="$full">
          <VStack py="$10" alignItems="center">
            <Heading size="5xl">💳</Heading>
            <Text color="#000000">No Cards Found</Text>
            <Text color="#000000">
              We recommend adding a card for easy payment
            </Text>
            <ButtonComponent variant="link" text="Add New Card" />
          </VStack>
        </Center>
    </View>
  );
}

{
  /* <CCCardComponent
  ccNumber="•••• •••• •••• 9989"
  nameOnCard="Ty Lee"
  expires="12/25"
  cardType="mastercard"
/>; */
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
