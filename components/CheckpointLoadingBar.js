import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colorsObj } from "../utils/constants";

const LoadingBar = ({
  steps = 10,
  progress = 0,
  color = colorsObj.green,
  checkpointNumber = 3,
  checkpointValues = [],
}) => {
  const barWidth = (progress == 0
    ? "0%"
    : progress >= steps
    ? "100%"
    : `${((progress - 1) / steps) * 100}%`);

  const renderCheckpoints = () => {
    const checkpoints = [];
    const checkpointPositions = [20, 50, 90];

    for (let i = 0; i < checkpointNumber; i++) {
      const checkpointPosition = checkpointPositions[i];

      const isReached = progress > steps * (checkpointPosition / 100) + 1;

      const checkpointBackgroundColor = isReached ? color : "#3c3c3c";

      checkpoints.push(
        <View
          key={i}
          style={[
            styles.checkpoint,
            {
              left: `${checkpointPosition}%`,
              backgroundColor: checkpointBackgroundColor,
            },
          ]}
        >
          <Text style={styles.checkpointText}>{checkpointValues[i]}</Text>
        </View>
      );
    }
    return checkpoints;
  };

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
      position: "relative",
    },
    bar: {
      height: "100%",
      backgroundColor: color,
      borderRadius: 10,
    },
    checkpoint: {
      position: "absolute",
      top: -5,
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: "#3c3c3c",
      justifyContent: "center",
      alignItems: "center",
    },
    checkpointText: {
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: barWidth }]} />
        {checkpointNumber > 0 &&
          checkpointValues.length === checkpointNumber &&
          renderCheckpoints()}
      </View>
    </View>
  );
};

export default LoadingBar;
