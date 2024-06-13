import { reactNativeOmise } from "@/services/omise";
import { CardI } from "@/store";
import { useState } from "react";
import { Alert } from "react-native";

export interface ChargeCard {
  currency: string;
  amount: string;
  card: string;
}

export interface CreateToken {
  card: {
    expiration_month: string;
    expiration_year: string;
    name: string;
    number: string;
    security_code: string;
    city?: string;
    postal_code?: string;
  };
}

export default function usePayment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const onCreateToken = async (data: CreateToken) => {
    try {
      /**
       * {
        card: {
          name: "Somchai Prasert",
          number: "4242424242424242",
          expiration_month: "10",
          expiration_year: "2024",
          security_code: "123",
        },
      }
       */
      const token = await reactNativeOmise.createToken(data);
      return token.id;
    } catch (error) {
      Alert.alert("Error", (error as unknown as Error).message);
      setError("Something went wrong");
    } finally {
      setError(null);
    }
  };

  // generate random amount between 2000-10000
  // omise required minimum amount of 2000 satangs (20 THB)
  const generateRandomAmount = () => {
    return Math.floor(Math.random() * 8001) + 2000;
  };

  /**
   * function to convert CardI type into
   * CreateToken type
   */
  const convertCardToCreateToken = (card: CardI): CreateToken => {
    return {
      card: {
        name: card.nameOnCard,
        number: card.ccNumber,
        expiration_month: card.expiryDate.split("/")[0],
        expiration_year: card.expiryDate.split("/")[1],
        security_code: card.cvv,
      },
    };
  };

  const onChargeCard = async ({ cardData }: { cardData: CardI }) => {
    setIsLoading(true);
    try {
      /**
       * {
        currency: "thb",
        amount: "100000",
        card: "tokn_test_51234567890abcdef01",
      }
       */
      const chargePayload = {
        currency: "thb",
        amount: generateRandomAmount().toString(),
      };
      const convertCardData = convertCardToCreateToken(cardData);
      const token = await onCreateToken(convertCardData);
      const payload = {
        ...chargePayload,
        card: token,
      };
      const charge = await reactNativeOmise.chargeCard(payload);
      Alert.alert("Success", JSON.stringify(charge));
      return charge;
    } catch (error) {
      Alert.alert("Error", (error as unknown as Error).message);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
      setError(null);
    }
  };

  return {
    isLoading,
    error,
    onChargeCard,
  };
}
