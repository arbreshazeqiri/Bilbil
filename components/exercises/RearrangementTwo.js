import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, PanResponder, Animated } from "react-native";

const RearrangementTwo = () => {
  const [storageWords, setStorageWords] = useState([
    { id: 1, text: "Unë" },
    { id: 2, text: "zjarrin" },
    { id: 3, text: "coding" },
    { id: 4, text: "ndez" },
    { id: 5, text: "coding" },
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
      
        // Determine if the word was released in the storage or placement area
        const isReleasedInPlacement = gesture.moveY > 100; // Adjust the threshold according to your UI
      
        if (isReleasedInPlacement) {
          // Check if the word should be moved from storage to placement or rearranged within placement
          const updatedPlacementWords = [...placementWords];
          const existingWordIndex = updatedPlacementWords.findIndex((w) => w.id === currentId);
      
          // Remove the word from its current position in the placement area, if it exists
          if (existingWordIndex !== -1) {
            updatedPlacementWords.splice(existingWordIndex, 1);
          }
      
          // Find the index where the word should be inserted in the placement area
          let insertionIndex = updatedPlacementWords.findIndex((w) => {
            const wordPosition = wordPositions[w.id];
            return (
              wordPosition.x._value > currentPosition.x._value && wordPosition.y._value > currentPosition.y._value
            );
          });
      
          // If the insertion index is -1, it means the word is dropped at the end
          if (insertionIndex === -1) {
            insertionIndex = updatedPlacementWords.length;
          }
      
          // Insert the word at the appropriate index
          updatedPlacementWords.splice(insertionIndex, 0, word);
          setPlacementWords(updatedPlacementWords);
      
          // Remove the word from the storage area
          const updatedStorageWords = storageWords.filter((w) => w.id !== currentId);
          setStorageWords(updatedStorageWords);
        } else {
          // Check if the word should be moved from placement to storage or rearranged within storage
          const updatedStorageWords = [...storageWords];
          const existingWordIndex = updatedStorageWords.findIndex((w) => w.id === currentId);
      
          // Remove the word from its current position in the storage area, if it exists
          if (existingWordIndex !== -1) {
            updatedStorageWords.splice(existingWordIndex, 1);
          }
      
          // Insert the word at the end of the storage area
          updatedStorageWords.push(word);
          setStorageWords(updatedStorageWords);
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
        <Text>{word.text}</Text>
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
  },
  storageArea: {
    alignItems: "center",
  },
  placementArea: {
    alignItems: "start",
  },
  wordsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  word: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default RearrangementTwo;