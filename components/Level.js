import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { units, colors, darkerColors } from "../utils/constants";
import UnitLayout from "./UnitLayout";

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
      <ScrollView contentContainerStyle={styles.course}>
        {units[level.index].map((unit, i) => (
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                ...styles.banner,
                backgroundColor: colors[i % colors.length],
              }}
              key={i}
            >
              <Text
                style={{
                  fontFamily: "baloo-semibold",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 25,
                }}
              >
                Unit {i + 1}
              </Text>
              <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
                {unit}
              </Text>
            </View>
            <UnitLayout color={colors[i % colors.length]} darkerColor={darkerColors[i % darkerColors.length]}/>
          </View>
        ))}
      </ScrollView>
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
  course: {
    flexDirection: "column",
    gap: 20,
    paddingTop: 10,
    paddingBottom: 60,
  },
  banner: {
    flexDirection: "column",
    padding: 20,
    borderRadius: 18,
    alignItems: "start",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Level;
