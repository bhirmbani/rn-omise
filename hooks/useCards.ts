import { CardI, cardAtom } from "@/store";
import { formatCreditCard, formatDate, getCreditCardType } from "cleave-zen";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function useCards() {
  const [cards, setCards] = useAtom(cardAtom);
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<CardI>({
    defaultValues: {
      ccNumber: "",
      nameOnCard: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const watcher = useWatch({
    control,
  });

  const onChangeCCNum = (ccNum: string) => {
    setValue("ccNumber", formatCreditCard(ccNum));
  };

  // Utility helper to mask the ccNumber
  const maskCCNumber = (ccNumber: string) => {
    const visibleDigits = ccNumber.slice(-2);
    const maskedDigits = "•".repeat(12);
    const maskedNumber = maskedDigits + "" + visibleDigits;
    return maskedNumber.match(/.{1,4}/g)?.join(" ");
  };

  useEffect(() => {
    const raw = `${watcher["ccNumber"]}`.replace(/\s/g, "");
    const formattedCCNum = formatCreditCard(raw);
    setValue("ccNumber", formattedCCNum);
    if (raw.length === 0) {
      setError("ccNumber", {
        type: "required",
        message: "Required",
      });
    } else if (raw.length < 14) {
      setError("ccNumber", {
        type: "manual",
        message: "Invalid credit card number",
      });
    } else {
      clearErrors("ccNumber");
    }
  }, [watcher.ccNumber]);

  useEffect(() => {
    let cleanedInput = watcher["nameOnCard"]!.replace(/[^a-zA-Z\s]/g, "");
    setValue("nameOnCard", `${cleanedInput}`);
  }, [watcher.nameOnCard]);

  useEffect(() => {
    let cleanedInput = watcher["cvv"]!.replace(/[^0-9]/g, "");
    if (cleanedInput!.length > 3) {
      cleanedInput = cleanedInput?.slice(0, 3);
    }
    setValue("cvv", `${cleanedInput}`);
  }, [watcher.cvv]);

  useEffect(() => {
    setValue(
      "expiryDate",
      formatDate(`${watcher["expiryDate"]}`, {
        datePattern: ["m", "y"],
      })
    );
  }, [watcher.expiryDate]);

  const addNewCard = (newCard: CardI) => {
    setCards(async (card) => {
      const resolved = await card;
      return [
        ...resolved,
        { ...newCard, type: getCreditCardType(newCard.ccNumber) },
      ];
    });
    router.back();
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
    rhf: {
      control,
      handleSubmit,
      errors,
    },
    onChangeCCNum,
    maskCCNumber,
  };
}
