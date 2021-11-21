import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { map } from "lodash";

const { width, height } = Dimensions.get("window");

const HorizontalDiscoverItem = (props) => {
  if (props.item.mainImage) {
    return (
      <View>
        <FlatList
          data={props.item.imageGallery}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          snapToAlignment="center"
          renderItem={({ item }) => {
            return (
              <ImageBackground style={styles.image} source={{ uri: item.uri }}>
                {item.title ? (
                  <TouchableOpacity>
                    <View style={styles.content}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </ImageBackground>
            );
          }}
        />
      </View>
    );
  }

  if (props.item.videoUrl) {
    return (
      <View style={styles.videoView}>
        <Video
          style={styles.video}
          source={{
            uri: props.item.videoUrl,
          }}
          useNativeControls
          resizeMode="contain"
        />
      </View>
    );
  }
  return (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>Sorry :( Something Went Wrong</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "100%",
  },
  loadingText: {
    fontSize: 22,
    fontFamily: "NeueHelvetica",
  },
  image: {
    width: width,
    height: height,
  },
  videoView: {
    height: height / 3,
    width: width,
    justifyContent: "center",
    backgroundColor: "black",
  },
  video: {
    backgroundColor: "black",
    width: width,
    height: 220,
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
export default HorizontalDiscoverItem;
