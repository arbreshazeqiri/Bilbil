import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Group0 from "../assets/avatars/Group0";
import Group1 from "../assets/avatars/Group1";
import Group2 from "../assets/avatars/Group2";
import Group3 from "../assets/avatars/Group3";
import Group4 from "../assets/avatars/Group4";
import Group5 from "../assets/avatars/Group5";

const FeatureScreen = ({ route }) => {
    const { tabIndex, setAvatar, setHair, setEyes, setSkin, setSkinDetails, setBackground } = route.params;
    const [pickedAvatar, setPickedAvatar] = useState(0);
    const [pickedHair, setPickedHair] = useState('#47323B');
    const [pickedSkin, setPickedSkin] = useState(null);
    const [pickedSkinDetails, setPickedSkinDetails] = useState(null);
    const [pickedEyes, setPickedEyes] = useState(null);
    const [pickedBackground, setPickedBakground] = useState('lightblue');

    let content = null;

    const avatars = [
        <Group0 />,
        <Group1 />,
        <Group2 />,
        <Group3 />,
        <Group4 />,
        <Group5 />,
    ];

    const hairColors = [
        "#6C272A",
        "#D9B580",
        "#B3B3B3",
        "#D0B987",
        "#A28050",
        "#89542A",
        "#5D3B1D",
        "#513C2C",
        "#312A22",
        "#2B241C",
        "#1C1915",
      ];

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

        default:
            content = <Text>Default Content</Text>;
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
