import React, { useState } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import CustomCard from "../CustomCard";
import CustomButton from "../CustomButton";

const Labeling = ({ onComplete }) => {
  const [checked, setChecked] = useState(null);

  const handleSetChecked = (index) => {
    setChecked(index);
  };

  const handleNextStep = () => {
    onComplete(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.base}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Select the correct image</Text>
          <Text style={styles.word}>zjarr</Text>
        </View>
        <View style={styles.cardsContainer}>
          {[0, 1, 2, 3].map((index) => (
            <CustomCard
              key={index}
              index={index}
              label={"fire"}
              src={require(`../../assets/items/zjarr.png`)}
              isChecked={checked === index}
              setIsChecked={handleSetChecked}
            />
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
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  content: {
    gap: 15,
  },
  headerContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    gap: 2,
  },
  header: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
  },
  word: {
    fontSize: 25,
    color: "#944ADE",
    fontFamily: "baloo-semibold",
    fontWeight: "600",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    rowGap: 30,
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Labeling;
