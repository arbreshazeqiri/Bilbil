import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({
  onPress,
  title,
  icon = false,
  iconName,
  color,
  bgColor,
  borderColor,
  hasTopBorder,
  iconSize = 30,
  fontSize = 18,
  hasVerticalPadding = true,
  isDisabled = false,
  borderRadius = 15,
}) => {
  const [isLoaded] = useFonts({
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    appButtonContainer: {
      width: "100%",
      height: "100%",
      backgroundColor: bgColor,
      borderRadius: borderRadius,
      paddingVertical: hasVerticalPadding ? 12 : 4,
      paddingHorizontal: 12,
      borderColor: borderColor,
      borderWidth: 1,
      borderTopWidth: hasTopBorder ? 2 : 0,
      borderBottomWidth: 5,
      display: "flex",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    appButtonText: {
      fontSize: fontSize,
      color: color,
      fontFamily: "baloo-semibold",
      fontWeight: "bold",
      alignSelf: "center",
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.appButtonContainer}
      disabled={isDisabled}
    >
      {icon && <Ionicons name={iconName} size={iconSize} color={color} />}
      {title && <Text style={styles.appButtonText}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
