import React, { ComponentType } from 'react';
import { View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

// Define the props for the wrapped component
interface withHeaderProps {}

// Define the HOC
const withHeader = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithHeader = (props: P & withHeaderProps) => (
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
      <WrappedComponent {...props} />
    </View>
  );

  return ComponentWithHeader;
};

export default withHeader;
