import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { avatars, hairColors, skinColors, eyeColors, bgColors } from "../utils";

const FeatureScreen = ({ route }) => {
    const { tabIndex, setAvatar, setHair, setEyes, setSkin, setSkinDetails, setBackground } = route.params;
    const [pickedAvatar, setPickedAvatar] = useState(0);
    const [pickedHair, setPickedHair] = useState('#47323B');
    const [pickedSkin, setPickedSkin] = useState(null);
    const [pickedSkinDetails, setPickedSkinDetails] = useState(null);
    const [pickedEyes, setPickedEyes] = useState(null);
    const [pickedBackground, setPickedBakground] = useState('lightblue');

    let content = null;

    switch (tabIndex) {
        case 0:
            content = (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        backgroundColor: "#212832",
                        rowGap: 10,
                        padding: 10,
                        gap: 4,
                    }}
                >
                    {avatars.map((avatar, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                setPickedAvatar(index)
                                setAvatar(index)
                            }}
                            key={index}
                        >
                            <View
                                key={index}
                                style={{
                                    width: 125,
                                    height: 115,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "lightgray",
                                    shadowOpacity: 1,
                                    shadowOffset: { width: 4, height: 2 },
                                    shadowColor: pickedAvatar === index ? "#8240C5" : "#2E3845",
                                    shadowRadius: 2,
                                    backgroundColor: "#212832",
                                    borderRadius: 8,
                                    borderColor: pickedAvatar === index ? "#8240C5" : "#2E3845",
                                    borderWidth: 1,
                                    borderTopWidth: 2,
                                    borderBottomWidth: 5,
                                }}
                            >
                                {avatar}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            );
            break;
        case 1:
            content = (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        backgroundColor: "#212832",
                        rowGap: 10,
                        padding: 10,
                        gap: 4,
                    }}
                >
                    {hairColors.map((color, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                setPickedHair(color)
                                setHair(color)
                            }}
                            key={index}
                        >
                            <View
                                key={index}
                                style={{
                                    width: 125,
                                    height: 115,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "lightgray",
                                    shadowOpacity: 1,
                                    shadowOffset: { width: 4, height: 2 },
                                    shadowColor: pickedHair === color ? "#8240C5" : "#2E3845",
                                    shadowRadius: 2,
                                    backgroundColor: color,
                                    borderRadius: 8,
                                    borderColor: pickedHair === color ? "#8240C5" : "#2E3845",
                                    borderWidth: 1,
                                    borderTopWidth: 2,
                                    borderBottomWidth: 5,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            );
            break;
        case 2:
            content = (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        backgroundColor: "#212832",
                        rowGap: 10,
                        padding: 10,
                        gap: 4,
                    }}
                >
                    {skinColors.map((color, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                setPickedSkin(color)
                                setSkin(color)
                            }}
                            key={index}
                        >
                            <View
                                key={index}
                                style={{
                                    width: 125,
                                    height: 115,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "lightgray",
                                    shadowOpacity: 1,
                                    shadowOffset: { width: 4, height: 2 },
                                    shadowColor: pickedSkin === color ? "#8240C5" : "#2E3845",
                                    shadowRadius: 2,
                                    backgroundColor: color,
                                    borderRadius: 8,
                                    borderColor: pickedSkin === color ? "#8240C5" : "#2E3845",
                                    borderWidth: 1,
                                    borderTopWidth: 2,
                                    borderBottomWidth: 5,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            );
            break;
        case 3:
            content = (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        backgroundColor: "#212832",
                        rowGap: 10,
                        padding: 10,
                        gap: 4,
                    }}
                >
                    {skinColors.map((color, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                setPickedSkinDetails(color)
                                setSkinDetails(color)
                            }}
                            key={index}
                        >
                            <View
                                key={index}
                                style={{
                                    width: 125,
                                    height: 115,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "lightgray",
                                    shadowOpacity: 1,
                                    shadowOffset: { width: 4, height: 2 },
                                    shadowColor: pickedSkinDetails === color ? "#8240C5" : "#2E3845",
                                    shadowRadius: 2,
                                    backgroundColor: color,
                                    borderRadius: 8,
                                    borderColor: pickedSkinDetails === color ? "#8240C5" : "#2E3845",
                                    borderWidth: 1,
                                    borderTopWidth: 2,
                                    borderBottomWidth: 5,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            );
            break;
        case 4:
            content = (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        backgroundColor: "#212832",
                        rowGap: 10,
                        padding: 10,
                        gap: 4,
                    }}
                >
                    {eyeColors.map((color, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                setPickedEyes(color)
                                setEyes(color)
                            }}
                            key={index}
                        >
                            <View
                                key={index}
                                style={{
                                    width: 125,
                                    height: 115,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "lightgray",
                                    shadowOpacity: 1,
                                    shadowOffset: { width: 4, height: 2 },
                                    shadowColor: pickedEyes === color ? "#8240C5" : "#2E3845",
                                    shadowRadius: 2,
                                    backgroundColor: color,
                                    borderRadius: 8,
                                    borderColor: pickedEyes === color ? "#8240C5" : "#2E3845",
                                    borderWidth: 1,
                                    borderTopWidth: 2,
                                    borderBottomWidth: 5,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            );
            break;
        case 5:
            content = (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        backgroundColor: "#212832",
                        rowGap: 10,
                        padding: 10,
                        gap: 4,
                    }}
                >
                    {bgColors.map((color, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                setPickedBakground(color)
                                setBackground(color)
                            }}
                            key={index}
                        >
                            <View
                                key={index}
                                style={{
                                    width: 125,
                                    height: 115,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "lightgray",
                                    shadowOpacity: 1,
                                    shadowOffset: { width: 4, height: 2 },
                                    shadowColor: pickedBackground === color ? "#8240C5" : "#2E3845",
                                    shadowRadius: 2,
                                    backgroundColor: color,
                                    borderRadius: 8,
                                    borderColor: pickedBackground === color ? "#8240C5" : "#2E3845",
                                    borderWidth: 1,
                                    borderTopWidth: 2,
                                    borderBottomWidth: 5,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            );
            break;

        default:
            content = <Text>Default Content</Text>;
            break;
    }

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}
        >
            {content}
        </ScrollView>
    );
};

export default FeatureScreen;
