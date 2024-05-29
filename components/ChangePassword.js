import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomModal from "../components/CustomModal";
import { inputsList } from "../utils/constants";
import userStore from "../store/UserStore";
import { changePassword } from "../api";
import CustomButton from "./CustomButton";
import { Ionicons } from "@expo/vector-icons";

const ChangePassword = ({ isOpen, dismiss }) => {
  const user = userStore.user;
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangePassword = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      Alert.alert("Error", "New passwords do not match.");
      return;
    }

    try {
      const userId = user._id;
      const response = await changePassword(
        userId,
        passwords.oldPassword,
        passwords.newPassword
      );
      if (response.status === 200) {
        Alert.alert("Success", "Password updated successfully");
        dismiss();
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error.response.data.message || "Internal Server Error"
      );
    }
  };

  return (
    <CustomModal visible={isOpen} transparent={true} dismiss={dismiss}>
      <View style={styles.popupContent}>
        <Text style={styles.searchText}>Password</Text>
        <View style={styles.inputs}>
          {inputsList.map((s, i) => {
            return (
              <View style={styles.inputSet} key={i}>
                <Text style={styles.inputText}>{s.text}</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    onChangeText={(text) =>
                      setPasswords({ ...passwords, [s.value]: text })
                    }
                    value={user[s.value]}
                    secureTextEntry={!showPasswords[s.value]}
                    placeholder={s.placeholder}
                    placeholderTextColor="#AFAFAF"
                  />
                  <TouchableOpacity
                    style={styles.togglePassword}
                    onPress={() =>
                      setShowPasswords({
                        ...showPasswords,
                        [s.value]: !showPasswords[s.value],
                      })
                    }
                  >
                    <Ionicons
                      name={showPasswords[s.value] ? "eye" : "eye-off"}
                      size={20}
                      color={showPasswords[s.value] ? "#B76DF2" : "#AFAFAF"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.buttons}>
          <CustomButton
            icon={false}
            title="SAVE"
            iconSize={22}
            color="#212832"
            bgColor="#93D334"
            borderColor={"#7BB836"}
            onPress={handleChangePassword}
          />
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  popupContent: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    padding: 10,
  },
  searchText: {
    alignSelf: "center",
    color: "#AFAFAF",
    fontSize: 20,
    fontWeight: "600",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    borderWidth: 1,
    borderLeftRadius: 0,
    borderRightRadius: 0,
    borderRadius: 10,
    backgroundColor: "#2B3440",
    height: 40,
  },
  inputs: {
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: 20,
  },
  passwordInput: {
    color: "white",
    flex: 1,
    fontWeight: "semibold",
    padding: 10,
  },
  togglePassword: {
    padding: 10,
  },
  inputText: {
    color: "white",
    fontFamily: "baloo-semibold",
    fontSize: 18,
  },
  inputSet: {
    gap: 5,
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
});

export default ChangePassword;
