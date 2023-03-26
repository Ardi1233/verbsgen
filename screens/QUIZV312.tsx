import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const QUIZV312 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV31}>
      <Text style={[styles.freezeInVerb, styles.nextTypo]}>
        FREEZE IN VERB 3
      </Text>
      <View style={[styles.quizV31Child, styles.quizChildLayout1]} />
      <View style={[styles.quizV31Child, styles.quizChildLayout1]} />
      <View style={[styles.quizV31Child, styles.quizChildLayout1]} />
      <View style={[styles.quizV31Child, styles.quizChildLayout1]} />
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
      <View style={[styles.quizV31Child1, styles.quizChildLayout1]} />
      <View style={[styles.quizV31Child1, styles.quizChildLayout1]} />
      <View style={[styles.quizV31Child1, styles.quizChildLayout1]} />
      <Pressable
        style={[styles.quizV31Child1, styles.quizChildLayout1]}
        onPress={() => navigation.navigate("QUIZV322")}
      />
      <Text style={[styles.next, styles.nextClr, styles.nextTypo]}>Next</Text>
      <Image
        style={[styles.rectangleIcon, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV31Child4, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV31Child5, styles.quizChildLayout]}
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
  quizChildLayout1: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  nextClr: {
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
  freezeInVerb: {
    top: 347,
    left: 136,
    color: Color.white,
    position: "absolute",
  },
  quizV31Child: {
    top: 647,
    left: 27,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  youPickThe: {
    top: 708,
    left: 94,
    color: Color.gray_100,
    position: "absolute",
  },
  quizV31Child1: {
    top: 795,
    left: 148,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  next: {
    top: 810,
    left: 191,
  },
  rectangleIcon: {
    left: 43,
  },
  quizV31Child4: {
    left: 164,
  },
  quizV31Child5: {
    left: 288,
  },
  forget: {
    top: 455,
    left: 58,
    width: 64,
    height: 24,
  },
  fly: {
    top: 454,
    left: 197,
  },
  frozen: {
    top: 453,
    left: 305,
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
    left: "4.12%",
    top: "32.2%",
    right: "93.07%",
    bottom: "31.66%",
    width: "2.81%",
    height: "36.14%",
    position: "absolute",
  },
  rectangleParent: {
    height: "6.33%",
    width: "107.21%",
    right: "-6.05%",
    bottom: "93.67%",
    left: "-1.16%",
  },
  text: {
    top: 11,
    left: 381,
  },
  quizV31: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV312;
