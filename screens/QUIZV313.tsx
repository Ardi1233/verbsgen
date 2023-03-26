import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QUIZV313 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV31}>
      <Text style={styles.freezeInVerb}>FREEZE IN VERB 3</Text>
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV31")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV311")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("QUIZV312")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Text style={[styles.forget, styles.flyTypo]}>FORGET</Text>
      <Text style={[styles.fly, styles.flyTypo]}>FLY</Text>
      <Text style={[styles.frozen, styles.flyTypo]}>FROZEN</Text>
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
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>1/2</Text>
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
  textTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  freezeInVerb: {
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
  forget: {
    top: 455,
    left: 60,
    width: 64,
    height: 24,
  },
  fly: {
    top: 454,
    left: 199,
  },
  frozen: {
    top: 453,
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
    right: "-6.51%",
    bottom: "93.67%",
    left: "-0.7%",
  },
  icon3: {
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
    top: 11,
    left: 385,
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

export default QUIZV313;
