import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Card = ({ index, height = 200, src, label, isChecked, setIsChecked }) => {
  const styles = StyleSheet.create({
    cardContainer: {
      width: 150,
      height: height,
      paddingVertical: 15,
      justifyContent: 'space-around',
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: isChecked? "#2D1E3B" : "transparent",
      borderColor: isChecked ? "#8240C5" : "#2E3845",
      borderWidth: 1,
      borderTopWidth: 2,
      borderBottomWidth: 5,
    },
    label: {
      alignSelf: "center",
      fontSize: 20,
      color: "white",
      fontFamily: "baloo",
    },
    image: {
      width: 100,
      height: 100,
    }
  });

  return (
    <TouchableOpacity onPress={() => setIsChecked(index)}>
      <View style={styles.cardContainer}>
        {src && <Image style={styles.image} source={src} />}
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
