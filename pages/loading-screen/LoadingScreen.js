import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SanFranciscoFont from '../../assets/fonts/SanFrancisco.otf';
import BalooSemiBoldFont from '../../assets/fonts/Baloo-SemiBold.ttf';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const LoadingScreen = () => {

  const [isLoaded] = useFonts({
    "baloo-semibold": BalooSemiBoldFont,
    "sf": SanFranciscoFont,
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }


    return (<View style={styles.base} onLayout={handleOnLayout}>
        <View style={styles.container} >
            <StatusBar style="light" hidden={false} animated />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/bilbil.png')} />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>bilbil</Text>
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    base: {
      flex: 1,
      backgroundColor: '#212832',
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#212832',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    imageContainer: {
      flex: 3,
      justifyContent: 'center'
    },
    image: {
      width: 120,
      height: 150
    },
    nameContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    name: {
      fontFamily: 'baloo-semibold',
      color: 'white',
      fontSize: 50
    }
  });  


export default LoadingScreen