import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const UserWidget = ({
  user,
  onSendRequest,
  onRemoveRequest,
  onAcceptRequest,
}) => {
  return (
    <View style={styles.userWidget}>
      <View style={styles.userData}>
        <Text style={styles.userDetailOne}>{user.name}</Text>
        <Text style={styles.userDetailTwo}>{user.username}</Text>
      </View>
      <View style={styles.userButton}>
        {user.friendshipStatus === "NF" ? (
          <CustomButton
            icon={true}
            iconName={"person-add"}
            title=""
            iconSize={22}
            color="#212832"
            bgColor="#FF9100"
            borderColor={"#E58200"}
            onPress={() => onSendRequest(user._id)}
          />
        ) : user.friendshipStatus === "F" ? (
          <CustomButton
            icon={true}
            iconName={"person-remove"}
            title=""
            iconSize={22}
            color="#212832"
            bgColor="#FF9100"
            borderColor={"#E58200"}
            onPress={() => onRemoveRequest(user._id)}
          />
        ) : user.friendshipStatus === "P" ? (
          <CustomButton
            icon={true}
            iconName={"close"}
            title=""
            iconSize={22}
            color="#212832"
            bgColor="#FF9100"
            borderColor={"#E58200"}
            onPress={() => onRemoveRequest(user._id)}
          />
        ) : (
          <View style={styles.twoButtons}>
            <View style={styles.userButton}>
              <CustomButton
                icon={true}
                iconName={"checkmark"}
                title=""
                iconSize={25}
                color="#ffffff"
                bgColor="#93D334"
                borderColor={"#7BB836"}
                onPress={() => onAcceptRequest(user._id)}
              />
            </View>
            <View style={styles.userButton}>
              <CustomButton
                icon={true}
                iconName={"close"}
                title=""
                iconSize={25}
                color="#ffffff"
                bgColor="#ED5654"
                borderColor={"#D63C3A"}
                onPress={() => onRemoveRequest(user._id)}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userWidget: {
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
  userDetailTwo: {
    color: "#DAE5EB",
    fontSize: 14,
    marginVertical: 2,
  },
  userButton: {
    width: "fit-content",
  },
  twoButtons: {
    gap: 10,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserWidget;
