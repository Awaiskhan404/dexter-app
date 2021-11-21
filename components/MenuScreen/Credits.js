import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import image from "../../assets/welcome.jpg";

const { width, height } = Dimensions.get("window");

const Credits = () => {
  return (
    <View>
      <View>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.title}>Credits</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.contentTextTitle}>Application (App)</Text>
          <Text style={styles.contentTextSubTitle}>UX/UI Designer</Text>
          <Text style={styles.contentText}>Dexter Cheston</Text>
          <Text style={styles.contentText}>Brakley Studio</Text>
          <Text style={styles.contentText}>Qaiser Raza</Text>
          <Text style={styles.contentTextSubTitle}>App Developer</Text>
          <Text style={styles.contentText}>Hasnain Ali</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.contentTextTitle}>Fashion, Beauty and Art</Text>
          <Text style={styles.contentTextSubTitle}>Fashion Designer</Text>
          <Text style={styles.contentText}>Dexter Cheston</Text>
          <Text style={styles.contentTextSubTitle}>Models</Text>
          <Text style={styles.contentText}>King Joshua</Text>
          <Text style={styles.contentText}>Crystal Sky</Text>
          <Text style={styles.contentText}>Crystal Sky</Text>
          <Text style={styles.contentText}>Christine Neptuney</Text>
          <Text style={styles.contentText}>Taj Alexander</Text>
          <Text style={styles.contentText}>Ahmed Faiad</Text>
          <Text style={styles.contentText}>Larry Lamouth</Text>
          <Text style={styles.contentText}>Jonathan Madera</Text>
          <Text style={styles.contentText}>Maanamin Phillips</Text>
          <Text style={styles.contentTextSubTitle}>Makeup</Text>
          <Text style={styles.contentText}>Keena Love</Text>
          <Text style={styles.contentText}>Makeup Express</Text>
          <Text style={styles.contentText}>Asia Jones</Text>
          <Text style={styles.contentText}>Keena Love</Text>
          <Text style={styles.contentTextSubTitle}>Stylist/Assistant</Text>
          <Text style={styles.contentText}>Dexter Chestone</Text>
          <Text style={styles.contentText}>B Delancey</Text>
          <Text style={styles.contentText}>B Delancey</Text>
          <Text style={styles.contentText}>Arosah Yaseen</Text>
          <Text style={styles.contentText}>Sylvia Bennicelli</Text>
          <Text style={styles.contentText}>Teeara Sharif</Text>
          <Text style={styles.contentText}>LaKrishia Armour</Text>
          <Text style={styles.contentTextSubTitle}>Photography</Text>
          <Text style={styles.contentText}>Dexter Cheston</Text>
          <Text style={styles.contentText}>Renaldo Pelegrín</Text>
          <Text style={styles.contentText}>Karen E Evans</Text>
          <Text style={styles.contentTextSubTitle}>Assistant</Text>
          <Text style={styles.contentText}>Ksenia Baranova</Text>

          <Text style={styles.contentTextSubTitle}>
            Graphic Design Services
          </Text>
          <Text style={styles.contentText}>Dexter Cheston</Text>
          <Text style={styles.contentText}>Bilalwa</Text>
          <Text style={styles.contentText}>Zachary Straub</Text>
          <Text style={styles.contentText}>Fairway Printing and Design</Text>

          <Text style={styles.contentTextSubTitle}>
            Wardrobe and Accessories
          </Text>
          <Text style={styles.contentText}>curtesy of DEXTERDEXTERDEXTER</Text>
          <Text style={styles.contentTextSubTitle}>Beauty/Hair Products</Text>
          <Text style={styles.contentText}>curtesy of DEXTERDEXTERDEXTER</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.contentTextTitle}>Designer Foods</Text>
          <Text style={styles.contentText}>Curator of Designer Food</Text>
          <Text style={styles.contentText}>Dexter Cheston</Text>
          <Text style={styles.contentTextSubTitle}>
            Watercolor Artwork Design
          </Text>
          <Text style={styles.contentText}>Dexter Cheston</Text>
          <Text style={styles.contentText}> Kate Parfyrieva</Text>
          <Text style={styles.contentText}>Alex Vieru</Text>
          <Text style={styles.contentTextSubTitle}>Editorial</Text>
          <Text style={styles.contentText}>Haseeb Idrees</Text>
          <Text style={styles.contentTextSubTitle}>Graphic Designers</Text>
          <Text style={styles.contentText}>Omii Designs</Text>
          <Text style={styles.contentText}>Simozr Bilalw</Text>
          <Text style={styles.contentText}>Alpha Graphica</Text>
        </View>
        <View>
          <Text style={styles.contentFooter}>Copyright 2021 </Text>
        </View>
      </ScrollView>
    </View>
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
    borderBottomWidth: 3,
    borderBottomColor: "black",
  },
  contentText: {
    fontSize: 20,
    fontFamily: "NeueHelvetica",
    marginVertical: 5,
    marginHorizontal: 8,
    textAlign: "center",
  },
  contentTextTitle: {
    fontSize: 28,
    fontFamily: "NeueHelvetica",
    marginVertical: 5,
    marginHorizontal: 8,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  contentTextSubTitle: {
    fontSize: 24,
    fontFamily: "NeueHelvetica",
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  contentFooter: {
    fontSize: 22,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
    marginBottom: 200,
    marginTop: 50,
  },
});

export default Credits;
