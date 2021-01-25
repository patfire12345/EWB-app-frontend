import React, {useState} from 'react';
import { View,Text,TextInput,Keyboard,ScrollView } from 'react-native';
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
        <View>
            <Text>Sustainable Practices App</Text>
            <TextInput 
                value = {username}
                onChangeText={(text) => setUsername(text)}
                placeholder = "Username"
            />
            <TextInput 
                value = {password}
                onChangeText={(text) => setPassword(text)}
                placeholder = "Password"
                secureTextEntry = {true}
            />
            <FlatButton text="Login" onPress={async () => await login(username,password)}/>
            <FlatButton text="Register" onPress={() => navigation.navigate("Register")}/>
        </View>
    )
}