import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { practices } from "../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import Practice from "../components/Practice";

const PracticeScreen = () => {
  const [practice, setPractice] = useState(null);
  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const Practices = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={styles.banner}>
          <LinearGradient
            colors={["rgb(19, 55, 115)", "rgb(27, 88, 111)", "rgb(12, 51, 76)"]}
            start={{ x: 0.378, y: 1.003 }}
            end={{ x: 0.378, y: 0 }}
            style={styles.background}
          />
          <View style={styles.bannerContent}>
            <Image
              source={require("../assets/practice/done-bird.png")}
              style={styles.bannerImage}
            />
            <Text style={styles.text}>
              Target your weaknesses with personalized practice exercises
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            paddingHorizontal: 20,
            gap: 20,
          }}
        >
          {practices.map((practice, index) => {
            const { name, image, size } = practice;
            return (
              <TouchableOpacity
                style={styles.container}
                key={index}
                onPress={() => setPractice(practice)}
              >
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  {name && (
                    <Text
                      style={{
                        fontFamily: "baloo-semibold",
                        color: "white",
                        fontWeight: 900,
                        fontSize: 20,
                      }}
                    >
                      {name}
                    </Text>
                  )}
                </View>
                <Image
                  key={index}
                  source={image}
                  style={{
                    width: size,
                    height: size,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#212832" }}>
      <View style={styles.base}>
        {practice !== null ? (
          <Practice
            practice={practice}
            setPractice={(val) => setPractice(val)}
          />
        ) : (
          <Practices />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
  },
  banner: {
    width: "100%",
    height: 350,
  },
  background: {
    position: "relative",
    width: "100%",
    height: 350,
  },
  bannerContent: {
    flexDirection: "column",
    alignItems: "center",
    bottom: "80%",
    gap: 20,
  },
  bannerImage: {
    width: 150,
    height: 150,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "baloo-semibold",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#212832",
    padding: 12,
    borderRadius: 12,
    borderColor: "#2E3845",
    borderWidth: 3,
    borderBottomWidth: 6,
  },
});

export default PracticeScreen;
