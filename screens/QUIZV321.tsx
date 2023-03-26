import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const QUIZV321 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV32}>
      <Text style={[styles.beginInVerb, styles.finishTypo]}>
        BEGIN IN VERB 3
      </Text>
      <View style={[styles.quizV32Child, styles.quizLayout]} />
      <View style={[styles.quizV32Child, styles.quizLayout]} />
      <Text style={[styles.youPickThe, styles.finishTypo]}>
        You pick the right choice!
      </Text>
      <Text style={[styles.youPickThe, styles.finishTypo]}>
        You pick the right choice!
      </Text>
      <View style={[styles.quizV32Inner, styles.quizLayout]} />
      <Pressable
        style={[styles.quizV32Inner, styles.quizLayout]}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
      />
      <Text style={[styles.finish, styles.textClr, styles.finishTypo]}>
        Finish
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV32Child1, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV32Child2, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.begun, styles.begunTypo]}>BEGUN</Text>
      <Text style={[styles.began, styles.begunTypo]}>BEGAN</Text>
      <Text style={styles.begin}>BEGIN</Text>
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
          onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.quiz}
          onPress={() => navigation.navigate("ABOUTVERB")}
        >
          <Text style={[styles.quiz1, styles.textTypo]}>{`Quiz  `}</Text>
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
    fontSize: FontSize.size_xl,
  },
  quizLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textClr: {
    color: Color.black,
    position: "absolute",
  },
  quizChildLayout: {
    height: 51,
    width: 94,
    top: 440,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  begunTypo: {
    color: Color.orange,
    fontSize: FontSize.size_base,
    top: 455,
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
  beginInVerb: {
    top: 347,
    left: 136,
    color: Color.white,
    position: "absolute",
  },
  quizV32Child: {
    top: 660,
    left: 29,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  youPickThe: {
    top: 721,
    left: 96,
    color: Color.gray_100,
    position: "absolute",
  },
  quizV32Inner: {
    top: 808,
    left: 150,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  finish: {
    top: 823,
    left: 193,
  },
  rectangleIcon: {
    left: 47,
  },
  quizV32Child1: {
    left: 168,
  },
  quizV32Child2: {
    left: 292,
  },
  begun: {
    left: 68,
    width: 64,
    height: 24,
  },
  began: {
    left: 189,
  },
  begin: {
    left: 315,
    color: "#37d71d",
    fontSize: FontSize.size_base,
    top: 455,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
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
    left: "4.99%",
    top: "32.2%",
    right: "92.2%",
    bottom: "31.66%",
    width: "2.81%",
    height: "36.14%",
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
    right: "-5.12%",
    bottom: "93.67%",
    left: "-2.09%",
  },
  text: {
    top: 11,
    left: 386,
  },
  quizV32: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV321;
