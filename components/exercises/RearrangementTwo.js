import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, PanResponder, Animated } from "react-native";

const RearrangementTwo = () => {
  const [storageWords, setStorageWords] = useState([
    { id: 1, text: "Unë" },
    { id: 2, text: "zjarrin" },
    { id: 3, text: "filler" },
    { id: 4, text: "ndez" },
    { id: 5, text: "filler2" },
  ]);

  const [placementWords, setPlacementWords] = useState([]);

  const [wordPositions, setWordPositions] = useState({});

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
                  return wordPosition.x._value > currentPosition.x._value || wordPosition.y._value > currentPosition.y._value;
              } else {
                  // For right-to-left movement
                  return wordRight < currentPosition.x._value || wordPosition.y._value < currentPosition.y._value;
              }
          });
          
          // If no word is surpassed, leave it where it is
          if (insertionIndex === -1) {
              insertionIndex = updatedPlacementWords.length; // Insert at the end
          }
          
          // Insert the word at the appropriate index
          updatedPlacementWords.splice(insertionIndex, 0, word);
          
            setPlacementWords(updatedPlacementWords);
            setWordPositions({...wordPositions});
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

  const renderWords = (words) => {
    return words.map((word, index) => (
      <Animated.View
        key={word.id}
        style={[
          styles.word,
          {
            transform: wordPositions[word.id]?.getTranslateTransform(),
          },
        ]}
        {...panResponders[word.id].panHandlers}
      >
        <Text style={{ backgroundColor: 'yellow'}}>{word.text}</Text>
      </Animated.View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.placementArea}>
        <Text style={styles.title}>Placement Area</Text>
        <View style={styles.wordsContainer}>{renderWords(placementWords)}</View>
      </View>
      <View style={styles.storageArea}>
        <Text style={styles.title}>Storage Area</Text>
        <View style={styles.wordsContainer}>{renderWords(storageWords)}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#9d8c8c",
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  storageArea: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
  },
  placementArea: {
    alignItems: "start",
    width: "100%",
    backgroundColor: "red",
    paddingHorizontal: 50,
  },
  wordsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
    zIndex: 1,
  },
  word: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default RearrangementTwo;