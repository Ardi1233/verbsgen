import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QUIZV218 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV21}>
      <Text style={styles.askedInVerb}>ASKED IN VERB 1</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("QUIZV113")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Image
        style={[styles.quizV21Child, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("QUIZV111")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Text style={[styles.ask, styles.askTypo]}>ASK</Text>
      <Pressable
        style={[styles.approved, styles.bannedPosition]}
        onPress={() => navigation.navigate("QUIZV112")}
      >
        <Text style={styles.askTypo}>APPROVED</Text>
      </Pressable>
      <Text style={[styles.banned, styles.bannedPosition, styles.askTypo]}>
        BANNED
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
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>1/2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 51,
    width: 94,
    top: 447,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  askTypo: {
    color: Color.orange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  bannedPosition: {
    top: 460,
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
  askedInVerb: {
    top: 350,
    left: 153,
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
    left: 47,
  },
  quizV21Child: {
    left: 168,
    borderRadius: Border.br_11xl,
  },
  container: {
    left: 292,
  },
  ask: {
    top: 461,
    left: 76,
    width: 52,
    height: 24,
    position: "absolute",
  },
  approved: {
    left: 176,
  },
  banned: {
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
    right: "-5.58%",
    bottom: "93.67%",
    left: "-1.63%",
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.42%",
    top: "2.04%",
    right: "92.57%",
    bottom: "95.67%",
    width: "3.01%",
    height: "2.29%",
    position: "absolute",
  },
  text: {
    top: 15,
    left: 386,
    color: Color.black,
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

export default QUIZV218;
