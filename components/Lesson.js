import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import LoadingBar from "../components/LoadingBar";
import { generateExerciseSequence, roleplayQuestions } from "../utils/constants";
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

  const handleNextStep = (isCorrect) => {
    if (isCorrect && progress < steps) {
      setProgress((prevProgress) => prevProgress + 1);
      setCurrentExercise(exerciseSequence[progress + 1]);
    }
  };

  const getExercise = () => {
    switch (currentExercise) {
      case "Listening":
        return (
          <Exercises.Listening onComplete={(val) => handleNextStep(val)} />
        );
      case "Comprehension":
        return (
          <Exercises.Comprehension onComplete={(val) => handleNextStep(val)} />
        );
      case "Matching":
        return <Exercises.Matching onComplete={(val) => handleNextStep(val)} />;
      case "Rearrangement":
        return (
          <Exercises.Rearrangement onComplete={(val) => handleNextStep(val)} />
        );
      case "Labeling":
        return <Exercises.Labeling onComplete={(val) => handleNextStep(val)} />;
      case "Blanks":
        return (
          <Exercises.Blanks
            onComplete={(val) => handleNextStep(val)}
            sentence="Zogjtë fluturojnë mbi det"
            missingIndices={[1, 3]}
          />
        );
      case "Roleplay":
        return <Exercises.Roleplay onComplete={(val) => handleNextStep(val)} questions={roleplayQuestions}/>;
      case "Translation":
        return <Exercises.Translation sentence={"Birds fly over the sea"} translation={"Zogjtë fluturojnë mbi det"} onComplete={(val) => handleNextStep(val)} />;
      case "Speaking":
        return <Exercises.Speaking onComplete={(val) => handleNextStep(val)} />;
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
});

export default Lesson;
