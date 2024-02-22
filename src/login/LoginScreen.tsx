import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    function login() {
        const dados = {
            email: email,
            password: password
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>



            <Text style={styles.title}>
                Entrar no Spotify
            </Text>

            <View style={styles.card}>
                <Text style={styles.input}>E-mail ou nome do usuario</Text>
            <TextInput style={styles.input} placeholder="E-mail ou nome de usuario" placeholderTextColor="#FFFFFF"
                onChangeText={(textEmail)=> setEmail(textEmail)}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    logo: {
       width:10,
       height:10,
      alignItems:'center',
        marginTop:-400
    },

    title: {
        marginTop: -450,
        color: 'white',
        fontSize: 30,
    },
    card: {
        backgroundColor: '#121212',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation:3,
        shadowColor:'rgba(0,0,0,0.3',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
        
    },
    input: {
    
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor: 'white'
    }
})
export default LoginScreen;