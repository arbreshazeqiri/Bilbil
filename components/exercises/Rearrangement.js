import React, { useState, useRef, useEffect } from "react";
import { Text, Image, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import ThoughtBubble from "../ThoughtBubble";
import CustomButton from "../CustomButton";
import Draggable from "../Draggable";

const Rearrangement = ({ onComplete }) => {
  const [droppedWords, setDroppedWords] = useState([]);
  const dashedLineRefs = useRef([]);
  const dashedLineDimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (dashedLineRefs.current.length > 0) {
      dashedLineRefs.current.forEach((ref) => {
        ref.measure((x, y, width, height, pageX, pageY) => {
          dashedLineDimensions.current = { width, height };
        });
      });
    }
  }, [dashedLineRefs.current]);

  const handleNextStep = () => {
    onComplete(true);
  };

  const sentence = "Unë ndez zjarrin.";
  const words = sentence.split(" ");
  const randomWords = ["random", "words", "to", "add"];
  const combinedWords = [...words, ...randomWords].sort(() => Math.random() - 0.5);

  const handleDrop = (word, width, height) => {
    const newPosition = {
      x: 20 + width,
      y: 100
    };

    setDroppedWords([...droppedWords, { word, position: newPosition }]);
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
          source={require("../../assets/exercises/rearrangement.png")}
        />
        <ThoughtBubble pH={20}>
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontFamily: "baloo-semibold",
              fontSize: 20,
              fontWeight: 500,
              width: "100%",
            }}
          >
            Unë ndez zjarrin.
          </Text>
        </ThoughtBubble>
      </View>
      <View style={styles.textArea}>
        <View style={styles.dashedLines}>
          <View 
            style={styles.dashedLine}
            ref={(ref) => dashedLineRefs.current[0] = ref}
          ></View>
          <View 
            style={styles.dashedLine}
            ref={(ref) => dashedLineRefs.current[1] = ref}
          ></View>
          <View 
            style={styles.dashedLine}
            ref={(ref) => dashedLineRefs.current[2] = ref}
          ></View>
        </View>
        <View style={styles.draggableWords}>
          {combinedWords.map((word, index) => (
            <Draggable key={index} text={word} onDrop={handleDrop} dashedLineDimensions={dashedLineDimensions.current}/>
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
    paddingVertical: 30,
    paddingHorizontal: 15,
    gap: 30,
  },
  header: {
    color: "white",
    fontSize: 22,
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
    flexDirection: "column",
  },
  dashedLines: {
    width: "100%",
    position: 'relative',
  },
  dashedLine: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 25,
  },
  draggableWords: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  draggableWord: {
    margin: 5,
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Rearrangement;
