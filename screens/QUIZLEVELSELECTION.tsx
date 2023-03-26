import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const QUIZLEVELSELECTION = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizLevelSelection}>
      <View
        style={[
          styles.quizLevelSelectionChild,
          styles.groupChildLayout,
          styles.childLayout,
        ]}
      />
      <Pressable
        style={[
          styles.quizLevelSelectionChild,
          styles.groupChildLayout,
          styles.childLayout,
        ]}
        onPress={() => navigation.navigate("QUIZV313")}
      />
      <Text
        style={[
          styles.verb3,
          styles.verbTypo,
          styles.verbTypo1,
          styles.verbTypo2,
        ]}
      >
        VERB 3
      </Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("QUIZV217")}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childLayout,
          ]}
        />
        <Text
          style={[
            styles.verb1,
            styles.verbTypo,
            styles.verbTypo1,
            styles.verbTypo2,
          ]}
        >
          VERB 1
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupChildLayout]}
        onPress={() => navigation.navigate("QUIZV217")}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childLayout,
          ]}
        />
        <Text
          style={[
            styles.verb2,
            styles.verbTypo,
            styles.verbTypo1,
            styles.verbTypo2,
          ]}
        >
          VERB 2
        </Text>
      </Pressable>
      <Image
        style={[styles.quizLevelSelectionInner, styles.veIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.veIcon, styles.veIconLayout]}
        resizeMode="cover"
        source={require("../assets/ve.png")}
      />
      <Text style={[styles.whichVerbDo, styles.verbTypo]}>
        which verb do u want to test?
      </Text>
      <Text style={[styles.ve, styles.veTypo]}>VE</Text>
      <Text style={[styles.rb, styles.veTypo]}>RB</Text>
      <View style={styles.groupView}>
        <View style={styles.groupInner} />
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.quiz}
        onPress={() => navigation.navigate("ABOUTVERB")}
      >
        <Text style={[styles.quiz1, styles.verbTypo, styles.verbTypo1]}>
          Quiz
        </Text>
      </Pressable>
      <Pressable
        style={styles.quiz}
        onPress={() => navigation.navigate("ABOUTVERB")}
      >
        <Text style={[styles.quiz1, styles.verbTypo, styles.verbTypo1]}>
          Quiz
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 35,
    width: 185,
    position: "absolute",
  },
  childLayout: {
    backgroundColor: Color.white,
    borderRadius: Border.br_131xl,
    height: 35,
  },
  verbTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  verbTypo1: {
    color: Color.steelblue,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  verbTypo2: {
    fontSize: FontSize.size_lgi,
    color: Color.steelblue,
    position: "absolute",
  },
  veIconLayout: {
    height: 69,
    width: 119,
    position: "absolute",
  },
  veTypo: {
    color: Color.orange,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  quizLevelSelectionChild: {
    top: 696,
    left: 122,
  },
  verb3: {
    top: 700,
    left: 184,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  verb1: {
    top: 5,
    left: 61,
  },
  rectangleParent: {
    top: 474,
    height: 36,
    width: 185,
    left: 122,
    position: "absolute",
  },
  verb2: {
    top: 4,
    left: 62,
  },
  rectangleGroup: {
    top: 585,
    left: 122,
  },
  quizLevelSelectionInner: {
    top: 137,
    left: 152,
  },
  veIcon: {
    top: 167,
    left: 153,
  },
  whichVerbDo: {
    top: 300,
    left: 77,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  ve: {
    top: 131,
    left: 151,
  },
  rb: {
    top: 194,
    left: 223,
  },
  groupInner: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.orange,
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupView: {
    height: "6.33%",
    width: "107.21%",
    right: "-7.21%",
    bottom: "93.67%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    display: "none",
  },
  vector: {
    left: "7.44%",
    top: "3.54%",
    right: "89.55%",
    bottom: "94.17%",
    width: "3.01%",
    height: "2.29%",
    position: "absolute",
  },
  vector1: {
    left: "4.65%",
    top: "2.04%",
    right: "92.33%",
    bottom: "95.71%",
    width: "3.02%",
    height: "2.25%",
    position: "absolute",
  },
  quiz1: {
    height: "4.4%",
    width: "12.09%",
    fontSize: FontSize.size_6xl,
  },
  quiz: {
    left: "43.95%",
    top: "1.61%",
    position: "absolute",
  },
  quizLevelSelection: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZLEVELSELECTION;
