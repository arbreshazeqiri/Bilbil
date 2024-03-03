import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import userStore from "../../store/UserStore";

const Mistakes = () => {
  const { mistakes } = userStore.user;
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>{mistakes.length} mistakes</Text>
      <ScrollView contentContainerStyle={styles.mistakes}>
        {mistakes.map((story, index) => {
          return (
            <View
              style={
                index === 0
                  ? styles.top
                  : index === mistakes.length - 1
                  ? styles.bottom
                  : styles.middle
              }
              key={index}
            >
              <View style={styles.titleImg}>
                <Image
                  source={require("../../assets/practice/broken-heart.png")}
                  style={styles.image}
                />
                <Text style={styles.subText}>{story.title}</Text>
              </View>
              <Text style={styles.title}>{story.prop}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: 10,
    gap: 10,
  },
  subText: {
    fontSize: 20,
    fontFamily: "baloo",
    color: "#c7c7c7",
    flexWrap: "wrap",
  },
  mistakes: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: 20,
  },
  image: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  titleImg: {
    flexDirection: "row",
    alignItems: "start",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "baloo-semibold",
    color: "white",
    flexWrap: "wrap",
    textAlign: "left",
  },
  top: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    gap: 10,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#AFAFAF",
    padding: 10,
    paddingRight: 30,
    backgroundColor: "#2B3440",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  middle: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    gap: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    backgroundColor: "#2B3440",
    borderTopWidth: 0,
    padding: 10,
    paddingRight: 30,
  },
  bottom: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    gap: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    backgroundColor: "#2B3440",
    padding: 10,
    paddingRight: 30,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 10,
  },
});

export default Mistakes;
