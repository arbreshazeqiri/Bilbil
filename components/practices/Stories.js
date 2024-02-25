import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { stories } from "../../utils/language";
import { colors, darkerColors } from "../../utils/constants";
import Story from "./Story";

const Stories = () => {
  const [story, setStory] = useState(null);

  const Stories = () => (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.subText}>
          Improve your reading and comprehension with short stories!
        </Text>
      </View>
      <View style={styles.stories}>
        {stories.map((story, index) => {
          return (
            <View style={styles.story} key={index}>
              <TouchableOpacity
                style={[
                  styles.imageContainer,
                  {
                    backgroundColor: colors[index % colors.length],
                    borderColor: darkerColors[index % darkerColors.length],
                  },
                ]}
                onPress={() => setStory(story)}
              >
                <Image source={story.image} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.title}>{story.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );

  return story ? <Story story={story} setStory={(val) => setStory(val)} /> : <Stories />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 20,
    justifyContent: "start",
    alignItems: "center",
    gap: 30,
  },
  texts: {
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontSize: 20,
    fontFamily: "baloo",
    color: "white",
    textAlign: "center",
  },
  stories: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 30,
    rowGap: 30,
  },
  story: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  imageContainer: {
    padding: 6,
    borderRadius: 16,
    borderWidth: 1.5,
    borderBottomWidth: 6,
  },
  title: {
    fontSize: 20,
    fontFamily: "baloo-semibold",
    color: "white",
    flexWrap: "wrap",
  },
});

export default Stories;
