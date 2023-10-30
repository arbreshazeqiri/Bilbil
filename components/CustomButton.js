import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import BalooSemiBoldFont from '../assets/fonts/Baloo-SemiBold.ttf';
import { useFonts } from 'expo-font';

const CustomButton = ({ onPress, title, color, bgColor, borderColor, hasTopBorder }) => {
    
    const [isLoaded] = useFonts({
        "baloo-semibold": BalooSemiBoldFont,
    });

    if (!isLoaded) {
        return null;
    }

    const styles = StyleSheet.create({
        appButtonContainer: {
            width: '100%',
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 2 },
            shadowColor: borderColor,
            shadowRadius: 2,
            backgroundColor: bgColor,
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 12,
            borderColor: borderColor,
            borderWidth: 1,
            borderTopWidth: hasTopBorder ? 2 : 0,
            borderBottomWidth: 5,
        },
        appButtonText: {
            fontSize: 18,
            color: color,
            fontFamily: 'baloo-semibold',
            fontWeight: "bold",
            alignSelf: "center",
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;