import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import HorizontalDiscoverItem from "./HorizontalDiscoverItem";
import gifImage from "../../assets/loading.gif";

const { width, height } = Dimensions.get("window");

const DiscoverCarousel = ({ data }) => {
  const [loader, setLoader] = useState("true");

  function loading() {
    setTimeout(function () {
      setLoader(false);
    }, 3000);
  }

  loading();

  return (
    <View>
      {loader && (
        <View style={styles.loading}>
          <Image style={styles.gifImage} source={gifImage} />
        </View>
      )}

      {data && !loader && (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => "key" + index}
            showsVerticalScrollIndicator
            pagingEnabled
            scrollEnabled
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            snapToAlignment="center"
            renderItem={({ item }) => {
              return <HorizontalDiscoverItem item={item} />;
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: height / 4,
  },
  loadingText: {
    fontSize: 22,
    fontFamily: "NeueHelvetica",
  },
  gifImage: {
    height: width - 50,
    width: height / 2,
    resizeMode: "contain",
  },
});

export default DiscoverCarousel;
