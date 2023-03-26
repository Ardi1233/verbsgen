import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const QUIZV122 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV12}>
      <Text style={[styles.cutInVerb, styles.finishTypo]}>CUT IN VERB 1</Text>
      <View style={[styles.quizV12Child, styles.quizLayout]} />
      <View style={[styles.quizV12Child, styles.quizLayout]} />
      <Text style={[styles.youPickThe, styles.finishTypo]}>
        You pick the right choice!
      </Text>
      <Text style={[styles.youPickThe, styles.finishTypo]}>
        You pick the right choice!
      </Text>
      <View style={[styles.quizV12Inner, styles.quizLayout]} />
      <Pressable
        style={[styles.quizV12Inner, styles.quizLayout]}
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
        style={[styles.rectangleIcon, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child2, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child2, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child4, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child4, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.cat, styles.catTypo, styles.catPosition]}>CAT</Text>
      <Text style={[styles.coat, styles.catTypo, styles.catPosition]}>
        COAT
      </Text>
      <Text style={[styles.coat, styles.catTypo, styles.catPosition]}>
        COAT
      </Text>
      <Text style={[styles.cut, styles.catTypo]}>CUT</Text>
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
    top: 415,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  catTypo: {
    color: Color.orange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  catPosition: {
    top: 429,
    fontSize: FontSize.size_base,
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
  cutInVerb: {
    top: 328,
    left: 130,
    color: Color.white,
    position: "absolute",
  },
  quizV12Child: {
    top: 643,
    left: 29,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  youPickThe: {
    top: 704,
    left: 96,
    color: Color.gray_100,
    position: "absolute",
  },
  quizV12Inner: {
    top: 791,
    left: 150,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  finish: {
    top: 806,
    left: 193,
  },
  rectangleIcon: {
    left: 47,
  },
  quizV12Child2: {
    left: 168,
  },
  quizV12Child4: {
    left: 292,
  },
  cat: {
    left: 76,
    width: 52,
    height: 24,
  },
  coat: {
    left: 194,
  },
  cut: {
    top: 428,
    left: 307,
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
  rectangleParent: {
    height: "6.33%",
    width: "107.21%",
    right: "-5.35%",
    bottom: "93.67%",
    left: "-1.86%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.88%",
    top: "2.04%",
    right: "92.11%",
    bottom: "95.67%",
    width: "3.01%",
    height: "2.29%",
    position: "absolute",
  },
  text: {
    top: 15,
    left: 386,
  },
  quizV12: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV122;
