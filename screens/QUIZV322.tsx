import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QUIZV322 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV32}>
      <Text style={styles.beginInVerb}>BEGIN IN VERB 3</Text>
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV321")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV32")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV321")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
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
            style={[styles.icon3, styles.iconLayout]}
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
  frameLayout: {
    height: 51,
    width: 94,
    top: 440,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  beginInVerb: {
    top: 354,
    left: 146,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_11xl,
  },
  wrapper: {
    left: 45,
  },
  container: {
    left: 166,
  },
  frame: {
    left: 290,
  },
  begun: {
    left: 66,
    width: 64,
    height: 24,
  },
  began: {
    left: 187,
  },
  begin: {
    left: 313,
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
  },
  icon3: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "5.42%",
    top: "32.2%",
    right: "91.77%",
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
    right: "-5.81%",
    bottom: "93.67%",
    left: "-1.4%",
  },
  text: {
    top: 11,
    left: 384,
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

export default QUIZV322;
