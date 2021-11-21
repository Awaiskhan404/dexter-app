import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "../WelcomeScreen";
import CoverScreen from "../CoverScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TermsScreen from "../TermsScreen";
import NavigationBar from "./NavigationBar";
import DiscoverScreen from "../../screens/DiscoverScreen";

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavigationBar"
          component={NavigationBar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigation;
