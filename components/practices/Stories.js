import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Stories = ({ active, setActive }) => {
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.mainText}>Stories</Text>
        <Text style={styles.subText}>
          Improve your reading and listening with short stories!
        </Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texts: {
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontFamily: 'baloo-semibold',
    color: 'white'
  },
  subText: {
    fontSize: 20,
    fontFamily: 'baloo',
    color: 'white',
    textAlign: 'center'
  }
});

export default Stories;
