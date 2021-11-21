import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const { width, height } = Dimensions.get("window");

const CarouselImageGallery = ({ route, navigation }) => {
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = (indexSelected) => {
    setIndexSelected(indexSelected);
  };
  const { images } = route.params;
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={images}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={() => onSelect(20)}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
            source={{ uri: item.uri }}
          />
        )}
      />
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontFamily: "NeueHelvetica",
            }}
          >
            Back/Fall 2021
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontFamily: "NeueHelvetica",
          }}
        >
          {indexSelected + 1}/{images.length}
        </Text>
      </View>
      {/* Thumbnail component using FlatList */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default CarouselImageGallery;
