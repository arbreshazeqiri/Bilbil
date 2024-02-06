import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Draggable = ({ text, isDropped, onDrop }) => {
  const handlePress = () => {
    onDrop(text);
  };

  return (
    <TouchableOpacity onPress={() => !isDropped & handlePress()}>
      <View style={isDropped ? styles.dropped : styles.draggable}>
        <Text
          style={isDropped ? { color: "transparent" } : styles.draggableText}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  draggable: {
    backgroundColor: "#212832",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 12,
    borderColor: "#2E3845",
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 5,
  },
  dropped: {
    backgroundColor: "#a8a8a8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingTop: 12,
    paddingBottom: 13,
    paddingHorizontal: 13
  },
  draggableText: {
    color: "white",
    fontFamily: "baloo-semibold",
  },
});

export default Draggable;
