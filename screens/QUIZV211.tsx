import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const QUIZV211 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV21}>
      <Image
        style={[styles.quizV21Child, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV21Item, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV21Inner, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.goInVerb, styles.nextTypo, styles.goInVerbPosition]}>
        GO IN VERB 2
      </Text>
      <Text style={[styles.went, styles.wentTypo]}>WENT</Text>
      <Text style={[styles.gone, styles.wentTypo]}>GONE</Text>
      <Text style={[styles.goal, styles.wentTypo]}>GOAL</Text>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView} />
      <Text style={[styles.youPickThe, styles.nextTypo]}>
        You pick the right choice!
      </Text>
      <Text style={[styles.youPickThe, styles.nextTypo]}>
        You pick the right choice!
      </Text>
      <Text style={[styles.youPickThe, styles.nextTypo]}>
        You pick the right choice!
      </Text>
      <Text style={[styles.youPickThe, styles.nextTypo]}>
        You pick the right choice!
      </Text>
      <View style={[styles.quizV21Child4, styles.goInVerbPosition]} />
      <View style={[styles.quizV21Child4, styles.goInVerbPosition]} />
      <View style={[styles.quizV21Child4, styles.goInVerbPosition]} />
      <Pressable
        style={[styles.quizV21Child4, styles.goInVerbPosition]}
        onPress={() => navigation.navigate("QUIZV215")}
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
          <Text style={[styles.quiz1, styles.textTypo]}>Quiz</Text>
        </Pressable>
        <Text style={[styles.text, styles.textTypo, styles.nextClr]}>1/2</Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  quizLayout: {
    height: 51,
    width: 94,
    top: 447,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  goInVerbPosition: {
    left: 150,
    position: "absolute",
  },
  wentTypo: {
    color: Color.orange,
    fontSize: FontSize.size_base,
    top: 462,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  nextClr: {
    color: Color.black,
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
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
  quizV21Child: {
    left: 36,
  },
  quizV21Item: {
    left: 165,
  },
  quizV21Inner: {
    left: 292,
  },
  goInVerb: {
    top: 339,
    color: Color.white,
  },
  went: {
    left: 60,
  },
  gone: {
    left: 188,
  },
  goal: {
    left: 318,
  },
  rectangleView: {
    top: 643,
    left: 29,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  youPickThe: {
    top: 704,
    left: 96,
    color: Color.gray_100,
    position: "absolute",
  },
  quizV21Child4: {
    top: 791,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
    borderRadius: Border.br_11xl,
  },
  next: {
    top: 806,
    left: 193,
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
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
  text: {
    top: 15,
    left: 382,
  },
  rectangleParent: {
    height: "6.33%",
    width: "107.21%",
    right: "-7.21%",
    bottom: "93.67%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "5.35%",
    top: "2.04%",
    right: "91.63%",
    bottom: "95.71%",
    width: "3.02%",
    height: "2.25%",
    position: "absolute",
  },
  quizV21: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV211;
