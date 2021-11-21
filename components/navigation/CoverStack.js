import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectionScreen from "../../screens/CollectionScreen";
import CoverScreen from "../CoverScreen";
import SingleCollectionScreen from "../../screens/SingleCollectionScreen";
import DiscoverScreen from "../../screens/DiscoverScreen";
import CarouselImageGallery from "../../screens/CarouselImageGallery";

const Stack = createNativeStackNavigator();

const CoverStack = () => {
  return (
    <Stack.Navigator initialRouteName="Discover">
      <Stack.Screen
        name="CoverScreen"
        component={CoverScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Collection"
        component={CollectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleCollection"
        component={SingleCollectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleCollectionGallery"
        component={CarouselImageGallery}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CoverStack;
