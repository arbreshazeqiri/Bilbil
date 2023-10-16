
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const PracticeScreen = () => {

  return (<View style={styles.base}>
    <StatusBar style="light" hidden={false} animated />
    <View style={styles.nameContainer}>
      <Text style={styles.name}>Practice</Text>
    </View>
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


export default PracticeScreen