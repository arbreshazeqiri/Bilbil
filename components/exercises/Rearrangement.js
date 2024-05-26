import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  PanResponder,
  Animated,
  Platform,
} from "react-native";
import ThoughtBubble from "../ThoughtBubble";
import CustomButton from "../CustomButton";
import { checkRearrangement } from "../../utils/constants";
import { logMistake } from "../../api";

const Rearrangement = ({ user, onComplete }) => {
  const sentence = "Unë ndez zjarrin";
  const words = sentence.split(" ");
  const randomWords = ["random", "words", "to", "add"];
  const [storageWords, setStorageWords] = useState(
    [...words, ...randomWords]
      .sort(() => Math.random() - 0.5)
      .map((word, index) => ({ id: index, text: word }))
  );
  const [placementWords, setPlacementWords] = useState([]);
  const [wordPositions, setWordPositions] = useState({});

  const handleNextStep = async () => {
    const isCorrect = checkRearrangement(
      sentence,
      placementWords.map((w) => w.text)
    );
    if (isCorrect) onComplete(true);
    else
      await logMistake(user._id, {
        title: 'Translate this sentence',
        prop: sentence,
      })
        .then()
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    const positions = {};
    [...storageWords, ...placementWords].forEach((word) => {
      positions[word.id] = new Animated.ValueXY();
    });
    setWordPositions(positions);
  }, [storageWords, placementWords]);

  const panResponders = {};
  [...storageWords, ...placementWords].forEach((word) => {
    panResponders[word.id] = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        wordPositions[word.id].setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
      },
      onPanResponderRelease: (event, gesture) => {
        const { id: currentId } = word;
        const currentPosition = wordPositions[currentId];
        const isDragged = gesture.dx !== 0 || gesture.dy !== 0;

        if (!isDragged) {
          const updatedPlacementWords = [...placementWords];
          const existingWordIndex = updatedPlacementWords.findIndex(
            (w) => w.id === currentId
          );

          // Remove the word from its current position in the placement area, if it exists
          if (existingWordIndex !== -1) {
            updatedPlacementWords.splice(existingWordIndex, 1);
          }

          if (!placementWords.includes(word)) {
            updatedPlacementWords.push(word);
            setPlacementWords(updatedPlacementWords);

            // Remove the word from the storage area
            const updatedStorageWords = storageWords.filter(
              (w) => w.id !== currentId
            );
            setStorageWords(updatedStorageWords);
          } else {
            updatedPlacementWords.filter((w) => w.id !== currentId);
            setPlacementWords(updatedPlacementWords);

            // Remove the word from the storage area
            const updatedStorageWords = [...storageWords, word];
            setStorageWords(updatedStorageWords);
          }
          // Insert the word at the end of the placement area
        } else {
          // Determine if the word was released in the storage or placement area
          const isReleasedInPlacement = gesture.moveY > 100; // Adjust the threshold according to your UI

          if (isReleasedInPlacement) {
            // Check if the word should be moved from storage to placement or rearranged within placement
            const updatedPlacementWords = [...placementWords];
            const existingWordIndex = updatedPlacementWords.findIndex(
              (w) => w.id === currentId
            );

            // Remove the word from its current position in the placement area, if it exists
            if (existingWordIndex !== -1) {
              updatedPlacementWords.splice(existingWordIndex, 1);
            }

            const isMovementLeftToRight = gesture.dx > 0;

            // Find the index where the word should be inserted in the placement area
            let insertionIndex = updatedPlacementWords.findIndex((w) => {
              const wordPosition = wordPositions[w.id];
              const wordRight = wordPosition.x._value + w.text.length + 10;

              if (isMovementLeftToRight) {
                // For left-to-right movement
                return (
                  wordPosition.x._value > currentPosition.x._value ||
                  wordPosition.y._value > currentPosition.y._value
                );
              } else {
                // For right-to-left movement
                return (
                  wordRight < currentPosition.x._value ||
                  wordPosition.y._value < currentPosition.y._value
                );
              }
            });

            // If no word is surpassed, leave it where it is
            if (insertionIndex === -1) {
              insertionIndex = updatedPlacementWords.length; // Insert at the end
            }

            // Insert the word at the appropriate index
            updatedPlacementWords.splice(insertionIndex, 0, word);

            setPlacementWords(updatedPlacementWords);
            setWordPositions({ ...wordPositions });
            // Remove the word from the storage area
            const updatedStorageWords = storageWords.filter(
              (w) => w.id !== currentId
            );
            setStorageWords(updatedStorageWords);
          }
        }
      },
    });
  });

  const renderWords = (words, place) => {
    return words.map((word, index) => (
      <Animated.View
        key={word.id}
        style={[
          styles.wordContainer,
          {
            transform: wordPositions[word.id]?.getTranslateTransform(),
          },
        ]}
        {...panResponders[word.id].panHandlers}
      >
        <Text style={styles.wordText}>{word.text}</Text>
      </Animated.View>
    ));
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
            I light the fire.
          </Text>
        </ThoughtBubble>
      </View>
      <View style={styles.textArea}>
        <View style={styles.dashedLines}>
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.dashedLine} />
          <View style={styles.placedWords}>
            {renderWords(placementWords, "place")}
          </View>
        </View>
        <View style={styles.draggableWords}>
          {renderWords(storageWords, "storage")}
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
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
  wordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
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
  wordText: {
    fontSize: 16,
    color: "white",
    fontFamily: "baloo-semibold",
  },
  draggableWords: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
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
