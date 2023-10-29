import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const headerIcons = [
    {
      name: 'Flag',
      size: 45,
      iconSource: require('../assets/navigation/albanian-flag.png'),
    },
    {
      name: 'Streak',
      size: 30,
      value: 1,
      iconSource: require('../assets/navigation/streak.png')
    },
    {
      name: 'Level',
      size: 30,
      value: 1,
      iconSource: require('../assets/navigation/level.png')
    },
    {
      name: 'Hearts',
      size: 30,
      value: 5,
      iconSource: require('../assets/navigation/heart.png')
    }
  ]

  const HeaderIcons = ({ icons }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#212832' }}>
      {icons.map((icon, index) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} key={index}>
          <Image key={index} source={icon.iconSource} style={{ width: icon.size, height: icon.size }} />
          {icon.value && <Text style={{ color: 'white', fontWeight: 900, fontSize: 18 }}>{icon.value}</Text>}
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#212832' }}>
      <View>
        <HeaderIcons icons={headerIcons} />
      </View>
      <View style={styles.base}>
        <Text style={styles.name}>Home</Text>
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