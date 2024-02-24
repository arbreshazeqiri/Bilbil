import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import * as Practices from "../components/practices";

const Practice = ({ practice, setPractice }) => {
  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const getExercise = () => {
    switch (practice.name) {
      case "Mistakes":
        return <Practices.Mistakes setPractice={(val) => setPractice(val)} />;
      case "Stories":
        return <Practices.Stories setPractice={(val) => setPractice(val)} />;
      case "Timed Word-Matching":
        return (
          <Practices.TimedMatching setPractice={(val) => setPractice(val)} />
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.base}>
      {practice.header && (
        <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            size={32}
            color={"#afafaf97"}
            onPress={() => setPractice(null)}
          />
          <Text style={styles.title}>{practice.name}</Text>
        </View>
      )}
      {getExercise()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  base: {
    height: "100%",
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderColor: "#afafaf97",
  },
  title: {
    alignSelf: "center",
    alignContent: "center",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "baloo",
    color: "#afafaf97",
  },
});

export default Practice;
