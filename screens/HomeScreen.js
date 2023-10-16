import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {

  return (<View style={styles.base}>
    <Text style={styles.name}>Home</Text>
  </View>)
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#212832',
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    color: 'white',
    fontSize: 50
  }
});


export default HomeScreen