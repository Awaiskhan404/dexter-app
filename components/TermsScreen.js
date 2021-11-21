import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
  StatusBar,
} from "react-native";
import { Checkbox } from "react-native-paper";
import image from "../assets/termsCover.jpg";
import welimage from "../assets/welcome.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("window");

const TermsScreen = ({ onDone }) => {
  const [terms, setTerms] = useState(true);
  const [notification, setNotification] = useState(true);
  const [viewTerms, setViewTerms] = useState(true);
  const [fullBtn, setFullBtn] = useState(false);

  const termsAlert = () =>
    Alert.alert(
      "Alert",
      "You have to Agree to Terms & Condition To Continue.",
      [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel",
        // },
        { text: "Okay", onPress: () => setTerms(true) },
      ]
    );

  if (viewTerms) {
    return (
      <View>
        <ImageBackground style={styles.welImage} source={welimage}>
          <View style={styles.content}>
            <Text style={styles.description}>
              D E X T E R C O C O B E A C H 2 0 2 1
            </Text>
            <Text style={styles.miniDescription}>I N B U T I Q U E S</Text>
            <TouchableOpacity onPress={() => setViewTerms(false)}>
              <View style={styles.welbuttonView}>
                <Text style={styles.welbuttonText}>E X P L O R E</Text>
                <View style={styles.icon}>
                  <Icon name="arrow-right" color="#fff" size={25} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

  if (!viewTerms) {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ScrollView>
          <View>
            <Image style={styles.image} source={image} />
          </View>
          <View>
            <Text style={styles.title}>Terms {`&`} Condition</Text>
            <View style={styles.termsTextView}>
              {fullBtn ? (
                <View>
                  <Text style={styles.termsText}>
                    IMPORTANT! Please carefully read the following terms and
                    conditions ("Terms") governing your use (including access,
                    browsing and/or use of any interactive features) of those
                    portions of the DEXTERDEXTERDEXTER Application (App) or
                    website accessible at www. dexterdexterdexter.com, as well
                    as and including any other DEXTERDEXTERDEXTER websites or
                    web pages accessible through the DEXTERDEXTERDEXTER website,
                    Application (App) or other promotional websites
                    DEXTERDEXTERDEXTER hosts or sponsors such as minisites or
                    pages on third party social networking services, directed at
                    consumers in the United States, (collectively the
                    “Site/App”).
                  </Text>
                  <Text style={styles.termsText}>
                    PLEASE NOTE THAT THESE TERMS CONTAIN PROVISIONS THAT GOVERN
                    THE RESOLUTION OF DISPUTES BETWEEN US AND YOU AND LIMIT OUR
                    LIABILITY TO YOU (SEE “AGREEMENT TO ARBITRATE DISPUTES”
                    BELOW). THESE PROVISIONS SIGNIFICANTLY AFFECT YOUR LEGAL
                    RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND
                    TO HAVE A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR
                    MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.
                  </Text>
                  <Text style={styles.termsText}>
                    Please see the separate terms of use applicable to other
                    country-specific or region-specific web pages available on
                    those pages when you access them through
                    www.dexterdexterdexter.com or through other promotional
                    websites.
                  </Text>
                  <Text style={styles.termsText}>
                    Use of the Site/App is subject to these legally binding
                    Terms and constitutes your agreement to be bound by and to
                    act in accordance with these Terms. We reserve the right to
                    change the Terms at any time. Any such changes will be
                    posted on the Site/App and you agree to be bound by such
                    changes.
                  </Text>
                  <Text style={styles.termsText}>1. Privacy</Text>
                  <Text style={styles.termsText}>
                    Please read our Privacy Policy, which governs the manner in
                    which we will handle any personal information that you
                    provide to us. The Privacy Policy is subject to the terms
                    and conditions of this Legal Statement.
                  </Text>
                  <Text style={styles.termsText}>
                    2. Ownership Rights/Use of Sites Materials
                  </Text>
                  <Text style={styles.termsText}>
                    DEXTERDEXTERDEXTER, Inc. own all right, title and interest
                    in and to the Site/App and/or own the content and
                    applications on the Site/App (including on social network
                    websites).
                  </Text>
                  <Text style={styles.termsText}>
                    DEXTERDEXTERDEXTER owns all copyrights for all material on
                    the Site/App or has a valid right from a third party to use
                    the material on the Site/App. DEXTERDEXTERDEXTER also owns
                    all trademarks, service marks, trade names, logos and domain
                    names used on or in connection with the Site/App or has a
                    valid right from a third party to use any such material. Any
                    modification or use of the materials from the Site/App for
                    any purpose not explicitly permitted is a violation of
                    DEXTERDEXTERDEXTER copyright and other proprietary rights.
                    Certain functionality provided via this website may be
                    covered by U.S. Patent.
                  </Text>
                  <Text style={styles.termsText}>
                    No part of the Site/App may be copied, reproduced,
                    republished, uploaded, posted, transmitted or distributed in
                    any manner whatsoever, except for viewing purposes, without
                    the prior written consent of DEXTERDEXTERDEXTER. This
                    prohibition also includes framing any content from the
                    Site/App, as well as unauthorized linking.
                  </Text>
                  <Text style={styles.termsText}>
                    3. Disclaimer/Limitation on Liability
                  </Text>
                  <Text style={styles.termsText}>
                    Use of and browsing in the Sites are at your own risk.
                    Neither DEXTERDEXTERDEXTER nor any party representing or
                    otherwise affiliated with DEXTERDEXTERDEXTER in creating or
                    presenting the Site/App are liable for any direct, indirect,
                    special, punitive, incidental, exemplary or consequential
                    damages arising out of your use of the Site/App, except
                    where such liability or damage is the result of
                    DEXTERDEXTERDEXTER own negligence, fraud, willful injury or
                    willful violation of law. To the extent permitted by law and
                    without limiting any of the foregoing, everything on the
                    Site/App is provided to you on an "as is" basis, without
                    warranty, either express or implied, of any kind, including,
                    but not limited to, the implied warranties of
                    merchantability, fitness for a specific purpose, freedom
                    from computer virus, or non-infringement.
                  </Text>
                  <Text style={styles.termsText}>
                    Solicited information that you submit to DEXTERDEXTERDEXTER
                    by email in order to register or sign up, purchase products
                    and/or to submit appropriate questions to the Site/App are
                    subject to our Privacy Policy. All unsolicited reviews,
                    comments or other submissions, including ideas, concepts,
                    techniques, know-how and the like, shall not be treated as
                    confidential by DEXTERDEXTERDEXTER and DEXTERDEXTERDEXTER
                    may use such materials in any manner that it deems
                    appropriate. For more information on this topic, please see
                    our Privacy Policy.
                  </Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.termsText}>
                    IMPORTANT! Please carefully read the following terms and
                    conditions ("Terms") governing your use (including access,
                    browsing and/or use of any interactive features) of those
                    portions of the DEXTERDEXTERDEXTER Application (App) or
                    website accessible at www. dexterdexterdexter.com, as well
                    as and including any other DEXTERDEXTERDEXTER websites or
                    web pages accessible through the DEXTERDEXTERDEXTER website,
                    Application (App) or other promotional websites
                    DEXTERDEXTERDEXTER hosts or sponsors such as minisites or
                    pages on third party social networking services, directed at
                    consumers in the United States, (collectively the
                    “Site/App”).
                  </Text>
                </View>
              )}
              <TouchableOpacity onPress={() => setFullBtn(!fullBtn)}>
                {fullBtn ? (
                  <Text style={styles.fullBtn}>Hide</Text>
                ) : (
                  <Text style={styles.fullBtn}>
                    Read Full Terms {`&`} Condition
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.checkboxContainer_view}>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxBorder}></View>
                <Checkbox
                  status={terms ? "checked" : "unchecked"}
                  onPress={() => {
                    setTerms(!terms);
                  }}
                />
                <Text style={styles.label}>
                  I Agree With The Terms {`&`} Condition
                </Text>
              </View>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxBorder}></View>
                <Checkbox
                  status={notification ? "checked" : "unchecked"}
                  onPress={() => {
                    setNotification(!notification);
                  }}
                />
                <Text style={styles.label}>
                  Get Notification About Weekly Offer
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={terms ? onDone : termsAlert}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: 300,
  },
  welImage: {
    width: width,
    height: height,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "NeueHelvetica",
    marginVertical: 20,
  },
  termsTextView: {
    paddingHorizontal: 30,
  },
  termsText: {
    fontSize: 20,
    fontFamily: "NeueHelvetica",
    marginTop: 5,
  },
  fullBtn: {
    color: "blue",
    fontSize: 20,
    fontFamily: "NeueHelvetica",
    textAlign: "center",
    marginVertical: 10,
    color: "#644413",
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkboxContainer_view: {
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    marginVertical: 6,
    fontSize: 20,
    fontFamily: "NeueHelvetica",
  },
  checkboxBorder: {
    ...Platform.select({
      ios: {
        borderWidth: 0.5,
        borderRadius: 3,
        width: 18,
        height: 18,
        position: "relative",
        top: 10,
        left: 25,
      },
      android: {},
      default: {},
    }),
  },
  button: {
    alignSelf: "center",
    marginBottom: 50,
    justifyContent: "center",
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
  welbuttonText: {
    color: "#fff",
    fontFamily: "NeueHelvetica",
    fontSize: 32,
    lineHeight: 30,
  },
  welbuttonView: {
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

export default TermsScreen;
