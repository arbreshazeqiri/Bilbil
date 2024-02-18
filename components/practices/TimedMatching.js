import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import LoadingBar from "../LoadingBar";
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
  const [shuffledPairs, setShuffledPairs] = useState([]);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    // Function to shuffle pairs
    const shufflePairs = () => {
      let pairsArray = Object.entries(pairs);
      let shuffledArray = [];

      while (pairsArray.length) {
        shuffledArray = shuffledArray.concat(
          pairsArray.splice(0, Math.min(10, pairsArray.length))
        );
        shuffledArray.sort(() => Math.random() - 0.5);
      }

      setShuffledPairs(shuffledArray);
    };

    shufflePairs();
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
        setShuffledPairs((prevPairs) =>
          prevPairs.filter(
            (pair) => pair[0] !== checked[0] && pair[1] !== checked[1]
          )
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
            {shuffledPairs.map((pair, index) => (
              <CustomCard
                key={index}
                index={index}
                height={80}
                label={pair[0]}
                isChecked={checked.includes(pair[0])}
                setIsChecked={() => handleSetChecked(pair[0])}
              />
            ))}
          </View>
          <View style={styles.cardsContainer}>
            {shuffledPairs.map((pair, index) => (
              <CustomCard
                key={index}
                index={index}
                height={80}
                label={pair[1]}
                isChecked={checked.includes(pair[1])}
                setIsChecked={() => handleSetChecked(pair[1])}
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
