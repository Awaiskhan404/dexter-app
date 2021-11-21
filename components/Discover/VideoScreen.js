import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const { width, height } = Dimensions.get("window");

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay
        rate={1.0}
        volume={1.0}
        isMuted={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    height: height,
    width: width,
  },
});

export default VideoScreen;
