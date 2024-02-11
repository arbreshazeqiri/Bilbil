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

const Blanks = ({ onComplete }) => {
  const sentence = "Zogjtë fluturojnë mbi det";
  const words = sentence.split(" ");
  const randomWords = ["random", "words", "to", "add"];
  const [storageWords, setStorageWords] = useState(
    [...words, ...randomWords]
      .sort(() => Math.random() - 0.5)
      .map((word, index) => ({ id: index, text: word, isDropped: false }))
  );
  const [placementWords, setPlacementWords] = useState([]);

  const handleNextStep = () => {
    const isCorrect = checkRearrangement(
      sentence,
      placementWords.map((w) => w.text)
    );
    onComplete(isCorrect);
  };

  const handleTap = (word) => {
    if (placementWords.includes(word)) {
      // Remove the word from placementWords
      setPlacementWords((prev) => prev.filter((w) => w.id !== word.id));
    } else {
      // Check if there is already a word at max capacity
      if (placementWords.length === 2) return;

      // Add the word to placementWords
      setPlacementWords((prev) => [...prev, word]);
    }

    // Toggle isDropped for the word in storageWords
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
        <View style={styles.textArea}>
          <Text style={styles.props}>Zogjtë</Text>
          {placementWords[0] ? (
              <TouchableOpacity onPress={() => handleTap(placementWords[0])}>
              <View style={styles.wordContainer}>
                <Text style={styles.wordText}>{placementWords[0].text}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.dashedLine} />
          )}
          <Text style={styles.props}>mbi</Text>
          {placementWords[1] ? (
            <TouchableOpacity onPress={() => handleTap(placementWords[1])}>
              <View style={styles.wordContainer}>
                <Text style={styles.wordText}>{placementWords[1].text}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.dashedLine} />
          )}
          <Text style={styles.props}>.</Text>
        </View>
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
    paddingVertical: 30,
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
    flex: 1,
  },
  props: {
    alignSelf: "center",
    color: "white",
    fontFamily: "baloo-semibold",
    fontSize: 20,
    fontWeight: 500,
  },
  dashedLine: {
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignSelf: "flex-end",
  },
  placedWords: {
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 34,
    rowGap: 11,
    gap: 10,
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
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 25,
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
