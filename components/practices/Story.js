import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import ThoughtBubble from "../ThoughtBubble";
import CustomCheckbox from "../CustomCheckbox";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import LoadingBar from "../LoadingBar";

const Story = ({ onComplete, story, setStory }) => {
  const scrollViewRef = useRef(null);
  const steps = 12;
  const [progress, setProgress] = useState(0);
  const [questionsProgress, setQuestionsProgress] = useState(0);
  const [checked, setChecked] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
  });

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
    if (progress == 12) {
      setStory(null);
    }
  }, [progress]);

  const handleNextStep = () => {
    const currentQuestion = story.questions[questionsProgress];
    const selectedOption = checked[questionsProgress];

    if (selectedOption !== null) {
      if (currentQuestion.correct === selectedOption) {
        setProgress((prevProgress) => prevProgress + 1);
        setQuestionsProgress((prevProgress) => prevProgress + 1);
      }
    } else {
      setProgress((prevProgress) => prevProgress + 1);
    }
  };

  const handleChecked = (qIndex, oIndex) => {
    if (checked[qIndex] === oIndex) {
      setChecked({ ...checked, [qIndex]: null });
    } else {
      setChecked({ ...checked, [qIndex]: oIndex });
    }
  };

  const isOptionSelectedForCurrentQuestion = () => {
    if (questionsProgress >= 0) {
      return checked[questionsProgress] !== null;
    }
    return false;
  };

  return (
    <CustomModal
      visible={true}
      transparent={true}
      dismiss={() => setStory(null)}
    >
      <View style={styles.baseContainer}>
        <View style={styles.baseHeader}>
          <LoadingBar steps={steps} progress={progress} />
        </View>
        <KeyboardAvoidingView
          style={styles.base}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.dialogue}
            ref={scrollViewRef}
            onContentSizeChange={() => {
              scrollViewRef.current.scrollToEnd({ animated: true });
            }}
          >
            {story.dialogue.slice(0, progress + 1).map((line, index) => {
              return (
                <View style={styles.container} key={index}>
                  <Image
                    style={styles.image}
                    source={story.characters[index % 2]}
                  />
                  <ThoughtBubble
                    gap={10}
                    pH={15}
                    justify={"start"}
                    height="auto"
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        color: "white",
                        fontFamily: "baloo",
                        fontSize: 22,
                      }}
                    >
                      {line}
                    </Text>
                  </ThoughtBubble>
                </View>
              );
            })}
            {progress >= 8 &&
              story &&
              story?.questions &&
              story?.questions?.length > 0 &&
              story?.questions
                ?.slice(0, questionsProgress + 1)
                ?.map((q, qIndex) => {
                  return (
                    <View style={styles.bottom} key={qIndex}>
                      <Text style={styles.header}>{q.question}</Text>
                      {q &&
                        q?.options &&
                        q?.options?.map((option, oIndex) => (
                          <CustomCheckbox
                            key={option + oIndex}
                            index={oIndex}
                            text={option}
                            isChecked={checked[qIndex] === oIndex}
                            setIsChecked={(val) => handleChecked(qIndex, val)}
                          />
                        ))}
                    </View>
                  );
                })}
          </ScrollView>
          <View style={styles.buttons}>
            <CustomButton
              icon={false}
              iconName={"person-remove"}
              title="CONTINUE"
              iconSize={22}
              color="#212832"
              bgColor="#93D334"
              borderColor={"#7BB836"}
              isDisabled={
                progress >= 8 && !isOptionSelectedForCurrentQuestion()
              }
              onPress={handleNextStep}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  base: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignSelf: "start",
    paddingTop: 30,
    paddingHorizontal: 15,
    gap: 20,
  },
  dialogue: {
    gap: 30,
  },
  baseHeader: {
    width: "90%",
    alignSelf: "center",
    justifySelf: "center",
    marginTop: -15,
  },
  header: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
  },
  container: {
    flexDirection: "row",
    alignItems: "start",
    width: "100%",
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

export default Story;
