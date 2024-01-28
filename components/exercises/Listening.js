import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import BalooSemiBoldFont from "../../assets/fonts/Baloo-SemiBold.ttf";
import { useFonts } from "expo-font";

const Listening = () => {
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
      await soundObject.loadAsync({
        uri: "https://nkprod-coredatastack-pa7jx42xiwhf-tasksbucket-13qb6gn1l5ooi.s3.us-east-1.amazonaws.com/1b96847a-c8bb-44fd-ac75-d6043762d7aa/result.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUENQVYXORYD4N3EU%2F20240128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240128T184744Z&X-Amz-Expires=86400&X-Amz-Signature=9a7c0344bdf16030601003d4a9d95098a6a5003392a5b4477b5c7f354af49d5a&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22P%25C3%25ABrsh%25C3%25ABndetje%2520.mp3%22&x-id=GetObject",
      });

      await soundObject.setRateAsync(rate, true);
      await soundObject.playAsync();
    } catch (error) {
      console.log("Playback failed due to audio decoding errors", error);
    }
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
        <View style={styles.triangle} />
        <View style={styles.triangleTwo} />
        <View style={styles.thoughtBubble}>
          <TouchableOpacity
            style={{ alignSelf: "center", borderRightWidth: 1, borderColor: "#AFAFAF", paddingRight: 20, paddingVertical: 30 }}
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
        </View>
      </View>
      <View style={styles.textArea}>
        <TextInput
          accessibilityLanguage="sq-AL"
          style={styles.textInput}
          onChangeText={(text) => setInput(text)}
          value={input}
          placeholder="Type in Albanian"
          placeholderTextColor="#AFAFAF"
          keyboardType="visible-password" // Set the keyboardType to enable the Albanian keyboard
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
    justifyContent: "start",
    alignSelf: "flex-start",
    paddingVertical: 30,
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
    paddingHorizontal: 5,
    paddingVertical: 0,
    textAlignVertical: "top",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  thoughtBubble: {
    flex: 1,
    paddingHorizontal: 30,
    gap: 20,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: "#212832",
    borderColor: '#AFAFAF',
    borderWidth: 1,
    borderRadius: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    marginTop: 35,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 0, // Adjust the width to change the size of the triangle
    borderRightWidth: 13,
    borderBottomWidth: 26, // Adjust the height to change the size of the triangle
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ababab", // Adjust the color of the triangle
    transform: [
      { rotate: "-90deg" }, // Rotate the triangle to point left
    ],
  },
  triangleTwo: {
    width: 0,
    height: 0,
    marginTop: 41,
    position: 'relative',
    marginLeft: -10,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 0, // Adjust the width to change the size of the triangle
    borderRightWidth: 10,
    borderBottomWidth: 16, // Adjust the height to change the size of the triangle
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    zIndex: 9,
    borderBottomColor: "#212832", // Adjust the color of the triangle
    transform: [
      { rotate: "-90deg" }, // Rotate the triangle to point left
    ],
  },
});

export default Listening;
