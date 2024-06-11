import { images } from "@/assets/images";
import ButtonComponent from "@/components/uikit/Button";
import InputComponent from "@/components/uikit/Input";
import { Entypo } from "@expo/vector-icons";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Image,
  Input,
  InputField,
  Pressable,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { Stack, router } from "expo-router";

export default function AddNewCard() {
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShown: true,
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Entypo name="chevron-thin-left" size={20} />
            </Pressable>
          ),
        }}
      />
      <Box p="$5" height="$full">
        <VStack space="xl">
          <FormControl>
            <FormControlLabel mb="$1">
              <FormControlLabelText>
                ATM/Debit/Credit card number
              </FormControlLabelText>
            </FormControlLabel>
            {InputComponent({}).WithCCNumber}
          </FormControl>

          <FormControl>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Name on Card</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField placeholder="Name" />
            </Input>
          </FormControl>
          <HStack width="$full">
            <VStack pr="$2" width="$1/2">
              <FormControl>
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Expiry date</FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField placeholder="MM/YY" />
                </Input>
              </FormControl>
            </VStack>
            <VStack pl="$2" width="$1/2">
              <FormControl>
                <FormControlLabel mb="$1">
                  <FormControlLabelText>CVV</FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField placeholder="" />
                </Input>
              </FormControl>
            </VStack>
          </HStack>
        </VStack>
        <HStack justifyContent="center" mt="$10" flex={1}>
          <Image width={196} height={21} source={images.secure} alt="secure" />
        </HStack>
        <VStack flex={1} justifyContent="flex-end">
          <FormControl>
            <ButtonComponent variant="solid" text="Add Card" />
          </FormControl>
        </VStack>
      </Box>
    </View>
  );
}
