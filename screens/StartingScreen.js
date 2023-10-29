import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalooSemiBoldFont from '../assets/fonts/Baloo-SemiBold.ttf';
import BalooFont from '../assets/fonts/Baloo.ttf';
import { useFonts } from 'expo-font';
import CustomButton from '../components/CustomButton';
const StartingScreen = () => {
    const navigation = useNavigation();

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    };
    
    const handleNavigateToSignup = () => {
        navigation.navigate('Signup');
    };

    const [isLoaded] = useFonts({
        "baloo": BalooFont,
        "baloo-semibold": BalooSemiBoldFont,
    });

    if (!isLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.base} >
                <View style={styles.brand}>
                    <Image source={require('../assets/icon.png')} style={{ width: 170, height: 170 }} />
                    <Text style={styles.name}>bilbil</Text>
                    <Text style={styles.banner}>Unlock the beauty of the Albanian Language</Text>
                </View>
                <View style={styles.buttons}>
                    <CustomButton title="GET STARTED" color="white" bgColor="#FFC700" borderColor={'#DBAE0D'} onPress={handleNavigateToSignup} />
                    <CustomButton title="I ALREADY HAVE AN ACCOUNT" color="#FFC700" bgColor="white" borderColor={'#E5E5E5'} onPress={handleNavigateToLogin} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        gap: 20,
    },
    brand: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    buttons: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
    },
    name: {
        color: '#FFC700',
        fontSize: 40,
        fontFamily: 'baloo-semibold'
    },
    banner: {
        color: '#797979',
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'baloo'
    }
});

export default StartingScreen