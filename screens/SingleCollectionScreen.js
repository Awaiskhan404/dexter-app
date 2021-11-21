import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import db from "../db/firebase";
import { map } from "lodash";

const { width, height } = Dimensions.get("window");

const SingleCollectionScreen = (props) => {
  const [singleItems, setSingleItems] = useState();
  const [images, setImages] = useState();
  const { docId } = props.route.params;
  let docsId = JSON.stringify(docId);
  docsId = docsId.replace(/['"]+/g, "");

  const fireStoreDB = async () => {
    var docRef = db.collection("Collection").doc(docsId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSingleItems(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    fireStoreDB();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {map(singleItems, (singleItem) =>
        singleItem.title && singleItem.mainImage ? (
          <ScrollView key={singleItem.id}>
            <View>
              <Image
                style={styles.image}
                source={{ uri: singleItem.mainImage }}
              />
            </View>
            <View style={styles.titleView}>
              <Text key={singleItem.id} style={styles.title}>
                {singleItem.title}
              </Text>
              <Text style={styles.subTitle}>{singleItem.subtitle}</Text>
            </View>
            <View style={styles.imageContainer}>
              {map(singleItem.images, (image) =>
                image.uri ? (
                  <View style={styles.gallaryImageView}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate("SingleCollectionGallery", {
                          images: singleItem.images,
                        })
                      }
                    >
                      <Image
                        style={styles.gallaryImage}
                        source={{ uri: image.uri }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null
              )}
            </View>
            <View style={styles.footerView}>
              <Text style={styles.title}>This is Footer View</Text>
              <View style={styles.iconView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon
                    style={styles.icon}
                    name="square"
                    color="#86C7D0"
                    size={30}
                    solid
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    style={styles.icon}
                    name="square"
                    color="#FFA7A7"
                    size={30}
                    solid
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        ) : null
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  gallaryImageView: {
    height: 200,
    width: width / 3 - 8,
    borderColor: "#fff",
    margin: 2,
  },
  gallaryImage: {
    height: 200,
    width: width / 3 - 10,
    resizeMode: "cover",
    borderRadius: 2,
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: height - 150,
    width: width,
  },
  titleView: {
    height: 150,
  },
  title: {
    fontSize: 27,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
  },
  detailImage: {
    height: height,
    width: width,
  },
  lastImage: {
    height: height - 150,
    width: width,
  },
  footerView: {
    height: 200,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
  },
  icon: {
    margin: 10,
  },
});

export default SingleCollectionScreen;
