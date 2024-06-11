import { images } from "@/assets/images";
import {
  Card,
  HStack,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";

interface CardComponent {
  children: JSX.Element;
}

export function CardComponent({ children }: CardComponent) {
  return (
    <Card size="md" variant="elevated" m="$3">
      {children}
    </Card>
  );
}

interface CCCardComponent {
  ccNumber: string;
  expires: string;
  nameOnCard: string;
  cardType: string;
}

export function CCCardComponent(props: CCCardComponent) {
  const { ccNumber, expires, nameOnCard, cardType = "visa" } = props;
  const numbers = ccNumber.split(" ");
  return (
    <Card size="lg" variant="elevated">
      <Image
        width={66}
        height={40}
        alt="mastercard"
        source={images[cardType as keyof typeof images]}
      />
      <HStack justifyContent="space-between" maxWidth="$5/6">
        <VStack>
          <Text size="4xl">{numbers[0]}</Text>
        </VStack>
        <VStack>
          <Text size="4xl">{numbers[1]}</Text>
        </VStack>
        <VStack>
          <Text size="4xl">{numbers[2]}</Text>
        </VStack>
        <VStack justifyContent="center">
          <Text size="lg">{numbers[3]}</Text>
        </VStack>
      </HStack>
      <HStack justifyContent="space-between" maxWidth="$5/6">
        <VStack>
          <Text color="#8F8F8F" size="xs">
            Name on Card
          </Text>
          <Text marginTop="$4" color="#000000">
            {nameOnCard}
          </Text>
        </VStack>
        <VStack>
          <Text color="#8F8F8F" size="xs">
            Expires
          </Text>
          <Text marginTop="$4" color="#000000">
            {expires}
          </Text>
        </VStack>
      </HStack>
    </Card>
  );
}
