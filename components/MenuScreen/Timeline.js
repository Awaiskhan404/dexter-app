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

const Timeline = () => {
  return (
    <View>
      <View>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.title}>Timeline</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.contentText}>1.</Text>
          <Text style={styles.contentText}>
            In 2015, Creative Director, Dexter Cheston created The fashion
            designer label DEXTERDEXTERDEXTER.
          </Text>
          <Text style={styles.contentText}>
            Dexter Cheston brand’s first staple piece, was our Model 7.0; a
            neck- to-floor length jersey cotton gown with sleeves of the same
            span, worn with a self-belt. The piece was inspired by Dexter's
            personal clothing collection and was designed by Dexter as part of
            our brand’s debut collection during NYFW in September of 2015. The
            Model 7.0 design is now part of our fashion archives and is
            reproduced each season in multiple styles.
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
          <Text style={styles.contentText}>2.</Text>
          <Text style={styles.contentText}>
            Minimalism playing hard as the core theme of the brand
          </Text>
        </View>
        <View style={styles.contentImageView}>
          <View>
            <Image style={styles.contentImage} source={image} />
            <Text style={styles.imageCaption}>Caption</Text>
          </View>
        </View>
        <View>
          <Text style={styles.contentText}>3.</Text>
          <Text style={styles.contentText}>
            In 2016, DEXTERDEXTERDEXTER staged it’s very first
            mens/ready-to-wear runway shows during New York Fashion Week
            followed by a pop-up show room in New York City for private clients,
            buyers, bloggers, photographers, and spectators.
          </Text>
          <Text style={styles.contentText}>
            In 2017, Dexter Cheston published our DEXTERDEXTERDEXTER Application
            platform (App) for mobile devices. As our ecosystem, we invite you
            into our world to discover more about our products and services,
            what we are taking forward as well as the history of where we been.
            Welcome to the future of discovering fashion beauty and art!
          </Text>
        </View>
        <View style={styles.contentImageView}>
          <View>
            <Image style={styles.contentImage} source={image} />
            <Text style={styles.imageCaption}>Caption</Text>
          </View>
        </View>
        <View>
          <Text style={styles.contentText}>4.</Text>
          <Text style={styles.contentText}>
            In 2018, our complete line of beauty products launched which
            included hair care items for conditioning, moisturizing, and
            styling; as well as essentials for face, skin, nail, to body. In
            addition, we celebrated the release of our SS’19 fragrance in an eau
            perfume, cologne and toilette during our SS’19 runway show at the
            Metropolitan Pavilion building on the first day of ADF&PCD New York.
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
          <Text style={styles.contentText}>5.</Text>
          <Text style={styles.contentText}>
            In 2019 DEXTERDEXTERDEXTER, scheduled the release of our line of
            furnishings for home, office, and beyond which includes gourmet
            foods.
          </Text>
          <Text style={styles.contentText}>
            Designed and sourced by Creative Director, Dexter Cheston our
            furnishings has something for every room such as candles, soaps,
            pillows, throws, chairs, artwork, tableware and cookware to rugs and
            interior wall paintings.
          </Text>
        </View>
        <View style={styles.contentImageView}>
          <View>
            <Image style={styles.contentImage} source={image} />
            <Text style={styles.imageCaption}>Caption</Text>
          </View>
        </View>
        <View>
          <Text style={styles.contentText}>6.</Text>
          <Text style={styles.contentText}>
            In 2020, Curated by Creative Director, Dexter Cheston, our Estate
            Collection of designer foods include Infused Olive Oils, Tapenades
            and Spreads, Fancy Mustards, Sweet and Savory Jams, Dipping Sauces,
            Spices and Rubs, to Gourmet Pancake Mixes and Maple Syrups plus
            Estate Coffees and Teas.
          </Text>
        </View>
        <View style={styles.contentImageView}>
          <View>
            <Image style={styles.contentImage} source={image} />
            <Text style={styles.imageCaption}>Caption</Text>
          </View>
        </View>
        <View>
          <Text style={styles.contentText}>7.</Text>
          <Text style={styles.contentText}>
            In 2021, the DEXTERDEXTERDEXTER company releases it’s first full
            year of seasonal collections - starting with Resort 2021, followed
            by Spring 2021 and Fall 2021. The monochromatic collections included
            our full line of fine jewelry, ready to wear clothing from outerwear
            to evening, plus our newly designed Eyeware frames. In addition the
            releases also included the company’s full line of vintage inspired
            perfumes.
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
          <Text style={styles.contentFooter}>
            Today the company is celebrating the release of it’s official
            handbag collection which features the “Jet” bags; from cross body
            bags to travel tote pieces, made of ancient inspired materials and
            adorned with sterling silver chain straps and our house-coins.{" "}
          </Text>
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

export default Timeline;
