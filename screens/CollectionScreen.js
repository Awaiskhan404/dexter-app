import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CollectionCarousel from "../components/Colloection/CollectionCarousel";
import db from "../db/firebase";

const CollectionScreen = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    db.collection("Collection")
      .orderBy("position", "asc")
      .get()
      .then((results) => results.docs)
      .then((docs) =>
        docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          subTitle: doc.data().subTitle,
          url: doc.data().uri,
        }))
      )
      .then((items) => setItems(items));
  }, []);

  return (
    <View>
      <CollectionCarousel data={items} />
    </View>
  );
};

export default CollectionScreen;
