import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import LoadingBar from "../components/LoadingBar";
import CustomButton from "./CustomButton";
import { generateExerciseSequence } from "../utils/constants";

const Lesson = ({ startLesson, setStartLesson }) => {
  const [exerciseSequence, setExerciseSequence] = useState([]);
  const [progress, setProgress] = useState(0);
  const steps = 10;

  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const handleGenerateSequence = () => {
    const sequence = generateExerciseSequence();
    setExerciseSequence(sequence);
  };

  const handleNextStep = () => {
    if (progress < steps) {
      setProgress((prevProgress) => prevProgress + 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LoadingBar steps={steps} progress={progress} />
      </View>
      {getExercise()}
      <View style={styles.buttons}>
        <CustomButton
          icon={false}
          iconName={"person-remove"}
          title="CHECK"
          iconSize={22}
          color="#212832"
          bgColor="#93D334"
          borderColor={"#7BB836"}
          onPress={handleNextStep}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: "90%",
    alignSelf: "center",
    justifySelf: "center",
    marginTop: -15,
  },
  buttons: {
    display: "flex",
    width: "80%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
});

export default Lesson;
