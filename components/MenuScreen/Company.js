import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import image from "../../assets/termsCover.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("window");

const Company = ({ navigation }) => {
  return (
    <View>
      <View>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.contactHeader}>
        <Text style={styles.title}>Company</Text>
        <View style={styles.contactCross}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Icon name="times" color="#FFAEAE" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.contentText}>
            Welcome to our new DEXTERDEXTERDEXTER Fashion, Art and Beauty
            environment. Enhanced with personalize services as you brows our
            latest collections.
          </Text>
          <Text style={styles.contentText}>
            At DEXTERDEXTERDEXTER, we are an American luxury company with a
            focus on minimalist high fashion of ready-made clothes, luxury
            products, accessories, furnishings to gourmet foods.
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
            Launched in 2015 by Fashion Designer, Dexter Cheston out of New
            York, the DEXTERDEXTERDEXTER product brands have been personified by
            fashion models, idols to musicians.
          </Text>
          <Text style={styles.contentText}>
            As Creative Director, Dexter Cheston directs the design, marketing
            to production and sales across all product lines.
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
            Extending his influence beyond clothing, Dexter realizes our design
            aesthetic for handbags, eyewear, jewelry, fragrances, to beauty and
            specialty foods.
          </Text>
          <Text style={styles.contentText}>
            The Dexter’s bust, photographed and graphic designed by himself is
            our label’s official logo and can be found on our house silver metal
            color coin necklaces, bracelets and earrings.
          </Text>
          <Text style={styles.contentText}>
            From gourmet food pairing recipes, fashion career opportunities to
            watching our New York Fashion Week live coverage - we welcome you to
            explore it all!
          </Text>
          <Text style={styles.contentText}>With complements,</Text>
        </View>
        <View>
          <Text style={styles.contentFooter}></Text>
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
    marginVertical: 5,
    marginLeft: 20,
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
  contactCross: {
    padding: 15,
    marginRight: 20,
  },
  contactHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default Company;
