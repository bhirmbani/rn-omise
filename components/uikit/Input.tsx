import { images } from "@/assets/images";
import { Image } from "@gluestack-ui/themed";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from "@gluestack-ui/themed";

import { StyleSheet } from "react-native";

interface InputComponent {
  placeholder?: string;
  IconChildren?: React.JSX.Element;
}

export default function InputComponent(props: InputComponent) {
  const { placeholder, IconChildren } = props;
  return {
    WithIcon: (
      <Input>
        <InputSlot pl="$3">{IconChildren}</InputSlot>
        <InputField placeholder={placeholder} />
      </Input>
    ),
    WithCCNumber: (
      <Input>
        <InputField placeholder="0000 0000 0000 0000" />
        <InputSlot pl="$3">
          <Image width={25} height={15} alt="visa" source={images.visa} />
        </InputSlot>
        <InputSlot pl="$3">
          <Image
            width={25}
            height={15}
            alt="mastercard"
            source={images.mastercard}
          />
        </InputSlot>
        <InputSlot px="$3">
          <Image width={25} height={15} alt="jcb" source={images.jcb} />
        </InputSlot>
      </Input>
    ),
  };
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
