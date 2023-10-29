import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#212832' }}>
      <View style={styles.base}>
        <Text style={styles.name}>Profile</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#212832',
    padding: 20,
  },
  name: {
    color: 'white',
    fontSize: 50
  }
});


export default ProfileScreen