import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const QUIZV311 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV31}>
      <View style={[styles.quizV31Child, styles.quizLayout1]} />
      <Pressable
        style={[styles.quizV31Item, styles.quizLayout1]}
        onPress={() => navigation.navigate("QUIZV322")}
      />
      <Text style={[styles.next, styles.nextTypo, styles.nextTypo1]}>Next</Text>
      <Text style={[styles.freezeInVerb, styles.nextTypo, styles.nextTypo1]}>
        FREEZE IN VERB 3
      </Text>
      <Text
        style={[styles.oopsFlyIs, styles.nextTypo]}
      >{`                                      OOPS!
Fly is not a form of verb 1/2/3 of Freeze and have the different meaning from Freeze. so its absolutely the wrong choice
`}</Text>
      <Image
        style={[styles.quizV31Inner, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV31Child1, styles.quizLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.forget, styles.flyTypo]}>FORGET</Text>
      <Text style={[styles.fly, styles.flyTypo]}>FLY</Text>
      <Text style={[styles.frozen, styles.flyTypo]}>FROZEN</Text>
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
      </View>
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
  flyTypo: {
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
  quizV31Child: {
    top: 649,
    left: 31,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  quizV31Item: {
    top: 803,
    left: 154,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  next: {
    top: 818,
    left: 197,
    color: Color.black,
  },
  freezeInVerb: {
    top: 347,
    left: 136,
    color: Color.white,
  },
  oopsFlyIs: {
    top: 673,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    width: 331,
    left: 57,
  },
  quizV31Inner: {
    left: 42,
  },
  rectangleIcon: {
    left: 163,
  },
  quizV31Child1: {
    left: 287,
  },
  forget: {
    top: 455,
    width: 64,
    height: 24,
    left: 57,
  },
  fly: {
    top: 454,
    left: 196,
  },
  frozen: {
    top: 453,
    left: 304,
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
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.77%",
    top: "32.2%",
    right: "92.42%",
    bottom: "31.66%",
    width: "2.81%",
    height: "36.14%",
    position: "absolute",
  },
  rectangleParent: {
    height: "6.33%",
    width: "107.21%",
    right: "-6.28%",
    bottom: "93.67%",
    left: "-0.93%",
  },
  text: {
    top: 11,
    left: 383,
    color: Color.black,
    position: "absolute",
  },
  quizV31: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV311;
