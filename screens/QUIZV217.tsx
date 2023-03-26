import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QUIZV217 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV21}>
      <Text style={styles.goInVerb}>GO IN VERB 2</Text>
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
      <Pressable
        style={[styles.wrapper, styles.quizLayout]}
        onPress={() => navigation.navigate("QUIZV21")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.went, styles.wentPosition]}
        onPress={() => navigation.navigate("QUIZV211")}
      >
        <Text style={[styles.went1, styles.goalTypo]}>WENT</Text>
      </Pressable>
      <Pressable
        style={[styles.gone, styles.wentPosition]}
        onPress={() => navigation.navigate("QUIZV216")}
      >
        <Text style={styles.goalTypo}>GONE</Text>
      </Pressable>
      <Text style={[styles.goal, styles.goalTypo, styles.wentPosition]}>
        GOAL
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.iconLayout,
          ]}
        />
        <Pressable
          style={styles.quiz}
          onPress={() => navigation.navigate("ABOUTVERB")}
        >
          <Text style={[styles.quiz1, styles.textTypo]}>{`Quiz  `}</Text>
        </Pressable>
        <Text style={[styles.text, styles.textTypo]}>1/2</Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
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
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wentPosition: {
    top: 461,
    position: "absolute",
  },
  goalTypo: {
    color: Color.orange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
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
  goInVerb: {
    top: 350,
    left: 153,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  quizV21Child: {
    left: 47,
    borderRadius: Border.br_11xl,
  },
  quizV21Item: {
    left: 168,
    borderRadius: Border.br_11xl,
  },
  icon: {
    borderRadius: Border.br_11xl,
  },
  wrapper: {
    left: 292,
  },
  went1: {
    width: 52,
    height: 24,
  },
  went: {
    left: 72,
  },
  gone: {
    left: 193,
  },
  goal: {
    left: 322,
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
  text: {
    top: 13,
    left: 395,
    color: Color.black,
    position: "absolute",
  },
  rectangleParent: {
    height: "6.33%",
    width: "107.21%",
    right: "-3.49%",
    bottom: "93.67%",
    left: "-3.72%",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.88%",
    top: "2.15%",
    right: "92.09%",
    bottom: "95.6%",
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

export default QUIZV217;
