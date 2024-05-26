import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import CustomCard from "../CustomCard";
import { checkMatching } from "../../utils/constants";
import CustomButton from "../CustomButton";
import { logMistake } from "../../api";

const Matching = ({ user, onComplete }) => {
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

  const handleNextStep = async () => {
    const isCorrect = checkMatching(pairs, checked);
    if (isCorrect) onComplete(isCorrect);
    else
      await logMistake(user._id, {
        title: "Tap the matching pairs",
        prop: Object.values(pairs).toString(),
      })
        .then()
        .catch((err) => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Tap the matching pairs</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
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
    gap: 20,
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
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Matching;
