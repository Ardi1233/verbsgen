import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VERBCONVERT = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.verbConvert, styles.iconLayout]}>
      <Image
        style={styles.verbConvertChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.chevronLeft} />
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
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
      </View>
      <Text style={[styles.verb1, styles.verbTypo]}>Verb 1</Text>
      <Text style={[styles.verb2, styles.verbTypo]}>Verb 2</Text>
      <Text style={[styles.verb3, styles.verbTypo]}>Verb 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 158,
    left: 70,
    width: 300,
    position: "absolute",
  },
  verbTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  verbConvertChild: {
    top: 21,
    left: 20,
    width: 63,
    height: 61,
    position: "absolute",
  },
  chevronLeft: {
    top: 69,
    left: 360,
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "10.47%",
    top: "4.4%",
    right: "86.51%",
    bottom: "93.35%",
    width: "3.02%",
    height: "2.25%",
    position: "absolute",
  },
  groupChild: {
    top: 28,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    height: 130,
    width: 300,
    position: "absolute",
  },
  groupItem: {
    top: 0,
    left: 85,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.orange,
    width: 130,
    height: 55,
    position: "absolute",
  },
  rectangleParent: {
    top: 151,
  },
  rectangleGroup: {
    top: 369,
  },
  rectangleContainer: {
    top: 588,
  },
  verb1: {
    top: "17.92%",
    left: "44.42%",
  },
  verb2: {
    top: "41.31%",
    left: "44.19%",
  },
  verb3: {
    top: "64.81%",
    left: "44.65%",
  },
  verbConvert: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default VERBCONVERT;
