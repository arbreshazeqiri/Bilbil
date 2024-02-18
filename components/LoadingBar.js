import React from "react";
import { View, StyleSheet } from "react-native";
import { colorsObj } from "../utils/constants";

const LoadingBar = ({ steps = 10, progress = 0, color = colorsObj.green }) => {
  const barWidth = `${(progress / steps) * 100}%`;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    barContainer: {
      width: "100%",
      height: 20,
      backgroundColor: "#3c3c3c",
      borderRadius: 10,
      overflow: "hidden",
    },
    bar: {
      height: "100%",
      backgroundColor: color,
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: barWidth }]} />
      </View>
    </View>
  );
};

export default LoadingBar;
