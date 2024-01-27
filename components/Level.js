import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

const Level = ({ level, setLevel }) => {
  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={32}
          color={"#2E3845"}
          onPress={() => setLevel(null)}
        />
        <Text style={styles.title}>{level.chapter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  header: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderColor: "#2E3845",
  },
  title: {
    alignSelf: "center",
    alignContent: "center",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "baloo",
    color: "#2E3845",
  },
});

export default Level;
