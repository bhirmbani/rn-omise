import { Button, ButtonText } from "@gluestack-ui/themed";
import { PressableProps } from "react-native";

interface ButtonComponent {
  isDisabled?: boolean;
  text: string;
  variant: "solid" | "outline" | "link" | undefined;
  onPress?: PressableProps['onPress'];
}

export default function ButtonComponent(props: ButtonComponent) {
  const { isDisabled, text, variant, onPress } = props;

  return (
    <Button
      size="md"
      variant={variant}
      action="primary"
      isDisabled={isDisabled}
      isFocusVisible={false}
      onPress={onPress}
    >
      <ButtonText color={variant === "link" ? "$primary500" : "$textLight0"}>
        {text}
      </ButtonText>
    </Button>
  );
}
