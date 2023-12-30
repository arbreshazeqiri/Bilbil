import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const SearchInput = ({ value, onChangeText, onSubmitEditing }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name={'search'} size={20} color={'#AFAFAF'} />
      <TextInput
        style={styles.searchInput}
        onChangeText={onChangeText}
        value={value}
        placeholder="Name or Username"
        placeholderTextColor="#AFAFAF"
        returnKeyType="search"
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AFAFAF',
    borderRadius: 10,
    backgroundColor: '#2B3440',
    height: 40,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    height: 40,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
});

export default SearchInput;
