import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import image from "../../assets/message.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import db from "../../db/firebase";

const { width, height } = Dimensions.get("window");

const Message = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const body = {
    email: {
      html: "PHA+RXhhbXBsZSB0ZXh0PC9wPg==",
      text: "Example text",
      subject: "Example subject",
      from: {
        name: "Example name",
        email: "shakilhasan055@gmail.com",
      },
      to: [
        {
          name: "Recipient1 name",
          email: "mr435465@gmail.com",
        },
      ],
    },
  };

  const current = new Date();

  const fireStoreDB = async () => {
    var docRef = db.collection("Emails").doc(email);
    docRef
      .set({
        name: name,
        phone: phone,
        email: email,
        message: message,
        date: current,
      })
      .then(() => {
        console.log("User added!");
      });
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = () => {
    if (!validateEmail(email)) {
      Alert.alert("Alert", "Please Provide a valid email address.", [
        { text: "Okay" },
      ]);
    } else {
      fireStoreDB();
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image style={styles.image} source={image} />

        <View>
          <View style={styles.contactHeader}>
            <View style={{ width: 50 }}></View>
            <Text style={styles.contactTitle}>Message</Text>
            <View style={styles.contactCross}>
              <TouchableOpacity onPress={() => navigation.navigate("Cover")}>
                <Icon name="times" color="#FFAEAE" size={25} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.randomText}>
            PLEASE PROVIDE THE INFORMATION BELOW AND CHANEL CUSTOMER CARE WILL
            GLADLY ASSIST YOU
          </Text>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>NAME</Text>
            <TextInput
              style={styles.input}
              editable
              onChangeText={(name) => setName(name)}
              defaultValue={name}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>PHONE</Text>
            <TextInput
              style={styles.input}
              editable
              onChangeText={(phone) => setPhone(phone)}
              defaultValue={phone}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>EMAIL</Text>
            <TextInput
              style={styles.input}
              editable
              onChangeText={(email) => setEmail(email)}
              defaultValue={email}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}>Message</Text>
            <TextInput
              style={styles.messageInput}
              editable
              onChangeText={(message) => setMessage(message)}
              numberOfLines={4}
              defaultValue={message}
            />
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button} onPress={() => sendEmail()}>
              <Text style={styles.buttonText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  randomText: {
    fontSize: 22,
    fontFamily: "NeueHelvetica",
    paddingHorizontal: 20,
  },
  inputView: {
    marginVertical: 10,
  },
  inputLabel: {
    alignSelf: "center",
    fontSize: 22,
    fontFamily: "NeueHelvetica",
    padding: 5,
  },
  input: {
    borderWidth: 1,
    width: width - 80,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "NeueHelvetica",
    padding: 5,
  },
  messageInput: {
    borderWidth: 1,
    width: width - 80,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "NeueHelvetica",
    padding: 5,
    height: 140,
  },
  button: {
    alignSelf: "center",
    marginBottom: 50,
  },
  buttonText: {
    color: "#644413",
    borderWidth: 1,
    borderColor: "#644413",
    textAlign: "center",
    paddingVertical: 8,
    marginTop: 20,
    fontFamily: "NeueHelvetica",
    fontSize: 25,
    borderRadius: 8,
    width: 120,
  },
});

export default Message;
