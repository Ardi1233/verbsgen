import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QUIZV215 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV21}>
      <Text style={styles.eatInVerb}>EAT IN VERB 2</Text>
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV212")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV213")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV214")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Text style={[styles.eat, styles.eatTypo, styles.eatPosition]}>EAT</Text>
      <Text style={[styles.ate, styles.eatTypo]}>ATE</Text>
      <Text style={[styles.eaten, styles.eatTypo, styles.eatPosition]}>
        EATEN
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.iconLayout]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
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
      <Text style={[styles.text, styles.textTypo]}>2/2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 51,
    width: 94,
    top: 447,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  textTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  eatInVerb: {
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
  container: {
    left: 168,
  },
  frame: {
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
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
    position: "absolute",
  },
  icon3: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "7.16%",
    top: "40%",
    right: "90.11%",
    bottom: "27.69%",
    width: "2.74%",
    height: "32.31%",
    position: "absolute",
  },
  quiz1: {
    height: "63.08%",
    width: "10.95%",
    color: Color.steelblue,
  },
  quiz: {
    left: "43.79%",
    top: "33.85%",
    position: "absolute",
  },
  rectangleParent: {
    height: "6.97%",
    width: "110.47%",
    top: "-0.64%",
    right: "-7.21%",
    bottom: "93.67%",
    left: "-3.26%",
    position: "absolute",
  },
  text: {
    top: 16,
    left: 378,
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

export default QUIZV215;
