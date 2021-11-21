import React from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import cover from "../assets/cover.jpg";
import logo from "../assets/coverBG.png";

const { width, height } = Dimensions.get("window");

const CoverScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={cover} style={styles.coverBG}>
        <View style={styles.coverHeaderView}>
          <Image style={styles.coverHeader} source={logo} />
          <Image style={styles.coverHeader} source={logo} />
        </View>
        <View style={styles.discoverView}>
          <Text style={styles.description}>Description</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Text style={styles.buttonText}>Discover</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.collectionView}>
          <Text style={styles.description}>Description</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Collection")}>
            <Text style={styles.buttonText}>Collection</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  coverBG: {
    height: height,
    width: width,
  },
  coverHeader: {
    width: "50%",
    height: 170,
  },
  coverHeaderView: {
    flexDirection: "row",
  },
  discoverView: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: height / 5,
    marginRight: 30,
  },
  description: {
    color: "#644413",
    fontFamily: "NeueHelvetica",
    fontSize: 28,
    alignItems: "center",
  },
  buttonText: {
    color: "#644413",
    borderWidth: 1,
    borderColor: "#98858D",
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginTop: 20,
    fontFamily: "NeueHelvetica",
    fontSize: 32,
    borderRadius: 8,
  },
  collectionView: {
    marginLeft: 30,
    marginTop: 30,
    alignItems: "flex-start",
  },
});

export default CoverScreen;
