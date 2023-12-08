import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import BalooSemiBoldFont from '../assets/fonts/Baloo-SemiBold.ttf';
import { useFonts } from 'expo-font';
import { Ionicons } from 'react-native-vector-icons';

const CustomButton = ({ onPress, title, icon = false, iconName, color, bgColor, borderColor, hasTopBorder, iconSize = 30, fontSize = 18, hasVerticalPadding = true }) => {

    const [isLoaded] = useFonts({
        "baloo-semibold": BalooSemiBoldFont,
    });

    if (!isLoaded) {
        return null;
    }

    const styles = StyleSheet.create({
        appButtonContainer: {
            width: '100%',
            height: '100%',
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 2 },
            shadowColor: borderColor,
            shadowRadius: 2,
            backgroundColor: bgColor,
            borderRadius: 15,
            paddingVertical: hasVerticalPadding ? 12 : 4,
            paddingHorizontal: 12,
            borderColor: borderColor,
            borderWidth: 1,
            borderTopWidth: hasTopBorder ? 2 : 0,
            borderBottomWidth: 5,
            display: 'flex',
            gap: 4,
        },
        appButtonText: {
            fontSize: fontSize,
            color: color,
            fontFamily: 'baloo-semibold',
            fontWeight: "bold",
            alignSelf: "center",
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            {icon && <Ionicons
                name={iconName}
                size={iconSize}
                color={color}
            />}
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;