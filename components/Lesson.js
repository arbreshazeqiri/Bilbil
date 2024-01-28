import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import LoadingBar from "../components/LoadingBar";
import CustomButton from "./CustomButton";
import { generateExerciseSequence } from "../utils/constants";
import * as Exercises from "../components/exercises";

const Lesson = ({ startLesson, setStartLesson }) => {
  const [exerciseSequence, setExerciseSequence] = useState([]);
  const [progress, setProgress] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(null);
  const steps = 10;

  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  useEffect(() => {
    if (isLoaded) {
      const sequence = generateExerciseSequence();
      setExerciseSequence(sequence);
      setCurrentExercise(sequence[0]);
    }
  }, [isLoaded]);

  const handleNextStep = () => {
    if (progress < steps) {
      setProgress((prevProgress) => prevProgress + 1);
      setCurrentExercise(exerciseSequence[progress + 1]);
    }
  };

  const getExercise = () => {
    switch (currentExercise) {
      case "Listening":
        return <Exercises.Listening />;
      case "Comprehension":
        return <Exercises.Comprehension />;
      case "Rearrangement":
        return <Exercises.Rearrangement />;
      case "Labeling":
        return <Exercises.Labeling />;
      case "Blanks":
        return <Exercises.Blanks />;
      case "Roleplay":
        return <Exercises.Roleplay />;
      case "Translation":
        return <Exercises.Translation />;
      case "Speaking":
        return <Exercises.Speaking />;
      default:
        return null;
    }
  };

  if (!isLoaded) {
    return null;
  }

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
    width: "92%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Lesson;
