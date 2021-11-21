import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import NavigationBar from "./components/navigation/NavigationBar";
import TermsScreen from "./components/TermsScreen";
import UserNavigation from "./components/navigation/UserNavigation";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuScreenTemplate from "./components/MenuScreenTemplate";
import Message from "./components/Message/Message";
import CollectionScreen from "./screens/CollectionScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    NeueHelvetica: require("./assets/fonts/NeueHelveticaProThin.ttf"),
  });

  const [loading, setLoading] = useState(true);
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false);

  const checkForFirstTimeLoaded = async () => {
    const result = await AsyncStorage.getItem("isFirstTimeOpen");
    if (result === null) setIsFirstTimeLoad(true);
    setLoading(false);
  };

  useEffect(() => {
    checkForFirstTimeLoaded();
  }, []);

  const handleDone = () => {
    setIsFirstTimeLoad(false);
    AsyncStorage.setItem("isFirstTimeOpen", "no");
  };

  if (loading) return null;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (isFirstTimeLoad)
      return (
        <>
          <TermsScreen onDone={handleDone} />
        </>
      );

    if (!isFirstTimeLoad) return <UserNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    marginTop: 50,
  },
});
