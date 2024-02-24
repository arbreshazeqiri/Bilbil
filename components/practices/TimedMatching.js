import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import LoadingBar from "../CheckpointLoadingBar";
import CustomModal from "../CustomModal";
import CustomCard from "../CustomCard";
import { Feather } from "@expo/vector-icons";
import { colorsObj, checkMatching } from "../../utils/constants";
import { pairs } from "../../utils/language";
import CustomButton from "../CustomButton";

const TimedMatching = ({ setPractice }) => {
  const steps = 10;
  const maxXP = 45;
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(105);
  const [checked, setChecked] = useState([]);
  const [shuffledKeys, setShuffledKeys] = useState([]);
  const [shuffledValues, setShuffledValues] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [xpReached, setXpReached] = useState(0);

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
          prevKeys.filter((key) => key !== checked[0] && key !== checked[1])
        );
        setShuffledValues((prevValues) =>
          prevValues.filter(
            (value) => value !== checked[1] && value !== checked[0]
          )
        );
      }
      setChecked([]);
    }
  }, [checked]);

  useEffect(() => {
    if (progress == steps) {
      setIsOver(true);
    }
  }, [progress]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const Game = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <LoadingBar
            steps={steps}
            progress={progress}
            updateXpReached={setXpReached}
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
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
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
  );

  const GameOver = () => (
    <View style={styles.gameOverContainer}>
      <View style={styles.texts}>
        <View style={styles.xpCircle}>
          <Text style={styles.xpText}>{xpReached}</Text>
        </View>
        <Text style={styles.xpSubtext}>
          {xpReached === maxXP
            ? `You reached maximum XP!`
            : `You won ${xpReached} XP!`}
        </Text>
        <Text style={styles.xpDescription}>
          You answered {progress} questions correctly. Great job!
        </Text>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          title="CONTINUE"
          color={colorsObj.red}
          bgColor={"white"}
          borderColor={"#d7d5d5"}
          onPress={() => setPractice(null)}
        />
      </View>
    </View>
  );

  return (
    <CustomModal
      visible={true}
      transparent={true}
      dismiss={() => setPractice(null)}
      hasCloseButton={!isOver}
    >
      {isOver ? <GameOver /> : <Game />}
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    gap: 20,
  },
  gameOverContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  texts: {
    paddingTop: "45%",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    gap: 15,
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
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  xpCircle: {
    backgroundColor: colorsObj.red,
    height: 200,
    width: 200,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  xpText: {
    color: "white",
    fontSize: 120,
    fontFamily: "baloo",
  },
  xpSubtext: {
    color: "white",
    fontSize: 30,
    fontFamily: "baloo-semibold",
  },
  xpDescription: {
    color: "white",
    fontSize: 18,
    fontFamily: "baloo",
    textAlign: "center",
  },
});

export default TimedMatching;
