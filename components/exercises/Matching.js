import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import CustomCard from "../CustomCard";

const Matching = () => {
  const [checked, setChecked] = useState([]);
  const [shuffledKeys, setShuffledKeys] = useState([]);
  const [shuffledValues, setShuffledValues] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const keys = Object.keys(pairs);
    const values = Object.values(pairs);

    setShuffledKeys(shuffleArray(keys));
    setShuffledValues(shuffleArray(values));
  }, []);

  const handleSetChecked = (index) => {
    if (checked.includes(index)) {
      setChecked((prevChecked) =>
        prevChecked.filter((option) => option !== index)
      );
    } else {
      setChecked((prevChecked) => [...prevChecked, index]);
    }
  };

  const pairs = {
    mollë: "apple",
    laps: "pencil",
    zjarr: "fire",
    tigër: "tiger",
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Tap the matching pairs</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.cardsContainer}>
          {shuffledKeys.map((key, index) => (
            <CustomCard
              key={key}
              index={key}
              height={80}
              label={key}
              isChecked={checked.includes(key)}
              setIsChecked={(val) => handleSetChecked(val)}
            />
          ))}
        </View>
        <View style={styles.cardsContainer}>
          {shuffledValues.map((option, index) => (
            <CustomCard
              key={option}
              index={option}
              height={80}
              label={option}
              isChecked={checked.includes(option)}
              setIsChecked={(val) => handleSetChecked(val)}
            />
          ))}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 50,
    gap: 40,
  },
  headerContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    gap: 10,
  },
  header: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
  },
  word: {
    fontSize: 20,
    color: "#944ADE",
    fontFamily: "baloo-semibold",
    fontWeight: "600",
  },
  cardsContainer: {
    flexDirection: "column",
    gap: 20,
  },
});

export default Matching;
