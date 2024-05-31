import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";
import Lesson from "./Lesson";
import userStore from "../store/UserStore";

const UnitLayout = ({
  chapter,
  unit,
  isParentDisabled,
  color,
  darkerColor,
}) => {
  const user = userStore.user;
  const [lesson, setLesson] = useState(null);
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
      {lesson !== null && (
        <CustomModal
          visible={lesson === null ? false : true}
          transparent={true}
          dismiss={() => setLesson(null)}
        >
          <Lesson chapter={chapter} unit={unit} lesson={lesson} />
        </CustomModal>
      )}
      {rows.map((row, i) => {
        const isDisabled = isParentDisabled || user?.progress?.lesson < i;
        return (
          <View key={i} style={styles.row}>
            {row.map((box, boxIndex) => (
              <View key={boxIndex} style={styles.box}>
                <CustomButton
                  key={boxIndex}
                  icon={box ? true : false}
                  iconName={box ? "play" : ""}
                  title=""
                  iconSize={50}
                  color={
                    box ? (isDisabled ? "#3c3c3c" : "white") : "transparent"
                  }
                  bgColor={box ? (isDisabled ? "gray" : color) : "transparent"}
                  borderColor={
                    box ? (isDisabled ? "gray" : darkerColor) : "transparent"
                  }
                  borderRadius={50}
                  isDisabled={!box}
                  onPress={() => {
                    if (!isDisabled) setLesson(i);
                  }}
                />
              </View>
            ))}
          </View>
        );
      })}
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
