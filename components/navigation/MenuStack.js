import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectionScreen from "../../screens/CollectionScreen";
import Menu from "../Menu";
import MenuScreenTemplate from "../MenuScreenTemplate";
import Credits from "../MenuScreen/Credits";
import Timeline from "../MenuScreen/Timeline";
import Company from "../MenuScreen/Company";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="collection"
        component={CollectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="company"
        component={Company}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="timeline"
        component={Timeline}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="culture"
        component={MenuScreenTemplate}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="credits"
        component={Credits}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="events"
        component={MenuScreenTemplate}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
