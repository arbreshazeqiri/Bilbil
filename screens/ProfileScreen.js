import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalooSemiBoldFont from '../assets/fonts/Baloo-SemiBold.ttf';
import BalooFont from '../assets/fonts/Baloo.ttf';
import { useFonts } from 'expo-font';
import { Ionicons } from 'react-native-vector-icons';
import Group from '../assets/avatars/Female-5'
import CustomButton from '../components/CustomButton';
import LegendItem from '../components/LegendItem';

const ProfileScreen = () => {
  const [isLoaded] = useFonts({
    "baloo": BalooFont,
    "baloo-semibold": BalooSemiBoldFont,
  });

  if (!isLoaded) {
    return null;
  }

  const legend = [
    {
      value: 1,
      src: require('../assets/navigation/streak.png'),
      dsc: 'Day streak',
    },
    {
      value: 1,
      src: require('../assets/navigation/level.png'),
      dsc: 'Level reached',
    },
  ]

  const handleAddFriends = () => {
    //open modal
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#212832' }}>
      <View style={styles.base}>
        <View style={styles.picContainer}>
          <View style={styles.avatar}>
            <Group />
          </View>
          <TouchableOpacity
            style={styles.settings}
          >
            <Ionicons
              name={'settings-outline'}
              size={30}
              color={'#212832'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.mainTitle}>
            <Text style={styles.name}>Arbresha Zeqiri</Text>
            <Image source={require('../assets/navigation/albanian-flag.png')} style={{ width: 40, height: 40 }} />
          </View>
          <Text style={styles.details}>vajzallave</Text>
          <Text style={styles.details}>Joined September 2023</Text>
          <Text style={styles.accentDetail}>6 friends</Text>
          <View style={styles.buttons}>
            <CustomButton title="Add friends" color="#FF9100" bgColor="#212832" borderColor={'#2E3845'} hasTopBorder onPress={handleAddFriends} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.mainTitle}>
            <Text style={styles.name}>Information</Text>
          </View>
          <View style={styles.legend}>
            {legend.map((el, id) => <View style={styles.button} key={id}>
              <LegendItem value={el.value} description={el.dsc} src={el.src} color="#FF9100" bgColor="#212832" borderColor={'#2E3845'} hasTopBorder />
            </View>)}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#212832',
  },
  picContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    width: '100%',
    height: 220,
    paddingTop: 20,
  },
  avatar: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    top: 20,
    right: 10,
    position: 'absolute'
  },
  mainTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'baloo-semibold',
  },
  infoContainer: {
    flexDirection: 'column',
    paddingTop: 10,
    padding: 20,
  },
  details: {
    color: '#DAE5EB',
    fontSize: 15,
    marginVertical: 2,
  },
  accentDetail: {
    color: '#FF9100',
    fontSize: 15,
    marginVertical: 8,
    fontWeight: '600'
  },
  buttons: {
    display: 'flex',
    width: '90%',
    justifyContent: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  legend: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    padding: 10,
  }
});


export default ProfileScreen