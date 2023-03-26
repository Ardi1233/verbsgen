import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ABOUTVERB = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aboutVerb, styles.iconLayout]}>
      <View style={styles.aboutVerbInner}>
        <View style={styles.groupChild} />
      </View>
      <View style={[styles.aboutVerbChild, styles.aboutLayout]} />
      <View style={[styles.aboutVerbItem, styles.aboutLayout]} />
      <View style={[styles.rectangleView, styles.aboutLayout]} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <View
        style={[
          styles.groupView,
          styles.groupInnerLayout,
          styles.aboutInnerPosition,
        ]}
      >
        <View style={[styles.groupItem, styles.groupInnerLayout]} />
      </View>
      <View
        style={[
          styles.aboutVerbInner1,
          styles.groupInnerLayout,
          styles.aboutInnerPosition,
        ]}
      >
        <View style={[styles.groupItem, styles.groupInnerLayout]} />
      </View>
      <View
        style={[
          styles.aboutVerbInner2,
          styles.groupInnerLayout,
          styles.aboutInnerPosition,
        ]}
      >
        <View style={[styles.groupItem, styles.groupInnerLayout]} />
      </View>
      <Text style={[styles.verb1, styles.verbTypo, styles.verbTypo1]}>
        Verb 1
      </Text>
      <Text style={[styles.verb2, styles.verbTypo, styles.verbTypo1]}>
        Verb 2
      </Text>
      <Text style={[styles.verb3, styles.verbTypo, styles.verbTypo1]}>
        Verb 3
      </Text>
      <Text
        style={[styles.usedToExpress, styles.usedTypo]}
      >{`Used to express events that 
occur regularly or continuously.`}</Text>
      <Text
        style={[styles.usedToExpress1, styles.usedTypo]}
      >{`Used to express events that 
happened in the past.`}</Text>
      <Text
        style={[styles.itIsUsed, styles.usedTypo]}
      >{`It is used to express events that 
happened in the past and are 
still having an effect today.`}</Text>
      <Pressable
        style={styles.about}
        onPress={() => navigation.navigate("ABOUTVERB")}
      >
        <Text style={[styles.about1, styles.verbTypo]}>About</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  aboutLayout: {
    height: 146,
    width: 317,
    borderRadius: Border.br_3xs,
    left: 47,
    backgroundColor: Color.white,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 48,
    width: 317,
    position: "absolute",
  },
  aboutInnerPosition: {
    left: 47,
    height: 48,
  },
  verbTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  verbTypo1: {
    color: Color.white,
    fontSize: FontSize.size_xl,
    left: "41.16%",
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  usedTypo: {
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: "14.88%",
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    height: 59,
    width: 461,
    position: "absolute",
  },
  aboutVerbInner: {
    top: -1,
    left: -6,
    height: 59,
    width: 461,
    position: "absolute",
  },
  aboutVerbChild: {
    top: 179,
  },
  aboutVerbItem: {
    top: 409,
  },
  rectangleView: {
    top: 639,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "3.26%",
    top: "2.04%",
    right: "93.73%",
    bottom: "95.67%",
    width: "3.01%",
    height: "2.29%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.orange,
    height: 48,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  groupView: {
    top: 146,
  },
  aboutVerbInner1: {
    top: 376,
  },
  aboutVerbInner2: {
    top: 606,
  },
  verb1: {
    top: "17.06%",
  },
  verb2: {
    top: "41.74%",
  },
  verb3: {
    top: "66.42%",
  },
  usedToExpress: {
    width: "74.88%",
    top: "22%",
  },
  usedToExpress1: {
    top: "46.89%",
  },
  itIsUsed: {
    top: "72.85%",
  },
  about1: {
    fontSize: FontSize.size_6xl,
    color: Color.steelblue,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  about: {
    left: 177,
    top: 21,
    position: "absolute",
  },
  aboutVerb: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
  },
});

export default ABOUTVERB;
