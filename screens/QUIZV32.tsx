import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const QUIZV32 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV32}>
      <View style={styles.quizV32Child} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-19.png")}
        />
      </Pressable>
      <Text style={[styles.finish, styles.finishTypo, styles.finishTypo1]}>
        Finish
      </Text>
      <Text style={[styles.beginInVerb, styles.finishTypo, styles.finishTypo1]}>
        BEGIN IN VERB 3
      </Text>
      <Text
        style={[styles.oopsBeganIs, styles.finishTypo]}
      >{`                                      OOPS!
Began is a form of verb 2 of Begin. V2 is the past-tense form. To create a past-tense verb, you usually add –ed or –d to the base form. the correct answer is Begun`}</Text>
      <Image
        style={[styles.quizV32Item, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV32Inner, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.begun, styles.begunTypo]}>BEGUN</Text>
      <Text style={[styles.began, styles.begunTypo]}>BEGAN</Text>
      <Text style={[styles.begin, styles.begunTypo]}>BEGIN</Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.iconLayout,
          ]}
        />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
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
      <Text style={[styles.text, styles.textTypo]}>2/2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  finishTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  finishTypo1: {
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
  textTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  quizV32Child: {
    top: 654,
    left: 27,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_11xl,
  },
  wrapper: {
    left: 150,
    top: 812,
    width: 130,
    height: 63,
    position: "absolute",
  },
  finish: {
    top: 826,
    left: 184,
    color: Color.black,
  },
  beginInVerb: {
    top: 347,
    left: 136,
    color: Color.white,
  },
  oopsBeganIs: {
    top: 674,
    left: 51,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    width: 331,
  },
  quizV32Item: {
    left: 43,
  },
  quizV32Inner: {
    left: 164,
  },
  rectangleIcon: {
    left: 288,
  },
  begun: {
    left: 64,
    width: 64,
    height: 24,
  },
  began: {
    left: 185,
  },
  begin: {
    left: 311,
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "6.07%",
    top: "32.2%",
    right: "91.12%",
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
    right: "-4.42%",
    bottom: "93.67%",
    left: "-2.79%",
  },
  text: {
    top: 11,
    left: 382,
    color: Color.black,
    position: "absolute",
  },
  quizV32: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV32;
