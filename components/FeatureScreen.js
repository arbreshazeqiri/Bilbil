import React from "react";
import { ScrollView, View, Text } from "react-native";
import Group0 from "../assets/avatars/Group0";
import Group1 from "../assets/avatars/Group1";
import Group2 from "../assets/avatars/Group2";

const FeatureScreen = ({ route }) => {
    const { tabIndex } = route.params;

    let content = null;

    const avatars = [
        {
            name: 0,
            component: <Group0 />,
        },
        {
            name: 1,
            component: <Group1 />,
        },
        {
            name: 2,
            component: <Group2 />,
        },
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
                                shadowColor: "#2E3845",
                                shadowRadius: 2,
                                backgroundColor: "#212832",
                                borderRadius: 8,
                                borderColor: "#2E3845",
                                borderWidth: 1,
                                borderTopWidth: 2,
                                borderBottomWidth: 5,
                            }}
                        >
                            {avatar.component}
                        </View>
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
