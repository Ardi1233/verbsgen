import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const QUIZV214 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV21}>
      <View style={styles.quizV21Child} />
      <Text
        style={[
          styles.eatInVerb,
          styles.finishTypo,
          styles.finishTypo1,
          styles.eatInVerbPosition,
        ]}
      >
        EAT IN VERB 2
      </Text>
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
      <Image
        style={[styles.rectangleIcon, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.eat, styles.eatTypo, styles.eatPosition]}>EAT</Text>
      <Text style={[styles.ate, styles.eatTypo]}>ATE</Text>
      <Text style={[styles.eaten, styles.eatTypo, styles.eatPosition]}>
        EATEN
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.eatInVerbPosition]}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
      />
      <Text
        style={[
          styles.finish,
          styles.textClr,
          styles.finishTypo,
          styles.finishTypo1,
        ]}
      >
        Finish
      </Text>
      <Text
        style={[styles.oopsEatenIs, styles.finishTypo]}
      >{`                                      OOPS!
Eaten is a form of verb 3 of Eat. V3 is the past participle form. The past participle form, too, is often irregular. Type of verb. Infinitive. so the correct answer is Ate`}</Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.iconLayout,
            styles.groupChildPosition,
          ]}
        />
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
        <Pressable
          style={styles.quiz}
          onPress={() => navigation.navigate("ABOUTVERB")}
        >
          <Text style={[styles.quiz1, styles.textTypo]}>Quiz</Text>
        </Pressable>
      </View>
      <Text style={[styles.text, styles.textTypo, styles.textClr]}>2/2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  finishTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  finishTypo1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  eatInVerbPosition: {
    left: 153,
    position: "absolute",
  },
  quizLayout: {
    height: 51,
    width: 94,
    top: 447,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  eatTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  eatPosition: {
    top: 461,
    fontSize: FontSize.size_base,
  },
  textClr: {
    color: Color.black,
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
  quizV21Child: {
    top: 650,
    left: 27,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  eatInVerb: {
    top: 350,
    color: Color.white,
  },
  quizV21Item: {
    left: 47,
  },
  quizV21Inner: {
    left: 168,
  },
  rectangleIcon: {
    left: 292,
  },
  eat: {
    left: 78,
    color: Color.orange,
    width: 52,
    height: 24,
  },
  ate: {
    top: 460,
    left: 200,
    color: Color.limegreen_100,
  },
  eaten: {
    left: 313,
    color: Color.crimson,
  },
  rectanglePressable: {
    top: 804,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
    borderRadius: Border.br_11xl,
  },
  finish: {
    top: 819,
    left: 188,
  },
  oopsEatenIs: {
    top: 669,
    left: 49,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    width: 365,
    position: "absolute",
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "8.24%",
    top: "32.2%",
    right: "88.94%",
    bottom: "32.2%",
    width: "2.82%",
    height: "35.59%",
    position: "absolute",
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
    right: "-4.65%",
    bottom: "93.67%",
    left: "-2.56%",
  },
  text: {
    top: 15,
    left: 376,
  },
  quizV21: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV214;
