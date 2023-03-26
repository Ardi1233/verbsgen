import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const QUIZV213 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV21}>
      <Text style={[styles.eatInVerb, styles.nextTypo]}>EAT IN VERB 2</Text>
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
      <Text style={[styles.eat, styles.eatTypo, styles.eatPosition]}>EAT</Text>
      <Text style={[styles.ate, styles.eatTypo]}>ATE</Text>
      <Text style={[styles.eaten, styles.eatTypo, styles.eatPosition]}>
        EATEN
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
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
      <View style={[styles.quizV21Child4, styles.rectangleViewLayout]} />
      <View style={[styles.quizV21Child4, styles.rectangleViewLayout]} />
      <View style={[styles.quizV21Child4, styles.rectangleViewLayout]} />
      <Pressable
        style={[styles.quizV21Child4, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
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
      <Text style={[styles.text, styles.textTypo, styles.nextClr]}>2/2</Text>
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
    top: 447,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  eatTypo: {
    color: Color.orange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  eatPosition: {
    top: 461,
    color: Color.orange,
    fontSize: FontSize.size_base,
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
  eatInVerb: {
    top: 350,
    left: 153,
    color: Color.white,
    position: "absolute",
  },
  quizV21Child: {
    left: 47,
  },
  quizV21Item: {
    left: 168,
  },
  quizV21Inner: {
    left: 292,
  },
  eat: {
    left: 78,
    width: 52,
    height: 24,
  },
  ate: {
    top: 460,
    left: 200,
  },
  eaten: {
    left: 313,
  },
  rectangleView: {
    top: 640,
    left: 27,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  youPickThe: {
    top: 701,
    left: 94,
    color: Color.gray_100,
    position: "absolute",
  },
  quizV21Child4: {
    top: 788,
    left: 148,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  next: {
    top: 803,
    left: 191,
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
    left: "45.55%",
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
  text: {
    top: 15,
    left: 379,
  },
  quizV21: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV213;
