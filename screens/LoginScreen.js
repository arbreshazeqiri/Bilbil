import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { useFonts } from "expo-font";
import CustomButton from "../components/CustomButton";
import { loginUser } from "../api";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import userStore from "../store/UserStore";
import { runInAction } from "mobx";
import { useAvatarContext } from "../context/AvatarContext";

const LoginScreen = () => {
  const { setAvatarObject } = useAvatarContext();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }
  const handleLogin = async () => {
    const user = {
      emailOrUsername: emailOrUsername,
      password: password,
    };

    try {
      const response = await loginUser(user);
      const { user: userData } = response.data;
      if (userData.avatar)
        setAvatarObject(userData.avatar);

      runInAction(() => {
        userStore.setUser(userData);
      });

      navigation.navigate("Menu");
    } catch (error) {
      Alert.alert("Login error");
      console.error("error", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"#212832"} barStyle={"light-content"} />
      <View style={styles.base}>
        <View style={styles.brand}>
          <Text style={styles.name}>WELCOME BACK</Text>
          <TextInput
            style={styles.inputTop}
            onChangeText={(text) => setEmailOrUsername(text)}
            value={emailOrUsername}
            placeholder="Email or username"
            placeholderTextColor="#AFAFAF"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={!showPassword}
              placeholder="Password"
              placeholderTextColor="#AFAFAF"
            />
            <TouchableOpacity
              style={styles.togglePassword}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "ios-eye" : "ios-eye-off"}
                size={20}
                color={showPassword ? "#B76DF2" : "#AFAFAF"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttons}>
          <CustomButton
            title="LOG IN"
            color="#212832"
            bgColor="#FF9100"
            borderColor={"#E58200"}
            onPress={handleLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212832",
    paddingTop: 0,
    padding: 20,
    gap: 20,
  },
  brand: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
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
  inputTop: {
    color: "white",
    width: "100%",
    borderRadius: 10,
    height: 40,
    fontWeight: "semibold",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    padding: 10,
    backgroundColor: "#2B3440",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 10,
    backgroundColor: "#2B3440",
    height: 40,
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
  name: {
    color: "white",
    fontSize: 40,
    fontFamily: "baloo-semibold",
  },
  banner: {
    color: "#797979",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "baloo",
  },
});

export default LoginScreen;
