import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.homeInner, styles.homeInnerLayout]}>
        <View style={[styles.groupChild, styles.homeInnerLayout]} />
      </View>
      <View style={[styles.homeChild, styles.homeLayout, styles.homeLayout1]} />
      <View style={[styles.homeItem, styles.homeLayout, styles.homeLayout1]} />
      <View style={[styles.rectangleView, styles.homeLayout]} />
      <Pressable
        style={styles.aboutVerb123Container}
        onPress={() => navigation.navigate("ABOUTVERB")}
      >
        <Text style={[styles.aboutVerb123, styles.word1Typo]}>
          About verb 1/2/3
        </Text>
      </Pressable>
      <View style={[styles.lineView, styles.homeChildBorder]} />
      <View style={[styles.homeChild1, styles.homeChildLayout]} />
      <View style={[styles.homeChild2, styles.homeChildBorder]} />
      <View style={[styles.homeChild3, styles.homeChildLayout]} />
      <Pressable
        style={styles.word}
        onPress={() => navigation.navigate("VERBCONVERT")}
      >
        <Text style={[styles.word1, styles.word1Typo]}>WORD?</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.veIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ve.png")}
      />
      <Pressable
        style={styles.wannaTryYourContainer}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
      >
        <Text style={styles.wannaTryYourVerbSkill}>
          Wanna try your verb skill?
        </Text>
      </Pressable>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-10.png")}
      />
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={[styles.ve, styles.veTypo]}>VE</Text>
      <Text style={[styles.rb, styles.veTypo]}>RB</Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <View style={[styles.homeChild4, styles.homeChildBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeInnerLayout: {
    height: 75,
    width: 433,
    top: 0,
    position: "absolute",
  },
  homeLayout: {
    height: 35,
    position: "absolute",
  },
  homeLayout1: {
    borderRadius: Border.br_mini,
    height: 35,
  },
  word1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    fontSize: FontSize.size_lgi,
  },
  homeChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  homeChildLayout: {
    height: 36,
    width: 1,
    borderRightWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    top: 448,
    position: "absolute",
  },
  iconLayout: {
    height: 69,
    width: 119,
    position: "absolute",
  },
  veTypo: {
    fontSize: FontSize.size_21xl,
    color: Color.orange,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
  },
  homeInner: {
    left: -3,
  },
  homeChild: {
    top: 447,
    left: 100,
    width: 180,
    backgroundColor: Color.white,
  },
  homeItem: {
    left: 289,
    backgroundColor: Color.orange,
    width: 53,
    top: 448,
  },
  rectangleView: {
    top: 651,
    left: 111,
    borderRadius: Border.br_131xl,
    width: 185,
    backgroundColor: Color.white,
  },
  aboutVerb123: {
    color: Color.steelblue,
  },
  aboutVerb123Container: {
    left: 132,
    top: 655,
    position: "absolute",
  },
  lineView: {
    width: 217,
    left: 96,
    top: 448,
  },
  homeChild1: {
    left: 96,
  },
  homeChild2: {
    top: 483,
    width: 216,
    left: 96,
  },
  homeChild3: {
    left: 311,
  },
  word1: {
    color: "rgba(15, 15, 15, 0.46)",
    width: 77,
    height: 22,
  },
  word: {
    left: 161,
    top: 454,
    position: "absolute",
  },
  vectorIcon: {
    top: 317,
    left: 152,
  },
  veIcon: {
    top: 347,
    left: 153,
  },
  wannaTryYourVerbSkill: {
    color: Color.white,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  wannaTryYourContainer: {
    left: 83,
    top: 861,
    position: "absolute",
  },
  groupIcon: {
    top: 21,
    left: 43,
    width: 41,
    height: 43,
    position: "absolute",
  },
  welcome: {
    top: 31,
    fontFamily: FontFamily.playBold,
    color: Color.orange,
    fontSize: FontSize.size_xl,
    left: 96,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  ve: {
    top: 311,
    left: 151,
  },
  rb: {
    top: 374,
    left: 223,
  },
  rectangleIcon: {
    top: 451,
    left: 302,
    width: 28,
    height: 30,
    position: "absolute",
  },
  homeChild4: {
    top: 890,
    left: 79,
    width: 259,
  },
  home: {
    backgroundColor: Color.steelblue,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Home;
