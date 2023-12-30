import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomModal from "../components/CustomModal";
import SearchInput from "./SearchInput";
import UserWidget from "./UserWidget";

const SearchFriends = ({
  isOpen,
  dismiss,
  searchInput,
  setSearchInput,
  handleSearch,
  users,
  handleRemoveFriendRequest,
  handleAcceptFriendRequest,
  handleSendFriendRequest,
}) => {
  return (
    <CustomModal visible={isOpen} transparent={true} dismiss={dismiss}>
      <View style={styles.popupContent}>
        <Text style={styles.searchText}>Search for friends</Text>
        <SearchInput
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmitEditing={handleSearch}
        />
        <View style={styles.usersSection}>
          {users.map((foundUser, id) => (
            <UserWidget
              key={id}
              user={foundUser}
              onSendRequest={handleSendFriendRequest}
              onRemoveRequest={handleRemoveFriendRequest}
              onAcceptRequest={handleAcceptFriendRequest}
            />
          ))}
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
  },
  searchText: {
    alignSelf: "center",
    color: "#AFAFAF",
    fontSize: 20,
    fontWeight: "600",
  },
  usersSection: {
    flexDirection: "column",
    padding: 10,
  },
});

export default SearchFriends;
