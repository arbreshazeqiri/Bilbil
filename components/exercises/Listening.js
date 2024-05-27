import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import BalooSemiBoldFont from "../../assets/fonts/Baloo-SemiBold.ttf";
import { useFonts } from "expo-font";
import ThoughtBubble from "../ThoughtBubble";
import CustomButton from "../CustomButton";
import { logMistake } from "../../api";

const Listening = ({ user, sentence, onComplete }) => {
  const [input, setInput] = useState("");
  const [isLoaded] = useFonts({
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }
  const playSound = async (rate = 1) => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(
        require("../../assets/audios/Pershendetje.m4a")
      );

      await soundObject.setRateAsync(rate, true);
      await soundObject.playAsync();
    } catch (error) {
      console.log("Playback failed due to audio decoding errors", error);
    }
  };

  const handleNextStep = async () => {
    onComplete(true);
    // if (input.length === 0) return;
    // const isCorrect = sentence === input;
    // if (isCorrect) onComplete(isCorrect);
    // else
    //   await logMistake(user._id, {
    //     title: "Type what you hear",
    //     prop: sentence,
    //   })
    //     .then()
    //     .catch((err) => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.header}>Type what you hear</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/exercises/listening.png")}
        />
        <ThoughtBubble>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              borderRightWidth: 1,
              borderColor: "#AFAFAF",
              paddingRight: 20,
              paddingVertical: 30,
            }}
            onPress={() => playSound()}
          >
            <Ionicons name={"volume-medium"} size={40} color={"#944ADE"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => playSound(0.7)}
          >
            <Text
              style={{
                color: "#944ADE",
                fontFamily: "baloo-semibold",
                fontSize: 25,
                fontWeight: 500,
              }}
            >
              x0.7
            </Text>
          </TouchableOpacity>
        </ThoughtBubble>
      </View>
      <View style={styles.textArea}>
        <TextInput
          accessibilityLanguage="sq-AL"
          style={styles.textInput}
          onChangeText={(text) => setInput(text)}
          value={input}
          placeholder="Type in Albanian"
          placeholderTextColor="#AFAFAF"
          keyboardType="default"
          textAlignVertical="top"
          multiline
        />
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
    height: 150,
    width: 150,
    marginRight: 20,
  },
  textArea: {
    flex: 1,
    height: 200,
  },
  textInput: {
    color: "white",
    width: "100%",
    borderRadius: 10,
    fontWeight: "semibold",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    backgroundColor: "#2B3440",
    height: 200,
    paddingTop: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Listening;
