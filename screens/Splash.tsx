import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.veIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-71.png")}
        />
        <Image
          style={[styles.veIcon, styles.veIconLayout]}
          resizeMode="cover"
          source={require("../assets/ve1.png")}
        />
        <Text style={[styles.ve, styles.veTypo, styles.veTypo1]}>VE</Text>
        <Text style={[styles.rb, styles.veTypo, styles.veTypo1]}>RB</Text>
      </View>
      <Text style={[styles.verbGenerator, styles.veTypo]}>VERB Generator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  veIconLayout: {
    height: 69,
    width: 119,
    left: 7,
    position: "absolute",
  },
  veTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  veTypo1: {
    color: Color.gray_100,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  groupChild: {
    top: -3,
  },
  veIcon: {
    top: 27,
  },
  ve: {
    top: 1,
    left: 0,
  },
  rb: {
    top: 40,
    left: 78,
  },
  vectorParent: {
    top: 414,
    left: 141,
    width: 127,
    height: 105,
    position: "absolute",
  },
  verbGenerator: {
    top: 537,
    left: 93,
    fontSize: FontSize.size_13xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  splash: {
    backgroundColor: Color.orange,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Splash;
