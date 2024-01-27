import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import userStore from "../store/UserStore";
import { headerIcons, levels } from "../utils/constants";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import CustomButton from "../components/CustomButton";

const HomeScreen = () => {
  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await userStore.logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  const HeaderIcons = ({ icons }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#212832",
      }}
    >
      {icons.map((icon, index) => (
        <View
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          key={index}
        >
          <Image
            key={index}
            source={icon.iconSource}
            style={{ width: icon.size, height: icon.size }}
          />
          {icon.value && (
            <Text style={{ color: "white", fontWeight: 900, fontSize: 18 }} onPress={handleLogout}>
              {icon.value}
            </Text>
          )}
        </View>
      ))}
    </View>
  );

  const handleContinueLevel = () => {

  }

  const Levels = ({ levels }) => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 20
        }}
      >
        {levels.map((level, index) => {
          const isDisabled = level.status === "Locked"
          return (
            <View
              style={{ backgroundColor: isDisabled ? 'gray' : level.color, flexDirection: "row", paddingHorizontal: 10, paddingVertical: 20, borderRadius: 10, alignItems: "center", justifyContent: 'space-between', width: '100%' }}
              key={index}
            >
              <View style={{ flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
                {level.cefr && (
                  <Text style={{ alignSelf: 'flex-start', backgroundColor: isDisabled ? 'rgba(91, 91, 91, 0.2)' : `rgba(255, 255, 255, 0.5)`, fontFamily: 'baloo-semibold', borderRadius: 6, paddingHorizontal: 6, color: isDisabled ? '#3c3c3c' : "white", fontWeight: 600, fontSize: 18 }}>
                    {level.cefr}
                  </Text>
                )}
                {level.chapter && (
                  <Text style={{ fontFamily: 'baloo', color: isDisabled ? '#3c3c3c' : "white", fontWeight: 900, fontSize: 25 }}>
                    {level.chapter}
                  </Text>
                )}
                {level.status && (
                  <Text style={{ color: isDisabled ? '#3c3c3c' : "white", fontWeight: 600, fontSize: 18 }}>
                    {level.status}
                  </Text>
                )}
                <View style={styles.button}>
                  <CustomButton
                    title={isDisabled ? level.status : "Continue"}
                    style={{ textTransform: 'capitalize' }}
                    color={isDisabled? "#3c3c3c" : "#212832"}
                    bgColor={isDisabled? "#9b9a9a" : "white"}
                    borderColor={isDisabled? "#707070" : "#cecece"}
                    isDisabled={isDisabled}
                    onPress={handleContinueLevel}
                  />
                </View>
              </View>
              <Image
                key={index}
                source={level.image}
                style={{
                  width: level.size,
                  height: level.size,
                  tintColor: isDisabled && '#3c3c3c',
                  opacity: isDisabled ? 0.5 : 1,
                }}
              />
            </View>
          )
        })}
      </ScrollView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#212832" }}>
      <View>
        <HeaderIcons icons={headerIcons} />
      </View>
      <View style={styles.base}>
        <Levels levels={levels} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#212832",
    padding: 20,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    color: "white",
    fontSize: 50,
  },
  greyscale: {
    filter: 'grayscale(100%)',
  },
  button: {
    marginTop: 10,
    width: 100,
    height: 55,
  },
});

export default HomeScreen;
