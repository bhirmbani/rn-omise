import { Button, ButtonText } from "@gluestack-ui/themed";

interface ButtonComponent {
  isDisabled?: boolean;
  text: string;
  variant: "solid" | "outline" | "link" | undefined;
}

export default function ButtonComponent(props: ButtonComponent) {
  const { isDisabled, text, variant } = props;
  return (
    <Button
      size="md"
      variant={variant}
      action="primary"
      isDisabled={isDisabled}
      isFocusVisible={false}
    >
      <ButtonText color={variant === "link" ? "$primary500" : "$textLight0"}>
        {text}
      </ButtonText>
    </Button>
  );
}
