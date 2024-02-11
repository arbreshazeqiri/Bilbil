import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import ThoughtBubble from "../ThoughtBubble";
import CustomCheckbox from "../CustomCheckbox";
import CustomButton from "../CustomButton";

const Roleplay = ({ questions, onComplete }) => {
  const [checked, setChecked] = useState(new Array(questions.length).fill([]));

  const handleNextStep = () => {
    const isCorrect = questions.map((q, index) => {
      const correctAnswers = q.correctAnswers || [];
      const isCheckedForQuestion = checked[index] || [];

      const isAllCorrectIncluded = correctAnswers.every((c) =>
        isCheckedForQuestion.includes(c)
      );
      const isLengthMatched =
        isCheckedForQuestion.length === correctAnswers.length;
      return isAllCorrectIncluded && isLengthMatched;
    });

    const allCorrect = isCorrect.every((value) => value === true);
    onComplete(allCorrect);
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.questionsContainer}>
        {questions.map((questionData, index) => (
          <View key={index} style={styles.questionContainer}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require("../../assets/exercises/roleplay-1.png")}
              />
              <ThoughtBubble gap={10} pH={15} justify={"start"}>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontFamily: "baloo",
                    fontSize: 22,
                  }}
                >
                  {questionData.question}
                </Text>
              </ThoughtBubble>
            </View>
            <View style={styles.container}>
              <ThoughtBubble
                gap={10}
                pH={15}
                justify={"center"}
                position="left"
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontFamily: "baloo",
                    fontSize: 22,
                  }}
                >
                  ...
                </Text>
              </ThoughtBubble>
              <Image
                style={styles.image}
                source={require("../../assets/exercises/roleplay-2.png")}
              />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.header}>Choose the correct answer(s):</Text>
              {questionData.answers.map((answer, answerIndex) => (
                <CustomCheckbox
                  key={answerIndex}
                  index={answerIndex}
                  text={answer}
                  isChecked={checked[index].includes(answerIndex)}
                  setIsChecked={(val) => {
                    const newChecked = [...checked];
                    if (newChecked[index].includes(val)) {
                      newChecked[index] = newChecked[index].filter(
                        (checkedIndex) => checkedIndex !== val
                      );
                    } else {
                      newChecked[index] = [...newChecked[index], val];
                    }
                    setChecked(newChecked);
                  }}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignSelf: "start",
    paddingVertical: 30,
    paddingHorizontal: 15,
    gap: 20,
  },
  questionsContainer: {
    flexDirection: "column",
    gap: 70,
    paddingHorizontal: 10,
  },
  questionContainer: {
    gap: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "start",
    width: "100%",
  },
  header: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 20,
  },
  bottom: {
    flexDirection: "column",
    gap: 25,
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Roleplay;
