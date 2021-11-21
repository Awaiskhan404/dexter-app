import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import welimage from "../assets/welcome.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar hidden={true} />
      <ImageBackground style={styles.image} source={welimage}>
        <View style={styles.content}>
          <Text style={styles.description}>
            D E X T E R C O C O B E A C H 2 0 2 1
          </Text>
          <Text style={styles.miniDescription}>I N B U T I Q U E S</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("NavigationBar")}
          >
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>E X P L O R E</Text>
              <View style={styles.icon}>
                <Icon name="arrow-right" color="#fff" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: windowHeight,
  },
  content: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginBottom: 150,
  },
  description: {
    color: "#fff",
    fontFamily: "NeueHelvetica",
    fontSize: 24,
  },
  miniDescription: {
    color: "#fff",
    fontFamily: "NeueHelvetica",
    fontSize: 34,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "NeueHelvetica",
    fontSize: 32,
    lineHeight: 30,
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginTop: 20,
  },
  icon: {
    justifyContent: "center",
    marginLeft: 10,
  },
});

export default WelcomeScreen;
