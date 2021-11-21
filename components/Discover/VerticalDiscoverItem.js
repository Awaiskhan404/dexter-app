import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

const { width, height } = Dimensions.get("window");

const VerticalDiscoverItem = (props) => {
  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri: props.item.uri1 }}>
        <TouchableOpacity>
          <View style={styles.content}>
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
  video: {
    height: height,
    width: width,
  },
  content: {
    position: "relative",
    top: height / 1.3,
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

export default VerticalDiscoverItem;
