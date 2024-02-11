import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

const Practice = ({ practice, setPractice }) => {
  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.base}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={32}
          color={"#afafaf97"}
          onPress={() => setPractice(null)}
        />
        <Text style={styles.title}>{practice.name}</Text>
      </View>
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
