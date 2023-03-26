import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const QUIZV21 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV21}>
      <View style={styles.quizV21Child} />
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
      <Text
        style={[
          styles.goInVerb,
          styles.nextTypo,
          styles.nextTypo1,
          styles.goInVerbPosition,
        ]}
      >
        GO IN VERB 2
      </Text>
      <Text style={[styles.went, styles.wentTypo]}>WENT</Text>
      <Text style={[styles.gone, styles.wentTypo]}>GONE</Text>
      <Text style={[styles.goal, styles.wentTypo]}>GOAL</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.goInVerbPosition]}
        onPress={() => navigation.navigate("QUIZV215")}
      />
      <Text
        style={[styles.next, styles.nextClr, styles.nextTypo, styles.nextTypo1]}
      >
        Next
      </Text>
      <Text
        style={[styles.oopsGoalIs, styles.nextTypo]}
      >{`                                      OOPS!
Goal is not a form of verb 1/2/3 of go and have the different meaning from go. so its absolutely the wrong choice`}</Text>
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
      <Text style={[styles.text, styles.textTypo, styles.nextClr]}>1/2</Text>
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
  },
  nextTypo1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
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
    top: 637,
    left: 29,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  quizV21Item: {
    left: 36,
  },
  quizV21Inner: {
    left: 165,
  },
  rectangleIcon: {
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
  rectanglePressable: {
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
  oopsGoalIs: {
    top: 671,
    left: 49,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    width: 344,
    height: 87,
    position: "absolute",
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
    left: "44.47%",
    top: "25.42%",
    position: "absolute",
  },
  rectangleParent: {
    height: "6.33%",
    width: "107.21%",
    right: "-2.33%",
    bottom: "93.67%",
    left: "-4.88%",
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
  text: {
    top: 15,
    left: 380,
  },
  quizV21: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV21;
