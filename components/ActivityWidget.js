import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ActivityWidget = ({ user, description, icon }) => {
  const getIcon = (type) => {
    switch (type) {
      case "lesson":
        return "smth";
      case "unit":
        return "smth-better";
      case "chapter":
        return "smth-betterer";
      case "friends":
        return "friends";
      default:
        return null;
    }
  };
  return (
    <View style={styles.activityWidget}>
      <View style={styles.userData}>
        <Text style={styles.userDetailOne}>{activity.userName}</Text>
        <Text>{activity.message}</Text>
        <Image
          key={index}
          source={getIcon(activity.type)}
          style={{ width: 20, height: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityWidget: {
    color: "white",
    width: "100%",
    height: 60,
    fontWeight: "semibold",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    backgroundColor: "#2B3440",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userData: {
    flexDirection: "column",
  },
  userDetailOne: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ActivityWidget;
