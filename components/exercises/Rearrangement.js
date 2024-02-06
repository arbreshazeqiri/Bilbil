import React, { useState, useMemo, useEffect } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import ThoughtBubble from "../ThoughtBubble";
import CustomButton from "../CustomButton";
import Draggable from "../Draggable";

const Rearrangement = ({ onComplete }) => {
  const sentence = "Unë ndez zjarrin";
  const words = sentence.split(" ");
  const randomWords = ["random", "words", "to", "add"];

  const [placedWords, setPlacedWords] = useState([]);
  const [combinedWords, setCombinedWords] = useState(
    [...words, ...randomWords]
      .sort(() => Math.random() - 0.5)
      .map((word) => ({ word, isDropped: false }))
  );

  const handleNextStep = () => {
    onComplete(true);
  };

  const handleDrop = (word) => {
    if (word.isDropped) {
      setPlacedWords((prevPlaced) =>
        prevPlaced.filter((w) => w.word !== word.word)
      );
      setCombinedWords((prevCombined) =>
        prevCombined.map((w) =>
          w.word === word.word ? { ...w, isDropped: false } : w
        )
      );
    } else {
      setPlacedWords((prevPlaced) => [...prevPlaced, { ...word, isDropped: true }]);
      setCombinedWords((prevCombined) =>
        prevCombined.map((w) =>
          w.word === word.word ? { ...w, isDropped: true } : w
        )
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.header}>Translate this sentence</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/exercises/rearrangement.png")}
        />
        <ThoughtBubble pH={20}>
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontFamily: "baloo-semibold",
              fontSize: 20,
              fontWeight: 500,
              width: "100%",
            }}
          >
            Unë ndez zjarrin.
          </Text>
        </ThoughtBubble>
      </View>
      <View style={styles.textArea}>
        <View style={styles.dashedLines}>
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.placedWords}>
            {placedWords.map((w, index) => (
              <TouchableOpacity
                key={index}
                style={styles.placedWordContainer}
                onPress={() => handleDrop(w)}
              >
                <Text style={styles.placedWordText}>{w.word}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.draggableWords}>
          {combinedWords.map((word, index) => (
            <Draggable
              key={word.word + index}
              text={word.word}
              isDropped={word.isDropped}
              onDrop={() => handleDrop(word)}
            />
          ))}
        </View>
      </View>
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
    flex: 1,
    flexDirection: "column",
  },
  dashedLines: {
    width: "100%",
    position: "relative",
  },
  dashedLine: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 30,
  },
  placedWords: {
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 34,
    rowGap: 11,
    gap: 10,
  },
  placedWordContainer: {
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
  placedWordText: {
    fontSize: 16,
    color: "white",
    fontFamily: "baloo-semibold",
  },
  draggableWords: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  draggableWord: {
    margin: 5,
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Rearrangement;
