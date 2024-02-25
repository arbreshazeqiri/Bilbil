import React from "react";
import { View, StyleSheet } from "react-native";

const ThoughtBubble = ({
  children,
  height = 100,
  gap = 30,
  pH = 30,
  justify = "space-around",
  position = "right",
}) => {
  const styles = StyleSheet.create({
    thoughtBubble: {
      flex: 1,
      paddingHorizontal: pH,
      gap: gap,
      height: height,
      minHeight: 100,
      flexDirection: "row",
      justifyContent: justify,
      alignContent: "center",
      backgroundColor: "#212832",
      borderColor: "#AFAFAF",
      borderWidth: 1,
      borderRadius: 20,
      zIndex: 4,
    },
    triangle: {
      width: 0,
      height: 0,
      marginTop: 35,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: position === 'right' ? 0 : 13,
      borderRightWidth: position === 'right' ? 13 : 0,
      borderBottomWidth: 26,
      marginLeft: position === 'left' && -10,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: "#ababab",
      transform: [{ rotate: position === 'right' ? "-90deg" : "-270deg" }],
    },
    triangleTwo: {
      width: 0,
      height: 0,
      marginTop: 40.5,
      position: "relative",
      marginLeft: position === 'right' && -10,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: position === 'right' ? 0 : 10,
      borderRightWidth: position === 'right' ? 10 : 0,
      borderBottomWidth: 16,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      zIndex: 9,
      borderBottomColor: "#212832",
      transform: [{ rotate: position === 'right' ? "-90deg" : "-270deg" }],
    },
  });

  return position === "right" ? (
    <>
      <View style={styles.triangle} />
      <View style={styles.triangleTwo} />
      <View style={styles.thoughtBubble}>{children}</View>
    </>
  ) : (
    <>
      <View style={styles.thoughtBubble}>{children}</View>
      <View style={styles.triangleTwo} />
      <View style={styles.triangle} />
    </>
  );
};

export default ThoughtBubble;
