import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import { useFonts } from "expo-font";

const LegendItem = ({
  value,
  description,
  src,
  bgColor,
  borderColor,
  hasTopBorder,
}) => {
  const [isLoaded] = useFonts({
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    appContainer: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: bgColor,
      borderRadius: 15,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderColor: borderColor,
      borderWidth: 1,
      borderTopWidth: hasTopBorder ? 2 : 0,
      borderBottomWidth: 5,
      gap: 4,
    },
    text: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      gap: 10,
    },
    appValue: {
      fontSize: 40,
      color: "white",
      fontWeight: "bold",
      alignSelf: "center",
    },
    appDescription: {
      color: "#DAE5EB",
      fontSize: 14,
      marginVertical: 2,
    },
  });

  return (
    <View style={styles.appContainer}>
      <View style={styles.text}>
        <Image source={src} style={{ width: 50, height: 50 }} />
        <Text style={styles.appValue}>{value}</Text>
      </View>
      <Text style={styles.appDescription}>{description}</Text>
    </View>
  );
};

export default LegendItem;
