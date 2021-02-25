import React, {useState} from 'react';
import { StyleSheet,View,Text,TextInput,Keyboard,ScrollView } from 'react-native';
import config from '../config'
import FlatButton from "../shared/button";

export default function Login({navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const IP = config.IP;

    const verifyLogin = async (email,password) => {
        try {

            const response = await fetch(IP + "/login", 
                {
                method: "POST", 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
                }
            );
            
            if(!response.ok) {
                throw new Error(response.messages)
            }
            
            const user = await response.json();
            
            return {
                user: user,
                verified: true,
                email: user.userDetails.email,
                firstName: user.userDetails.firstName,
            }

        } catch(error) {
            console.log(error);
            return {
                user: error,
                verified: false
            }
        }
    }

    const login = async (email,password) => {

        const user = await verifyLogin(email,password);

        if (user.verified) {
            navigation.replace("Home", {
                userState: user,
                email: user.email,
            })
        }
    }

    return (
        <ScrollView style={{backgroundColor: "#417123",height: "100%"}}>
            <View style={styles.background}>
                <Text style={styles.title}>Sustainable Practices App</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.inputView}>
                        <Text>Username</Text>
                        <TextInput 
                            style={styles.input}
                            value = {username}
                            onChangeText={(text) => setUsername(text)}
                        />
                    </View>

                    <View>
                        <Text>Password</Text>
                        <TextInput 
                            style={styles.input}
                            value = {password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry = {true}
                        />
                    </View>
                </View>

                <View style={{flex: 1}}>
                    <FlatButton text="Login" onPress={async () => await login(username,password)}/>

                    <View style={{flex: 1,justifyContent: "flex-end"}}>
                        <Text style={{textAlign:"center"}}>Don't have an account? Register here!</Text>
                        <FlatButton text="Register" onPress={() => navigation.navigate("Register")}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        justifyContent: "space-evenly",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
    },
    inputContainer: {
        textAlign: "center",
        alignSelf: "center",
        margin: 10,
        padding: 20,
        flex: 1,
    },
    inputView: {
        
    },
    input: {
        textAlign: "center",
        backgroundColor: "white"
    }
})