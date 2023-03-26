import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const QUIZV121 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizV12}>
      <View style={[styles.quizV12Child, styles.quizLayout]} />
      <Pressable
        style={[styles.quizV12Item, styles.quizLayout]}
        onPress={() => navigation.navigate("QUIZLEVELSELECTION")}
      />
      <Text style={[styles.finish, styles.finishTypo, styles.finishTypo1]}>
        Finish
      </Text>
      <Text style={[styles.cutInVerb, styles.finishTypo, styles.finishTypo1]}>
        CUT IN VERB 1
      </Text>
      <Text
        style={[styles.oopsCatIs, styles.finishTypo]}
      >{`                                      OOPS!
Cat is not a form of verb 1/2/3 of Cut and have the different meaning from asked. so its absolutely the wrong choice. the correct answer is Cut`}</Text>
      <Image
        style={[styles.quizV12Inner, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Inner, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Inner, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Inner, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child3, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child3, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child3, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child3, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child7, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child7, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child7, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={[styles.quizV12Child7, styles.quizChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.cat, styles.catTypo, styles.catPosition]}>CAT</Text>
      <Text style={[styles.coat, styles.catTypo, styles.catPosition]}>
        COAT
      </Text>
      <Text style={[styles.coat, styles.catTypo, styles.catPosition]}>
        COAT
      </Text>
      <Text style={[styles.coat, styles.catTypo, styles.catPosition]}>
        COAT
      </Text>
      <Text style={[styles.coat, styles.catTypo, styles.catPosition]}>
        COAT
      </Text>
      <Text style={[styles.cut, styles.catTypo]}>CUT</Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View
          style={[
            styles.groupChild,
            styles.iconLayout,
            styles.groupChildPosition,
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
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>2/2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quizLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  finishTypo: {
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  finishTypo1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  quizChildLayout: {
    height: 51,
    width: 94,
    top: 415,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  catTypo: {
    color: Color.orange,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
    position: "absolute",
  },
  catPosition: {
    top: 429,
    fontSize: FontSize.size_base,
  },
  groupChildPosition: {
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontFamily: FontFamily.karmaBold,
    fontWeight: "700",
  },
  quizV12Child: {
    top: 643,
    left: 25,
    backgroundColor: Color.gainsboro,
    width: 375,
    height: 241,
  },
  quizV12Item: {
    top: 797,
    left: 150,
    width: 130,
    height: 63,
    backgroundColor: Color.orange,
  },
  finish: {
    top: 812,
    color: Color.black,
    left: 189,
  },
  cutInVerb: {
    top: 334,
    left: 136,
    color: Color.white,
  },
  oopsCatIs: {
    top: 667,
    left: 45,
    fontSize: FontSize.size_mini,
    color: Color.gray_100,
    width: 336,
    height: 97,
  },
  quizV12Inner: {
    left: 42,
  },
  quizV12Child3: {
    left: 163,
  },
  quizV12Child7: {
    left: 287,
  },
  cat: {
    left: 71,
    width: 52,
    height: 24,
  },
  coat: {
    left: 189,
  },
  cut: {
    top: 428,
    left: 302,
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
    right: "-3.49%",
    bottom: "93.67%",
    left: "-3.72%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.88%",
    top: "2.04%",
    right: "92.11%",
    bottom: "95.67%",
    width: "3.01%",
    height: "2.29%",
    position: "absolute",
  },
  text: {
    top: 15,
    left: 381,
    color: Color.black,
    position: "absolute",
  },
  quizV12: {
    backgroundColor: Color.steelblue,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default QUIZV121;
