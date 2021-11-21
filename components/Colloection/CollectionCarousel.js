import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CollectionItem from "./CollectionItem";

const CollectionCarousel = ({ data }) => {
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          snapToAlignment="center"
          renderItem={({ item }) => {
            return <CollectionItem item={item} />;
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>Loading...</Text>
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
});

export default CollectionCarousel;
