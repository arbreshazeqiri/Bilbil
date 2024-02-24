import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import LoadingBar from "../CheckpointLoadingBar";
import CustomModal from "../CustomModal";
import CustomCard from "../CustomCard";
import { Feather } from "@expo/vector-icons";
import { colorsObj, checkMatching } from "../../utils/constants";
import { pairs } from "../../utils/language";

const TimedMatching = ({ setPractice }) => {
  const [steps, setSteps] = useState(10);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(105);
  const [checked, setChecked] = useState([]);
  const [shuffledKeys, setShuffledKeys] = useState([]);
  const [shuffledValues, setShuffledValues] = useState([]);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const keys = Object.keys(pairs).slice(0, 10);
    const values = Object.values(pairs).slice(0, 10);

    setShuffledKeys(shuffleArray(keys));
    setShuffledValues(shuffleArray(values));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setIsOver(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSetChecked = (pair) => {
    if (checked.length === 2) {
      return;
    }

    setChecked((prevChecked) => [...prevChecked, pair]);
  };

  useEffect(() => {
    if (checked.length === 2) {
      const isCorrect = checkMatching(pairs, checked);
      if (isCorrect) {
        setProgress((prevProgress) => prevProgress + 1);
        setShuffledKeys((prevKeys) =>
          prevKeys.filter((key) => key !== checked[0])
        );
        setShuffledValues((prevValues) =>
          prevValues.filter((value) => value !== checked[1])
        );
      }
      setChecked([]);
    }
  }, [checked]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
              checkpointNumber={3}
              checkpointValues={[5, 15, 25]}
            />
          </View>
          <View style={styles.timer}>
            <View style={{ backgroundColor: "white", borderRadius: 12 }}>
              <Feather name="clock" color={colorsObj.red} size={22} />
            </View>
            <Text style={styles.time}>{formatTime()}</Text>
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Tap the matching pairs</Text>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}
        >
          <View style={styles.cardsContainer}>
            {shuffledKeys.slice(0, 5).map((key, index) => (
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
            {shuffledValues.slice(0, 5).map((option, index) => (
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
    width: "100%",
    height: "100%",
    gap: 20,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "-8%",
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
