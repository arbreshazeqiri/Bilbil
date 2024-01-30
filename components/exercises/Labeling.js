import React, { useState } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import CustomCard from "../CustomCard";

const Labeling = () => {
  const [checked, setChecked] = useState(null);

  const handleSetChecked = (index) => {
    setChecked(index);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
            src={require(`../../assets/items/fire.png`)}
            isChecked={checked === index}
            setIsChecked={handleSetChecked}
          />
        ))}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 50,
    gap: 40,
  },
  headerContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    gap: 10,
  },
  header: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
  },
  word: {
    fontSize: 20,
    color: "#944ADE",
    fontFamily: "baloo-semibold",
    fontWeight: "600",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 20,
    rowGap: 40,
  },
});

export default Labeling;
