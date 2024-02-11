import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import LegendItem from "../components/LegendItem";
import SearchFriends from "../components/SearchFriends";
import userStore from "../store/UserStore";
import { observer } from "mobx-react";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import {
  searchUsers,
  updateAvatar,
  sendFriendRequest,
  acceptFriendRequest,
  removeFriendRequest,
} from "../api";
import TopTabNavigator from "../components/TopTabNavigator";
import { getAvatar, legend } from "../utils";
import { menuScreens } from '../utils/constants';
import { useAvatarContext } from '../context/AvatarContext';


const ProfileScreen = observer(() => {
  const navigation = useNavigation();
  const [user, setUser] = useState(userStore.user);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const { avatarState } = useAvatarContext();

  useEffect(() => {
    if (searchInput !== "") handleSearch();
  }, [JSON.stringify(user)]);

  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const handleSearch = async () => {
    try {
      await searchUsers(searchInput)
        .then((response) => {
          const foundUsers = response.data.users;
          const updatedUsers = foundUsers.map((foundUser) => {
            const friend = user.friends.find(
              (friend) =>
                friend.friendId.toString() === foundUser._id.toString()
            );
            if (friend && friend.status === "Friends") {
              return { ...foundUser, friendshipStatus: "F" };
            } else if (friend && friend.status === "Pending") {
              return { ...foundUser, friendshipStatus: "P" };
            } else if (friend && friend.status === "Resolve") {
              return { ...foundUser, friendshipStatus: "R" };
            } else {
              return { ...foundUser, friendshipStatus: "NF" };
            }
          });
          setUsers(updatedUsers);
        })
        .catch((error) => {
          Alert.alert(
            "An error has occurred while trying to search for users. Please try again later."
          );
          console.log("error", error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendFriendRequest = async (friendId) => {
    try {
      const res = await sendFriendRequest(user._id, friendId);
      if (res) {
        const newUser = await userStore.getUser(user._id);
        setUser(newUser);
        userStore.setUser(newUser);
      }
    } catch (error) {
      console.error("Error sending friend request:", error.message);
    }
  };

  const handleAcceptFriendRequest = async (friendId) => {
    try {
      const res = await acceptFriendRequest(user._id, friendId);
      if (res) {
        const newUser = await userStore.getUser(user._id);
        setUser(newUser);
        userStore.setUser(newUser);
      }
    } catch (error) {
      console.error("Error accepting friend request:", error.message);
    }
  };

  const handleRemoveFriendRequest = async (friendId) => {
    try {
      const res = await removeFriendRequest(user._id, friendId);
      if (res) {
        const newUser = await userStore.getUser(user._id);
        setUser(newUser);
        userStore.setUser(newUser);
      }
    } catch (error) {
      console.error("Error removing friend:", error.message);
    }
  };

  const handleLogout = async () => {
    if (JSON.stringify(avatarState) !== JSON.stringify(user.avatar))
      await updateAvatar(user._id, avatarState);

    try {
      await userStore.logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
    
    if (!userStore.user) {
      navigation.navigate("Start");
    } else {
      console.warn("User state is persisting.");
    }
  };

  return isCustomizing ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#212832" }}>
      <View style={styles.base}>
        <View style={{ ...styles.picContainer, backgroundColor: avatarState.background }}>
          <View style={styles.avatar}>
            {getAvatar(avatarState.avatar, {
              colors: { ...avatarState },
            })}
          </View>
          <TouchableOpacity
            style={styles.settingTwo}
            onPress={() => setIsCustomizing(!isCustomizing)}
          >
            <Ionicons name={"brush-outline"} size={30} color={"#212832"} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TopTabNavigator
            tabScreens={menuScreens}
          />
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#212832" }}>
      <View style={styles.base}>
        <View style={{ ...styles.picContainer, backgroundColor: avatarState.background }}>
          <View style={styles.avatar}>
            {getAvatar(avatarState.avatar, {
              colors: { ...avatarState },
            })}
          </View>
          <TouchableOpacity
            style={styles.settingOne}
            onPress={() => setIsCustomizing(!isCustomizing)}
          >
            <Ionicons name={"brush-outline"} size={30} color={"#212832"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingTwo}
            onPress={handleLogout}
          >
            <Ionicons name={"settings-outline"} size={30} color={"#212832"} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.infoContainer}>
            <View style={styles.mainTitle}>
              <Text style={styles.name}>{user.name}</Text>
              <Image
                source={require("../assets/navigation/albanian-flag.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <Text style={styles.details}>{user.username}</Text>
            <Text style={styles.details}>
              Joined {dayjs(user.joindDate).format("MMMM YYYY")}
            </Text>
            <Text style={styles.accentDetail}>
              {(user.friends &&
                user.friends.filter((f) => f.status === "Friends").length) ||
                0}{" "}
              friends
            </Text>
            <View style={styles.buttons}>
              <CustomButton
                title="Add friends"
                color="#944ADE"
                bgColor="#212832"
                borderColor={"#2E3845"}
                hasTopBorder
                onPress={() => setIsOpen(true)}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.mainTitle}>
              <Text style={styles.name}>Information</Text>
            </View>
            <View style={styles.legend}>
              {legend.map((el, id) => (
                <View style={styles.button} key={id}>
                  <LegendItem
                    value={el.value}
                    description={el.dsc}
                    src={el.src}
                    color="#944ADE"
                    bgColor="#212832"
                    borderColor={"#2E3845"}
                    hasTopBorder
                  />
                </View>
              ))}
            </View>
          </View>
          <SearchFriends
            users={users}
            isOpen={isOpen}
            searchInput={searchInput}
            handleSearch={handleSearch}
            dismiss={() => setIsOpen(!isOpen)}
            setSearchInput={(input) => setSearchInput(input)}
            handleRemoveFriendRequest={(id) => handleRemoveFriendRequest(id)}
            handleAcceptFriendRequest={(id) => handleAcceptFriendRequest(id)}
            handleSendFriendRequest={(id) => handleSendFriendRequest(id)}
          />
        </View>
      </View>
    </SafeAreaView >
  );
});

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#212832",
  },
  picContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 220,
    paddingTop: 20,
  },
  avatar: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  settingOne: {
    top: 20,
    right: 40,
    position: "absolute",
  },
  settingTwo: {
    top: 20,
    right: 10,
    position: "absolute",
  },
  mainTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 30,
    fontFamily: "baloo-semibold",
  },
  infoContainer: {
    flexDirection: "column",
    paddingTop: 10,
    padding: 20,
  },
  details: {
    color: "#DAE5EB",
    fontSize: 15,
    marginVertical: 2,
  },
  accentDetail: {
    color: "#944ADE",
    fontSize: 15,
    marginVertical: 8,
    fontWeight: "600",
  },
  buttons: {
    display: "flex",
    width: "90%",
    height: 55,
    justifyContent: "center",
    justifySelf: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  legend: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 150,
  },
});

export default ProfileScreen;
