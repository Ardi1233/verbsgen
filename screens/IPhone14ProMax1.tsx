import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const IPhone14ProMax1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone14ProMax1}>
      <Image
        style={styles.fD8565559572141bb8769Ff43Icon}
        resizeMode="cover"
        source={require("../assets/7161122fd8565559572141bb8769ff435aea3b8b-1.png")}
      />
      <Pressable
        style={styles.iphone14ProMax1Child}
        onPress={() => navigation.navigate("Splash1")}
      />
      <Image
        style={styles.iphone14ProMax1Item}
        resizeMode="cover"
        source={require("../assets/vector-10.png")}
      />
      <Image
        style={styles.veIcon}
        resizeMode="cover"
        source={require("../assets/ve3.png")}
      />
      <Text style={styles.verbGenerator}>Verb Generator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fD8565559572141bb8769Ff43Icon: {
    top: 0,
    left: 0,
    width: 430,
    height: 933,
    position: "absolute",
  },
  iphone14ProMax1Child: {
    top: 411,
    left: 233,
    borderRadius: 20,
    backgroundColor: Color.gray_100,
    width: 70,
    height: 68,
    position: "absolute",
  },
  iphone14ProMax1Item: {
    top: 422,
    left: 252,
    width: 37,
    height: 23,
    position: "absolute",
  },
  veIcon: {
    top: 436,
    left: 248,
    width: 41,
    height: 26,
    position: "absolute",
  },
  verbGenerator: {
    top: 484,
    left: 231,
    fontSize: 10,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  iphone14ProMax1: {
    borderRadius: 56,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone14ProMax1;
