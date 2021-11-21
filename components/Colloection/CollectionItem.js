import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");

const CollectionItem = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri: props.item.url }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SingleCollection", { docId: props.item.id })
          }
        >
          <View style={styles.content}>
            <Text style={styles.subTitle}>{props.item.subTitle}</Text>
            <Text style={styles.title}>{props.item.title}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
  },
  content: {
    position: "relative",
    top: height / 1.28,
    left: width / 5,
    width: width / 1.5,
    borderRadius: 4,
    padding: 10,
    borderWidth: 1.5,
    borderColor: "white",
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
    color: "white",
  },
  title: {
    fontSize: 27,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
    color: "white",
    marginTop: 5,
  },
});

export default CollectionItem;
