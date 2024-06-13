# React Native Pay Random Amount Using Omise API

## Features

- add creadit card
- pay random amount by clicking the card
- success/failed message
- loading indicator
- AsyncStorage (on device persistent memory)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## How to add card

Please add test card provided by omise on their documentation [here.](https://docs.opn.ooo/api-testing#creating-successful-charges)

Example card number

- Success charge: 4242 4242 4242 4242
- Failed charge: 4111 1111 1114 0011

You can add anything for name and cvv field. But, make sure to add expiry date that not older than today.