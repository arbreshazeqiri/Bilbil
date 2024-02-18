import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import LoadingBar from "../LoadingBar";
import CustomModal from "../CustomModal";
import CustomCard from "../CustomCard";
import { Feather } from "@expo/vector-icons";
import { colorsObj, checkMatching } from "../../utils/constants";

const TimedMatching = ({ setPractice }) => {
  const [steps, setSteps] = useState(10);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("1:45");
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
    if (checked.length === 2) {
      handleNextStep();
    }
  };

  const pairs = {
    mollë: "apple",
    laps: "pencil",
    zjarr: "fire",
    tigër: "tiger",
  };

  const handleNextStep = () => {
    const isCorrect = checkMatching(pairs, checked);
    if (isCorrect) {
      setProgress((prevProgress) => prevProgress + 1);
      // delete this pair and replace with a new one
    } else {
      setChecked([])
    }
    if (progress === steps) onComplete(true);
  };

  return (
    <CustomModal
      visible={true}
      transparent={true}
      dismiss={() => setPractice(null)}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.bar}>
            <LoadingBar
              steps={steps}
              progress={progress}
              color={colorsObj.red}
            />
          </View>
          <View style={styles.timer}>
            <View style={{ backgroundColor: "white", borderRadius: 12 }}>
              <Feather name="clock" color={colorsObj.red} size={22} />
            </View>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Tap the matching pairs</Text>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}
        >
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
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: -27,
  },
  bar: {
    width: "85%",
  },
  timer: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  time: {
    color: colorsObj.red,
    fontSize: 20,
    fontFamily: "baloo-semibold",
    fontWeight: "600",
  },
  headerContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    gap: 10,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
  },
  word: {
    fontSize: 22,
    color: "#944ADE",
    fontFamily: "baloo-semibold",
  },
  cardsContainer: {
    flexDirection: "column",
    gap: 20,
  },
});

export default TimedMatching;
