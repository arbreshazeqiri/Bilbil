import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const UnitLayout = ({ color, darkerColor }) => {
  const rows = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ];

  return (
    <View style={styles.container}>
      {rows.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((box, boxIndex) => (
            <View key={boxIndex} style={styles.box}>
              <CustomButton
                key={boxIndex}
                icon={box ? true : false}
                iconName={box ? "play" : ""}
                title=""
                iconSize={50}
                color={box ? "white" : "transparent"}
                bgColor={box ? color : "transparent"}
                borderColor={box ? darkerColor : "transparent"}
                borderRadius={50}
                isDisabled={!box}
              />
            </View>
          ))}
        </View>
      ))}
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
  row: {
    flexDirection: "row",
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default UnitLayout;
