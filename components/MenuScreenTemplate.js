import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import image from "../assets/termsCover.jpg";

const { width, height } = Dimensions.get("window");

const MenuScreenTemplate = () => {
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.title}>Title</Text>
      </View>
      <View>
        <Text style={styles.contentText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          consectetur at voluptas amet beatae qui, illo magnam est excepturi,
          fugit architecto ducimus eius quia. Nihil ex consequatur eum
          cupiditate esse.
        </Text>
      </View>
      <View style={styles.contentImageView}>
        <View>
          <Image style={styles.contentImage} source={image} />
          <Text style={styles.imageCaption}>Caption</Text>
        </View>
        <View>
          <Image style={styles.contentImage} source={image} />
          <Text style={styles.imageCaption}>Caption</Text>
        </View>
      </View>
      <View>
        <Text style={styles.contentText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          consectetur at voluptas amet beatae qui, illo magnam est excepturi,
          fugit architecto ducimus eius quia. Nihil ex consequatur eum
          cupiditate esse.
        </Text>
      </View>
      <View style={styles.contentImageView}>
        <View>
          <Image style={styles.contentImage} source={image} />
          <Text style={styles.imageCaption}>Caption</Text>
        </View>
      </View>
      <View>
        <Text style={styles.contentText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          consectetur at voluptas amet beatae qui, illo magnam est excepturi,
          fugit architecto ducimus eius quia. Nihil ex consequatur eum
          cupiditate esse.
        </Text>
      </View>
      <View>
        <Text style={styles.contentFooter}>This is Footer</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 250,
  },
  contentImage: {
    width: width / 2.5,
    height: 250,
    marginHorizontal: 10,
  },
  contentImageView: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-evenly",
  },
  imageCaption: {
    fontSize: 16,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
  },
  title: {
    fontSize: 42,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
    marginVertical: 10,
  },
  contentText: {
    fontSize: 22,
    fontFamily: "NeueHelvetica",
    marginVertical: 5,
    marginHorizontal: 8,
  },
  contentFooter: {
    fontSize: 22,
    fontFamily: "NeueHelvetica",
    marginVertical: 5,
    textAlign: "center",
    marginBottom: 80,
  },
});

export default MenuScreenTemplate;
