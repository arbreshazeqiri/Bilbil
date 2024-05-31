import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import BalooSemiBoldFont from "../../assets/fonts/Baloo-SemiBold.ttf";
import { useFonts } from "expo-font";
import ThoughtBubble from "../ThoughtBubble";
import CustomButton from "../CustomButton";
import { logMistake } from "../../api";

const Translation = ({ user, sentence, translation, onComplete }) => {
  const [input, setInput] = useState("");
  const [isLoaded] = useFonts({
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const handleNextStep = async () => {
    onComplete(true);
    // if(input.length === 0) return;
    // const isCorrect = translation === input;
    // if (isCorrect) onComplete(isCorrect);
    // else
    //   await logMistake(user._id, {
    //     title: "Translate this sentence",
    //     prop: sentence,
    //   }).then().catch((err) => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.header}>Translate this sentence</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/exercises/translation.png")}
        />
        <ThoughtBubble justify="start" height={"90%"}>
          <Text
            style={{
              color: "white",
              fontFamily: "baloo-semibold",
              fontSize: 20,
              fontWeight: 500,
              alignSelf: "center",
            }}
          >
            {sentence}
          </Text>
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
    alignItems: "stretch",
    alignSelf: "start",
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  header: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
    marginBottom: 30,
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

export default Translation;
