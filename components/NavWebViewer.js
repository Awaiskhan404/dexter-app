import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const NavWebViewer = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://dexterdexterdexter.myshopify.com" }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NavWebViewer;
