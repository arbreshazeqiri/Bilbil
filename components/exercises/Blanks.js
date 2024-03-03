import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import CustomButton from "../CustomButton";
import { checkRearrangement } from "../../utils/constants";
import { logMistake } from "../../api";

const Blanks = ({ user, sentence = "", missingIndices = [], onComplete }) => {
  const words = sentence.split(" ");
  const randomWords = ["random", "words", "to", "add"];
  const [storageWords, setStorageWords] = useState(
    [...words, ...randomWords]
      .sort(() => Math.random() - 0.5)
      .map((word, index) => ({ id: index, text: word, isDropped: false }))
  );
  const [placementWords, setPlacementWords] = useState([]);

  const handleNextStep = async () => {
    let structuredSentence = [...words];
    missingIndices.forEach((index, i) => {
      if (placementWords[i]) {
        structuredSentence[index] = placementWords[i].text;
      }
    });

    const isCorrect = checkRearrangement(sentence, structuredSentence);
    if (isCorrect) onComplete(isCorrect);
    else
      await logMistake(user._id, {
        title: 'Complete the sentence',
        prop: sentence,
      })
        .then()
        .catch((err) => console.log(err));
  };

  const handleTap = (word) => {
    if (placementWords.includes(word)) {
      setPlacementWords((prev) => prev.filter((w) => w.id !== word.id));
    } else {
      if (placementWords.length === missingIndices.length) return;
      setPlacementWords((prev) => [...prev, word]);
    }

    const updatedWords = storageWords.map((w) => {
      if (w.id === word.id) {
        return { ...w, isDropped: !w.isDropped };
      }
      return w;
    });
    setStorageWords(updatedWords);
  };

  const renderWords = (words) => {
    return words.map((word) => (
      <TouchableOpacity
        key={word.id}
        style={word.isDropped ? styles.droppedContainer : styles.wordContainer}
        onPress={() => handleTap(word)}
      >
        <Text style={word.isDropped ? styles.droppedText : styles.wordText}>
          {word.text}
        </Text>
      </TouchableOpacity>
    ));
  };

  const renderTextArea = () => {
    let placementCounter = 0
    return (
      <View style={styles.textArea}>
        {words.map((word, index) => {
          const missing = missingIndices.includes(index);
          if (!missing) {
            return (
              <Text key={index} style={styles.props}>
                {word}
              </Text>
            );
          } else if (placementWords.length > 0 && placementCounter < placementWords.length) {
            const placementWord = placementWords[placementCounter];
            placementCounter++;
            return (
              <TouchableOpacity key={index} onPress={() => handleTap(placementWord)}>
                <View style={styles.wordContainer}>
                  <Text style={styles.wordText}>{placementWord.text}</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return <View key={index} style={styles.dashedLine} />;
          }
        })}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.header}>Complete the sentence</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/exercises/blanks.png")}
        />
        {renderTextArea()}
      </View>
      <View style={styles.draggableWords}>{renderWords(storageWords)}</View>
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
    paddingTop: 30,
    paddingHorizontal: 15,
    gap: 30,
  },
  header: {
    color: "white",
    fontSize: 22,
  },
  container: {
    flexDirection: "row",
    alignItems: "start",
    width: "100%",
  },
  image: {
    height: 150,
    width: 150,
    marginRight: 20,
  },
  textArea: {
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 40,
    flex: 1,
  },
  props: {
    alignSelf: "center",
    color: "white",
    fontFamily: "baloo-semibold",
    fontSize: 20,
    fontWeight: '500',
  },
  dashedLine: {
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignSelf: "flex-end",
  },
  wordContainer: {
    backgroundColor: "#212832",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    borderColor: "#2E3845",
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 5,
  },
  droppedContainer: {
    backgroundColor: "#2E3845",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    borderColor: "#2E3845",
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 5,
  },
  wordText: {
    fontSize: 16,
    color: "white",
    fontFamily: "baloo-semibold",
  },
  droppedText: {
    fontSize: 16,
    color: "transparent",
    fontFamily: "baloo-semibold",
  },
  draggableWords: {
    width: "100%",
    justifyContent: 'space-evenly',
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Blanks;
