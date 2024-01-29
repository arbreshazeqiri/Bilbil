import React from "react";
import { View, StyleSheet } from "react-native";

const ThoughtBubble = ({ children, height = 100, gap = 30, pH = 30, justify = 'space-around' }) => {
  const styles = StyleSheet.create({
    thoughtBubble: {
      flex: 1,
      paddingHorizontal: pH,
      gap: gap,
      height: height,
      flexDirection: "row",
      justifyContent: justify,
      alignContent: "center",
      backgroundColor: "#212832",
      borderColor: "#AFAFAF",
      borderWidth: 1,
      borderRadius: 20,
    },
    triangle: {
      width: 0,
      height: 0,
      marginTop: 35,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 0,
      borderRightWidth: 13,
      borderBottomWidth: 26,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "#ababab",
      transform: [{ rotate: "-90deg" }],
    },
    triangleTwo: {
      width: 0,
      height: 0,
      marginTop: 41,
      position: "relative",
      marginLeft: -10,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 0,
      borderRightWidth: 10,
      borderBottomWidth: 16,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      zIndex: 9,
      borderBottomColor: "#212832",
      transform: [{ rotate: "-90deg" }],
    },
  });

  return (
    <>
      <View style={styles.triangle} />
      <View style={styles.triangleTwo} />
      <View style={styles.thoughtBubble}>{children}</View>
    </>
  );
};

export default ThoughtBubble;
