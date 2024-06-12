import { images } from "@/assets/images";
import ButtonComponent from "@/components/uikit/Button";
import InputComponent from "@/components/uikit/Input";
import useCards from "@/hooks/useCards";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
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
import { Controller } from "react-hook-form";

export default function AddNewCard() {
  const { rhf, addNewCard } = useCards();

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
          <FormControl isInvalid={Boolean(rhf.errors.ccNumber)}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>
                ATM/Debit/Credit card number
              </FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={rhf.control}
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 16,
                  message: "Invalid credit card number",
                },
              }}
              render={({ field: { onChange, value } }) =>
                InputComponent({
                  onChangeText: onChange,
                  value,
                }).WithCCNumber
              }
              name="ccNumber"
            />
            <FormControlError>
              <FormControlErrorIcon
                as={() => (
                  <Ionicons
                    name="alert-circle-outline"
                    size={18}
                    color="#B91C1C"
                  />
                )}
              />
              <FormControlErrorText>
                {rhf.errors.ccNumber?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl isInvalid={Boolean(rhf.errors.nameOnCard)}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Name on Card</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={rhf.control}
              rules={{
                required: {
                  value: true,
                  message: "Required",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input>
                  <InputField
                    onChangeText={onChange}
                    value={value}
                    placeholder="Name"
                  />
                </Input>
              )}
              name="nameOnCard"
            />

            <FormControlError>
              <FormControlErrorIcon
                as={() => (
                  <Ionicons
                    name="alert-circle-outline"
                    size={18}
                    color="#B91C1C"
                  />
                )}
              />
              <FormControlErrorText>
                {rhf.errors.nameOnCard?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <HStack width="$full">
            <VStack pr="$2" width="$1/2">
              <FormControl isInvalid={Boolean(rhf.errors.expiryDate)}>
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Expiry date</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={rhf.control}
                  rules={{
                    required: {
                      value: true,
                      message: "Required",
                    },
                    minLength: {
                      value: 5,
                      message: "Invalid expiry date",
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input>
                      <InputField
                        onChangeText={onChange}
                        value={value}
                        placeholder="MM/YY"
                      />
                    </Input>
                  )}
                  name="expiryDate"
                />
                <FormControlError>
                  <FormControlErrorIcon
                    as={() => (
                      <Ionicons
                        name="alert-circle-outline"
                        size={18}
                        color="#B91C1C"
                      />
                    )}
                  />
                  <FormControlErrorText>
                    {rhf.errors.expiryDate?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </VStack>
            <VStack pl="$2" width="$1/2">
              <FormControl isInvalid={Boolean(rhf.errors.cvv)}>
                <FormControlLabel mb="$1">
                  <FormControlLabelText>CVV</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={rhf.control}
                  rules={{
                    required: {
                      value: true,
                      message: "Required",
                    },
                    minLength: {
                      value: 3,
                      message: "Invalid CVV",
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input>
                      <InputField
                        onChangeText={onChange}
                        value={value}
                        placeholder=""
                      />
                    </Input>
                  )}
                  name="cvv"
                />
                <FormControlError>
                  <FormControlErrorIcon
                    as={() => (
                      <Ionicons
                        name="alert-circle-outline"
                        size={18}
                        color="#B91C1C"
                      />
                    )}
                  />
                  <FormControlErrorText>
                    {rhf.errors.cvv?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </VStack>
          </HStack>
        </VStack>
        <HStack justifyContent="center" mt="$10" flex={1}>
          <Image width={196} height={21} source={images.secure} alt="secure" />
        </HStack>
        <VStack flex={1} justifyContent="flex-end">
          <FormControl>
            <ButtonComponent
              onPress={rhf.handleSubmit(addNewCard)}
              variant="solid"
              text="Add Card"
            />
          </FormControl>
        </VStack>
      </Box>
    </View>
  );
}
