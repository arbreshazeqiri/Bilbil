import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { avatars, hairColors, skinColors, eyeColors, bgColors } from "../utils";

const FeatureScreen = ({ route }) => {
    const { tabIndex, setAvatar, setHair, setEyes, setSkin, setSkinDetails, setBackground } = route.params;
    const [pickedAvatar, setPickedAvatar] = useState(0);
    const [pickedHair, setPickedHair] = useState('#47323B');
    const [pickedSkin, setPickedSkin] = useState(null);
    const [pickedSkinDetails, setPickedSkinDetails] = useState(null);
    const [pickedEyes, setPickedEyes] = useState(null);
    const [pickedBackground, setPickedBackground] = useState('lightblue');

    
const Picker = ({ type, list, pickedValue, setValue }) => {
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
                        setValue(value);
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
                            shadowColor: pickedValue === value ? "#8240C5" : "#2E3845",
                            shadowRadius: 2,
                            backgroundColor: value,
                            borderRadius: 8,
                            borderColor: pickedValue === value ? "#8240C5" : "#2E3845",
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

    const handleValueChange = (setter, parentSetter, value) => {
        setter(value);
        parentSetter(value);
    };

    const renderColorPicker = (type, list, pickedValue, parentSetter, setter) => {
        return (
            <Picker
                type={type}
                list={list}
                pickedValue={pickedValue}
                setValue={(value) => handleValueChange(setter, parentSetter, value)}
            />
        );
    };

    let content = null;

    switch (tabIndex) {
        case 0:
            content = renderColorPicker("avatar", avatars, pickedAvatar, setPickedAvatar, setAvatar);
            break;
        case 1:
            content = renderColorPicker("hair", hairColors, pickedHair, setPickedHair, setHair);
            break;
        case 2:
            content = renderColorPicker("skin", skinColors, pickedSkin, setPickedSkin, setSkin);
            break;
        case 3:
            content = renderColorPicker("skinDetails", skinColors, pickedSkinDetails, setPickedSkinDetails, setSkinDetails);
            break;
        case 4:
            content = renderColorPicker("eyes", eyeColors, pickedEyes, setPickedEyes, setEyes);
            break;
        case 5:
            content = renderColorPicker("background", bgColors, pickedBackground, setPickedBackground, setBackground);
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
