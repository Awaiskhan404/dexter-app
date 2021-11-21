import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import image from "../assets/message.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";
import db from "../db/firebase";
import { map } from "lodash";
import gifImage from "../assets/loading.gif";

const { width, height } = Dimensions.get("window");

const Menu = ({ navigation }) => {
  const [itemData, setItemData] = useState();
  const [loader, setLoader] = useState("true");

  function loading() {
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }

  const fireStoreDB = async () => {
    var docRef = db.collection("Screen Data").doc("menu");
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
          <ScrollView>
            {map(itemData.menuItems, (item) => (
              <View style={styles.menuBTN} key={item.id}>
                <TouchableOpacity onPress={() => navigation.navigate(item.id)}>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            ))}
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
  menuView: {
    justifyContent: "center",
    width: width - 100,
    alignSelf: "center",
  },
  menuTitle: {
    fontSize: 35,
    fontFamily: "NeueHelvetica",
    marginVertical: 10,
    textAlign: "center",
  },
  menuBTN: {
    borderBottomWidth: 0.2,
    width: width - 70,
    borderBottomColor: "#8D8D8D",
    alignSelf: "center",
  },
});
export default Menu;
