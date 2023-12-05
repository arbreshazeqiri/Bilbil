import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalooSemiBoldFont from '../assets/fonts/Baloo-SemiBold.ttf';
import BalooFont from '../assets/fonts/Baloo.ttf';
import { Ionicons } from 'react-native-vector-icons';
import Group from '../assets/avatars/Female-5'
import CustomButton from '../components/CustomButton';
import LegendItem from '../components/LegendItem';
import userStore from '../store/UserStore';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';
import CustomModal from '../components/CustomModal';
import axios from "axios";

const ProfileScreen = observer(() => {
  const user = userStore.user;
  const [isOpen, setIsOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [users, setUsers] = useState([])

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

  const handleSearch = () => {
    try {
      axios
        .post(`http://100.82.181.111:3000/search`, { searchInput })
        .then((response) => {
          const foundUsers = response.data.users
          setUsers(foundUsers)
        })
        .catch((error) => {
          Alert.alert(
            "An error has occurred while trying to search for users. Please try again later.",
          );
          console.log("error", error);
        });
    } catch (err) {
      console.log(err)
    }
  };

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
            <Text style={styles.name}>{user.name}</Text>
            <Image source={require('../assets/navigation/albanian-flag.png')} style={{ width: 40, height: 40 }} />
          </View>
          <Text style={styles.details}>{user.username}</Text>
          <Text style={styles.details}>Joined {dayjs(user.joindDate).format('MMMM YYYY')}</Text>
          <Text style={styles.accentDetail}>{user.followers && user.followers.length || 0} friends</Text>
          <View style={styles.buttons}>
            <CustomButton title="Add friends" color="#FF9100" bgColor="#212832" borderColor={'#2E3845'} hasTopBorder onPress={() => setIsOpen(true)} />
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
        <CustomModal
          visible={isOpen}
          transparent={true}
          dismiss={() => setIsOpen(!isOpen)}
        >
          <View
            style={styles.popupContent}
          >
            <Text style={styles.searchText}>
              Search for friends
            </Text>
            <View style={styles.searchContainer}>
              <Ionicons
                name={'search'}
                size={20}
                color={'#AFAFAF'}
              />
              <TextInput
                style={styles.searchInput}
                onChangeText={(text) => setSearchInput(text)}
                value={searchInput}
                placeholder='Name or Username'
                placeholderTextColor='#AFAFAF'
                returnKeyType='search'
                onSubmitEditing={handleSearch}
              />
            </View>
            <View style={styles.usersSection}>
              {users.map((user, id) =>
                <View key={id} style={styles.userWidget}>
                  <View style={styles.userData}>
                    <Text style={styles.userDetailOne}>{user.name}</Text>
                    <Text style={styles.userDetailTwo}>{user.username}</Text>
                  </View>
                  <View style={styles.userButton}>
                    <CustomButton icon={true} iconName={'person-add'} title="" color="#212832" bgColor="#FF9100" borderColor={'#E58200'} onPress={() => sendFriendRequest(id)} />
                  </View>
                </View>
              )}
            </View>
          </View>
        </CustomModal>
      </View>
    </SafeAreaView>
  )
})

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
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 150
  },
  popupContent: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
  },
  searchText: {
    alignSelf: 'center',
    color: '#AFAFAF',
    fontSize: 20,
    fontWeight: '600',
  },
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
    fontWeight: 'semibold',
    padding: 10,
  },
  usersSection: {
    flexDirection: 'column',
    padding: 10,
  },
  userWidget: {
    color: 'white',
    width: '100%',
    height: 60,
    fontWeight: 'semibold',
    borderWidth: 1,
    borderColor: '#AFAFAF',
    backgroundColor: '#2B3440',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userData: {
    flexDirection: 'column'
  },
  userDetailOne: {
    fontSize: 18,
    color: 'white',
    fontWeight: "bold",
    alignSelf: "center",
  },
  userDetailTwo: {
    color: '#DAE5EB',
    fontSize: 14,
    marginVertical: 2,
  },
  userButton: {
    width: 60,
    height: 40
  }
});


export default ProfileScreen