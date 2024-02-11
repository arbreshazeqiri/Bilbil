import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import ThoughtBubble from "../ThoughtBubble";
import CustomCheckbox from "../CustomCheckbox";
import CustomButton from "../CustomButton";

const Comprehension = ({ onComplete }) => {
  const [checked, setChecked] = useState(null);
  const sounds = [
    require("../../assets/audios/Sa-vjec-je.m4a"),
    require("../../assets/audios/Pese.m4a"),
  ];

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

  const handleNextStep = () => {
    onComplete(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/exercises/comprehension-1.png")}
        />
        <ThoughtBubble gap={10} pH={15} justify={"start"}>
          <TouchableOpacity
            style={{
              alignSelf: "center",
            }}
            onPress={() => playSound(sounds[0])}
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
            Sa vjeç je?
          </Text>
        </ThoughtBubble>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/exercises/comprehension-2.png")}
        />
        <ThoughtBubble gap={10} pH={15} justify={"start"}>
          <TouchableOpacity
            style={{
              alignSelf: "center",
            }}
            onPress={() => playSound(sounds[1])}
          >
            <Ionicons name={"volume-medium"} size={30} color={"#944ADE"} />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontFamily: "baloo",
              fontSize: 25,
            }}
          >
            Pesë.
          </Text>
        </ThoughtBubble>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.header}>The blue bird is saying it is...</Text>
        <CustomCheckbox
          index={0}
          text={"... four years old."}
          isChecked={checked === 0}
          setIsChecked={(val) => setChecked(val)}
        />
        <CustomCheckbox
          index={1}
          text={"... five years old."}
          isChecked={checked === 1}
          setIsChecked={(val) => setChecked(val)}
        />
        <CustomCheckbox
          index={2}
          text={"... six years old."}
          isChecked={checked === 2}
          setIsChecked={(val) => setChecked(val)}
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
