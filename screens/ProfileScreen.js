import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {

  return (<View style={styles.base}>
    <Text style={styles.name}>Profile</Text>
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


export default ProfileScreen