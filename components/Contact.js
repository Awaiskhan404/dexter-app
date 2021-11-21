import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import db from "../db/firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
import gifImage from "../assets/loading.gif";

const { width, height } = Dimensions.get("window");

const Contact = ({ navigation }) => {
  const [itemData, setItemData] = useState();
  const [loader, setLoader] = useState("true");

  function loading() {
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }

  const fireStoreDB = async () => {
    var docRef = db.collection("Screen Data").doc("contact");
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setItemData(doc.data());
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

  loading();

  return (
    <View>
      {loader && (
        <View style={styles.loading}>
          <Image style={styles.gifImage} source={gifImage} />
        </View>
      )}
      {itemData && !loader && (
        <View>
          <Image style={styles.image} source={{ uri: itemData.header.image }} />
          <View style={styles.contactHeader}>
            <View style={{ width: 50 }}></View>
            <Text style={styles.contactTitle}>{itemData.header.title}</Text>
            <View style={styles.contactCross}>
              <TouchableOpacity onPress={() => navigation.navigate("Cover")}>
                <Icon name="times" color="#FFAEAE" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            {/* {map(itemData.content, (item) => (
            <View style={styles.item} key={item.id}>
              <View style={styles.itemIcon}>
                <Icon name={item.icon} color="#382b2b" size={20} />
              </View>
              <Text style={styles.itemTitle}>{item.title} :</Text>
              <Text style={styles.itemValue}>{item.value}</Text>
            </View>
          ))} */}

            <View style={styles.item}>
              <Text style={styles.itemValue}>+1 800 484 9405</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.itemValue}>
                Monday through Saturday, 9:00am to 6:00pm EST
              </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemValue}>DEXTERDEXTERDEXTER INC</Text>
              <Text style={styles.itemValue}>
                PO BOX 7778, NEW YORK, NY 10116 AMERICA
              </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemValue}>Email/Correspond:</Text>
              <Text style={styles.itemValue}>
                clientcare@dexterdexterdexter.com
              </Text>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "white",
    marginTop: height / 4,
    alignItems: "center",
  },
  gifImage: {
    height: width - 50,
    width: height / 2,
    resizeMode: "contain",
  },
  loadingText: {
    fontSize: 22,
    fontFamily: "NeueHelvetica",
  },
  image: {
    width: width,
    height: 300,
  },
  contactTitle: {
    fontSize: 42,
    fontFamily: "NeueHelvetica",
  },
  contactCross: {
    padding: 15,
    marginRight: 20,
  },
  contactHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  item: {
    justifyContent: "center",
    width: width - 50,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  itemIcon: {
    marginHorizontal: 5,
    marginTop: 5,
  },
  itemTitle: {
    fontFamily: "NeueHelvetica",
    fontSize: 24,
    marginHorizontal: 5,
  },
  itemValue: {
    fontFamily: "NeueHelvetica",
    fontSize: 24,
    marginHorizontal: 5,
    textAlign: "center",
  },
});

export default Contact;
