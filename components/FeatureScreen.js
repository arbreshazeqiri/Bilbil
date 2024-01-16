import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { avatars, hairColors, skinColors, eyeColors, bgColors } from "../utils";
import { useAvatarContext } from "../context/AvatarContext";

const FeatureScreen = ({ route }) => {
    const { tabIndex } = route.params;
    const { avatarState, setAvatar } = useAvatarContext();

    const Picker = ({ type, list }) => {
        return (
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
                {list.map((value, index) => (
                    <TouchableOpacity
                        onPress={() => {
                            setAvatar(type, type === 'avatar' ? index : value);
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
                                shadowColor: avatarState[type] === value ? "#8240C5" : "#2E3845",
                                shadowRadius: 2,
                                backgroundColor: value,
                                borderRadius: 8,
                                borderColor: avatarState[type] === value ? "#8240C5" : "#2E3845",
                                borderWidth: 1,
                                borderTopWidth: 2,
                                borderBottomWidth: 5,
                            }}
                        >
                            {type === "avatar" && <>{value}</>}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const renderColorPicker = (type, list) => {
        return (
            <Picker
                type={type}
                list={list}
            />
        );
    };

    let content = null;

    switch (tabIndex) {
        case 0:
            content = renderColorPicker("avatar", avatars);
            break;
        case 1:
            content = renderColorPicker("hair", hairColors);
            break;
        case 2:
            content = renderColorPicker("skin", skinColors);
            break;
        case 3:
            content = renderColorPicker("skinDetails", skinColors);
            break;
        case 4:
            content = renderColorPicker("eyes", eyeColors);
            break;
        case 5:
            content = renderColorPicker("background", bgColors);
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
