import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ActivityWidget = ({ name, type, description }) => {
  const getLevel = (desc) => {
    const d = desc.split(" ")[2];
    switch (d) {
      case "Bronze.":
        return require("../assets/news/bronze.png");
      case "Silver.":
        return require("../assets/news/silver.png");
      case "Gold.":
        return require("../assets/news/gold.png");
      case "Platinum.":
        return require("../assets/news/platinum.png");
      case "Diamond.":
        return require("../assets/news/diamond.png");
      default:
        return require("../assets/news/iron.png");
    }
  };

  const getIcon = (type, d) => {
    switch (type) {
      case "lesson":
        return require("../assets/news/lesson.png");
      case "unit":
        return require("../assets/news/unit.png");
      case "chapter":
        return getLevel(d);
      case "friends":
        return require("../assets/news/friends.png");
      default:
        return require("../assets/news/unit.png");
    }
  };
  return (
    <View style={styles.activityWidget}>
      <View style={styles.userData}>
        <Text style={styles.userDetailOne}>{name}</Text>
        <Text style={styles.userDetailTwo}>{description}</Text>
      </View>
      <View>
        <Image
          source={getIcon(type, description)}
          style={{ width: 80, height: 80 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityWidget: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#AFAFAF",
    backgroundColor: "#2B3440",
    padding: 10,
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
  },
  userDetailTwo: {
    color: "#DAE5EB",
    fontSize: 14,
    marginVertical: 2,
  },
});

export default ActivityWidget;
