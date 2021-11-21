import * as React from "react";
import { Text, View, Linking, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contact from "../Contact";
import Message from "../Message/Message";
import Menu from "../Menu";
import CoverStack from "./CoverStack";
import WelcomeScreen from "../WelcomeScreen";
import ContactStack from "./ContactStact";
import NavWebViewer from "../NavWebViewer";
import MenuStack from "./MenuStack";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName="Cover"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 10,
          borderRadius: 20,
          padding: 0,
          borderTopColor: "#ffffff00",
          backgroundColor: "#ffffff00",
        },
      }}
    >
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: () => (
            <Icon
              style={{ marginTop: 5 }}
              name="square"
              color="#fff"
              size={30}
              solid
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: () => (
            <Icon
              style={{ marginTop: 5 }}
              name="square"
              color="#fff"
              size={30}
              solid
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cover"
        component={CoverStack}
        options={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          tabBarIcon: () => (
            <Icon
              style={{ marginTop: 5 }}
              name="square"
              color="#fff"
              size={30}
              solid
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShopifyWebView"
        component={NavWebViewer}
        options={{
          tabBarIcon: () => (
            <Icon
              style={{ marginTop: 5 }}
              name="square"
              color="#fff"
              size={30}
              solid
            />
          ),
        }}
      />
      <Tab.Screen
        name="MenuStack"
        component={MenuStack}
        options={{
          tabBarIcon: () => (
            <Icon
              style={{ marginTop: 5 }}
              name="square"
              color="#fff"
              size={30}
              solid
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
