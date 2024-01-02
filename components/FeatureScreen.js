import React from "react";
import { View, Text } from "react-native";
import Svg, { Image as SvgImage } from "react-native-svg";

const FeatureScreen = ({ route }) => {
    const { tabIndex } = route.params;

    let content = null;

    const avatars = [
        {
            name: 0,
            source: require(`../assets/avatars/Group0.svg`),
        },
        {
            name: 1,
            source: require(`../assets/avatars/Group1.svg`),
        },
        {
            name: 2,
            source: require(`../assets/avatars/Group2.svg`),
        },
        {
            name: 3,
            source: require(`../assets/avatars/Group3.svg`),
        },
        {
            name: 4,
            source: require(`../assets/avatars/Group4.svg`),
        },
        {
            name: 5,
            source: require(`../assets/avatars/Group5.svg`),
        },
        {
            name: 6,
            source: require(`../assets/avatars/Group6.svg`),
        },
        {
            name: 7,
            source: require(`../assets/avatars/Group7.svg`),
        },
        {
            name: 8,
            source: require(`../assets/avatars/Group8.svg`),
        },
        {
            name: 9,
            source: require(`../assets/avatars/Group9.svg`),
        },
        {
            name: 10,
            source: require(`../assets/avatars/Group10.svg`),
        },
        {
            name: 11,
            source: require(`../assets/avatars/Group11.svg`),
        },
        {
            name: 12,
            source: require(`../assets/avatars/Group12.svg`),
        },
        {
            name: 13,
            source: require(`../assets/avatars/Group13.svg`),
        },
        {
            name: 14,
            source: require(`../assets/avatars/Group14.svg`),
        },
    ];


    switch (tabIndex) {
        case 0:
            content = (
                <View style={{ flexDirection: "row", flexWrap: "wrap", backgroundColor: 'gray' }}>
                    {avatars.map((avatar, index) => (
                        <View key={index} style={{ margin: 5, backgroundColor: 'lightgray' }}>
                            <Svg width={120} height={120}>
                                <SvgImage
                                    href={avatar.source}
                                    width={100}
                                    height={100}
                                />
                            </Svg>
                        </View>
                    ))}
                </View>
            );
            break;

        default:
            content = <Text>Default Content</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
            }}
        >
            {content}
        </View>
    );
};

export default FeatureScreen;
