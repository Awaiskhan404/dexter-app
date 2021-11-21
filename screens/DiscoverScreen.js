import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DiscoverCarousel from "../components/Discover/DiscoverCarousel";
import db from "../db/firebase";

const DiscoverScreen = ({ navigation }) => {
  const [discoverItems, setDiscoverItems] = useState();

  useEffect(() => {
    db.collection("Discover")
      .get()
      .then((results) => results.docs)
      .then((docs) =>
        docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          mainImage: doc.data().mainImage,
          videoUrl: doc.data().videoUrl,
          imageGallery: doc.data().imageGallery,
        }))
      )
      .then((discoverItems) => setDiscoverItems(discoverItems));

    console.log(discoverItems);
  }, []);
  return (
    <>
      <StatusBar hidden={true} />
      <DiscoverCarousel data={discoverItems} />
    </>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    top: 40,
    left: 30,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 3,
  },
});
export default DiscoverScreen;
