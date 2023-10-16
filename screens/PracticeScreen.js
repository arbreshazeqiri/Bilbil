import { StyleSheet, Text, View } from 'react-native';

const PracticeScreen = () => {

  return (<View style={styles.base}>
    <Text style={styles.name}>Practice</Text>
  </View>)
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#212832',
  },
  name: {
    color: 'white',
    fontSize: 50
  }
});


export default PracticeScreen