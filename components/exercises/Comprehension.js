import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import ThoughtBubble from "../ThoughtBubble";
import CustomCheckbox from "../CustomCheckbox";
import CustomButton from "../CustomButton";
import { logMistake } from "../../api";

const Comprehension = ({ user, exercise, onComplete }) => {
  const [checked, setChecked] = useState(null);
  const { characters, sounds, dialogue, question } = exercise;
  const { q, options, correct } = question;

  const playSound = async (src, rate = 1) => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(src);

      await soundObject.setRateAsync(rate, true);
      await soundObject.playAsync();
    } catch (error) {
      console.log("Playback failed due to audio decoding errors", error);
    }
  };

  const handleNextStep = async () => {
    const isCorrect = checked === correct;
    if (isCorrect) onComplete(isCorrect);
    else
      await logMistake(user._id, {
        title: 'Choose the correct answer for: ' + q,
        prop: options[correct],
      })
        .then()
        .catch((err) => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {dialogue.map((d, i) => {
        return (
          <View style={styles.container} key={i}>
            <Image
              style={styles.image}
              source={characters[i]}
            />
            <ThoughtBubble gap={10} pH={15} justify={"start"}>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                }}
                onPress={() => playSound(sounds[i])}
              >
                <Ionicons name={"volume-medium"} size={30} color={"#944ADE"} />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontFamily: "baloo",
                  fontSize: 22,
                }}
              >
                {d}
              </Text>
            </ThoughtBubble>
          </View>
        );
      })}
      <View style={styles.bottom}>
        <Text style={styles.header}>{q}</Text>
        {options.map((o, i) => {
          return (
            <CustomCheckbox
              key={i}
              index={i}
              text={o}
              isChecked={checked === i}
              setIsChecked={(val) => setChecked(val)}
            />
          )
        })}
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
  header: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
  },
  container: {
    flexDirection: "row",
    alignItems: "start",
    width: "100%",
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 20,
  },
  bottom: {
    flexDirection: "column",
    gap: 25,
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Comprehension;
