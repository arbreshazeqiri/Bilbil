import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const Checkbox = ({ index, text, isChecked, setIsChecked }) => {

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsChecked(index)}>
      <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
        {isChecked && <FontAwesome5 name="check" color="white" size={30} />}
      </View>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 45,
    height: 45,
    borderRadius: 6,
    backgroundColor: '#3c3c3c',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#93D334',
  },
  label: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'baloo'
  },
});

export default Checkbox;
