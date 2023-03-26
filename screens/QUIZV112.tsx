import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const QUIZV112 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV11}>
      <View style={[styles.quizV11Child, styles.quizLayout1]} />
      <Pressable
        style={[styles.quizV11Item, styles.quizLayout1]}
        onPress={() => navigation.navigate("QUIZV11")}
      />
      <Text style={[styles.next, styles.nextTypo, styles.nextTypo1]}>Next</Text>
      <Text style={[styles.askedInVerb, styles.nextTypo, styles.nextTypo1]}>
        ASKED IN VERB 1
      </Text>
      <Image
        style={[styles.quizV11Inner, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV11Child1, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={styles.ask}>ASK</Text>
      <Text style={[styles.approved, styles.bannedTypo]}>APPROVED</Text>
      <Text style={[styles.banned, styles.bannedTypo]}>BANNED</Text>
      <Text
        style={[styles.oopsApprovedIs, styles.nextTypo]}
      >{`                                      OOPS!
Approved is not a form of verb 1/2/3 of asked and have the different meaning from asked. so its absolutely the wrong choice
`}</Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.iconLayout,
            styles.groupChildPosition,
          ]}
        />
        <Pressable
          style={styles.quiz}
          onPress={() => navigation.navigate("ABOUTVERB")}
        >
          <Text style={[styles.quiz1, styles.textTypo]}>{`Quiz  `}</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>1/2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quizLayout1: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  nextTypo1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  quizLayout: {
    height: 51,
    width: 94,
    top: 440,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  bannedTypo: {
    top: 453,
    color: Color.orange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildPosition: {
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  quizV11Child: {
    top: 655,
    left: 27,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  quizV11Item: {
    top: 804,
    left: 150,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  next: {
    top: 819,
    left: 185,
    color: Color.black,
  },
  askedInVerb: {
    top: 344,
    left: 139,
    color: Color.white,
  },
  quizV11Inner: {
    left: 45,
  },
  rectangleIcon: {
    left: 166,
  },
  quizV11Child1: {
    left: 290,
  },
  ask: {
    top: 454,
    left: 74,
    width: 52,
    height: 24,
    color: Color.orange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  approved: {
    left: 174,
  },
  banned: {
    left: 305,
  },
  oopsApprovedIs: {
    top: 678,
    left: 53,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    width: 333,
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
  },
  quiz1: {
    height: "69.49%",
    width: "11.28%",
    color: Color.steelblue,
  },
  quiz: {
    left: "41%",
    top: "25.42%",
    position: "absolute",
  },
  rectangleParent: {
    height: "6.33%",
    width: "107.21%",
    right: "-3.49%",
    bottom: "93.67%",
    left: "-3.72%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "5.58%",
    top: "2.04%",
    right: "91.41%",
    bottom: "95.67%",
    width: "3.01%",
    height: "2.29%",
    position: "absolute",
  },
  text: {
    top: 15,
    left: 384,
    color: Color.black,
    position: "absolute",
  },
  quizV11: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV112;
