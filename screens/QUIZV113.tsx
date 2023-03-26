import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const QUIZV113 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV11}>
      <Text style={[styles.askedInVerb, styles.nextTypo]}>ASKED IN VERB 1</Text>
      <Image
        style={[styles.quizV11Child, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV11Item, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV11Inner, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={styles.ask}>ASK</Text>
      <Text style={[styles.approved, styles.bannedTypo]}>APPROVED</Text>
      <Text style={[styles.banned, styles.bannedTypo]}>BANNED</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.youPickThe, styles.nextTypo]}>
        You pick the right choice!
      </Text>
      <View style={[styles.quizV11Child4, styles.rectangleViewLayout]} />
      <View style={[styles.quizV11Child4, styles.rectangleViewLayout]} />
      <View style={[styles.quizV11Child4, styles.rectangleViewLayout]} />
      <Pressable
        style={[styles.quizV11Child4, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("QUIZV11")}
      />
      <Text style={[styles.next, styles.nextClr, styles.nextTypo]}>Next</Text>
      <Text style={[styles.next, styles.nextClr, styles.nextTypo]}>Next</Text>
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
      <Text style={[styles.text, styles.textTypo, styles.nextClr]}>1/2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
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
  rectangleViewLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  nextClr: {
    color: Color.black,
    position: "absolute",
  },
  groupChildPosition: {
    right: "0%",
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
  askedInVerb: {
    top: 344,
    left: 139,
    color: Color.white,
    position: "absolute",
  },
  quizV11Child: {
    left: 45,
  },
  quizV11Item: {
    left: 166,
  },
  quizV11Inner: {
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
  rectangleView: {
    top: 652,
    left: 29,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  youPickThe: {
    top: 713,
    left: 96,
    color: Color.gray_100,
    position: "absolute",
  },
  quizV11Child4: {
    top: 800,
    left: 150,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  next: {
    top: 815,
    left: 193,
  },
  groupChild: {
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
    bottom: "93.67%",
    left: "-7.21%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "5.81%",
    top: "2.04%",
    right: "91.18%",
    bottom: "95.67%",
    width: "3.01%",
    height: "2.29%",
    position: "absolute",
  },
  text: {
    top: 15,
    left: 384,
  },
  quizV11: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV113;
