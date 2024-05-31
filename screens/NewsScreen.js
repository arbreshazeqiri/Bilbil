import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import BalooSemiBoldFont from "../assets/fonts/Baloo-SemiBold.ttf";
import BalooFont from "../assets/fonts/Baloo.ttf";
import UserWidget from "../components/UserWidget";
import ActivityWidget from "../components/ActivityWidget";
import userStore from "../store/UserStore";
import {
  getUserById,
  acceptFriendRequest,
  removeFriendRequest,
  getFriends,
} from "../api";

const NewsScreen = () => {
  const [user, setUser] = useState(userStore.user);
  const [friendReqs, setFriendReqs] = useState([]);
  const [friendAct, setFriendAct] = useState([]);
  const [isLoaded] = useFonts({
    baloo: BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  useEffect(() => {
    getFriendRequests();
    getFriendActivity();
  }, []);

  const getFriendRequests = async () => {
    try {
      const res = await getUserById(user._id);
      if (res.data) {
        const friendIds = res.data.user.friends
          .filter((f) => f.status === "Resolve")
          .map((fr) => fr.friendId);
        const friendsDetails = await Promise.all(friendIds.map(getUserById));
        setFriendReqs(friendsDetails.map((res) => res.data.user));
      }
    } catch (error) {
      console.error("Error in getting friend requests:", error.message);
    }
  };

  const getFriendActivity = async () => {
    try {
      const response = await getFriends(user._id);
      const activities = response.flatMap((f) =>
        f.activity.map((a) => {
          return { name: f.name, type: a.type, description: a.description };
        })
      );
      setFriendAct(activities);
    } catch (error) {
      console.error("Error fetching friend activities:", error);
    }
  };

  const handleSendFriendRequest = async (friendId) => {
    try {
      const res = await sendFriendRequest(user._id, friendId);
      if (res) {
        const newUser = await userStore.getUser(user._id);
        setUser(newUser);
        runInAction(() => {
          userStore.setUser(newUser);
        });
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#212832" }}>
      <View style={styles.container}>
        <Text style={styles.title}>News</Text>
        <View style={styles.section}>
          <Text style={styles.text}>Friend Requests</Text>
          {friendReqs.length > 0 ? (
            <ScrollView contentContainerStyle={styles.usersSection}>
              {friendReqs.map((foundUser, id) => (
                <UserWidget
                  key={id}
                  user={foundUser}
                  onSendRequest={handleSendFriendRequest}
                  onRemoveRequest={handleRemoveFriendRequest}
                  onAcceptRequest={handleAcceptFriendRequest}
                />
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.subText}>You have no new friend requests.</Text>
          )}
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Friend Activity</Text>
          {friendAct?.length > 0 ? (
            <ScrollView contentContainerStyle={styles.usersSection}>
              {friendAct?.map((act, id) => (
                <ActivityWidget
                  key={id}
                  name={act.name}
                  type={act.type}
                  description={act.description}
                />
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.subText}>You have no new friend activity.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    gap: 15,
    flex: 1,
  },
  section: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 30,
  },
  usersSection: {
    flexDirection: "column",
    gap: 15,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontFamily: "baloo-semibold",
    alignSelf: 'center',
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "baloo-semibold",
  },
  subText: {
    color: "gray",
    fontSize: 16,
  },
});

export default NewsScreen;
