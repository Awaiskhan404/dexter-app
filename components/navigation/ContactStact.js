import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "../Contact";
import DiscoverScreen from "../../screens/DiscoverScreen";

const Stack = createNativeStackNavigator();

const ContactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ContactStack;
