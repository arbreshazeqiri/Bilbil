import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalooSemiBoldFont from '../assets/fonts/Baloo-SemiBold.ttf';
import BalooFont from '../assets/fonts/Baloo.ttf';
import { useFonts } from 'expo-font';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoaded] = useFonts({
        "baloo": BalooFont,
        "baloo-semibold": BalooSemiBoldFont,
    });

    if (!isLoaded) {
        return null;
    }

    const handleLogin = () => {
        const user = {
          email: email,
          password: password,
        };
    
        axios
          .post(`http://192.168.2.2:3000/login`, user)
          .then((response) => {
            console.log(response);
            const token = response.data.token;
            AsyncStorage.setItem("authToken", token);
            navigation.navigate("Main");
          })
          .catch((error) => {
            Alert.alert("Login error");
            console.log("error ", error);
          });
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.base} >
                <View style={styles.brand}>
                    <Text style={styles.name}>Log in</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder='Email'
                        placeholderTextColor='#AFAFAF'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor='#AFAFAF'
                    />
                </View>
                <View style={styles.buttons}>
                    <CustomButton title="LOG IN" color="white" bgColor="#944ADE" borderColor={'#7939B8'} onPress={handleLogin}/>
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
        width: '100%',
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
    input: {
        color: '#3C3C3C',
        width: '100%',
        borderRadius: 15,
        height: 40,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#AFAFAF',
        padding: 10,
    },
    name: {
        color: '#3C3C3C',
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

export default LoginScreen