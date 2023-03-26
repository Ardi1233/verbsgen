import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Splash1 = () => {
  return (
    <View style={styles.splash}>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.veIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-72.png")}
        />
        <Image
          style={[styles.veIcon, styles.veIconLayout]}
          resizeMode="cover"
          source={require("../assets/ve2.png")}
        />
        <Text style={[styles.ve, styles.veTypo, styles.veTypo1]}>VE</Text>
        <Text style={[styles.ve, styles.veTypo, styles.veTypo1]}>VE</Text>
        <Text style={[styles.rb, styles.veTypo, styles.veTypo1]}>RB</Text>
        <Text style={[styles.verbGenerator, styles.veTypo]}>
          VERB Generator
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  veIconLayout: {
    height: 69,
    width: 119,
    left: 55,
    position: "absolute",
  },
  veTypo: {
    textAlign: "left",
    color: Color.orange,
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  veTypo1: {
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.orange,
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
    left: 48,
  },
  rb: {
    top: 40,
    left: 126,
  },
  verbGenerator: {
    top: 123,
    left: 0,
    fontSize: FontSize.size_13xl,
  },
  vectorParent: {
    top: 378,
    left: 96,
    width: 237,
    height: 175,
    position: "absolute",
  },
  splash: {
    backgroundColor: Color.gray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Splash1;
