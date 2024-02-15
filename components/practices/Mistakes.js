import React from "react";
import { View, StyleSheet } from "react-native";

const Mistakes = ({ active, setActive }) => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 30,
  },
});

export default Mistakes;
