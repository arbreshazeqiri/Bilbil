import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Group0 from "../assets/avatars/Group0";
import Group1 from "../assets/avatars/Group1";
import Group2 from "../assets/avatars/Group2";
import Group3 from "../assets/avatars/Group3";
import Group4 from "../assets/avatars/Group4";
import Group5 from "../assets/avatars/Group5";

const FeatureScreen = ({ route }) => {
    const { tabIndex, setAvatar } = route.params;
    const [pickedAvatar, setPickedAvatar] = useState(0);

    let content = null;

    const avatars = [
        <Group0 />,
        <Group1 />,
        <Group2 />,
        <Group3 />,
        <Group4 />,
        <Group5 />,
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
